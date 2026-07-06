import { NextResponse } from "next/server"
import Stripe from "stripe"
import nodemailer from "nodemailer"

export const config = {
  api: {
    bodyParser: false
  }
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature")

  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 })
  }

  const rawBody = await req.text()

  let event

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: any) {
    console.error("Webhook signature error:", err.message)
    return NextResponse.json({ error: err.message }, { status: 400 })
  }

  // Handle successful checkout
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session

    const customerEmail = session.customer_details?.email

    if (customerEmail) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        })

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: customerEmail,
          subject: "Your Stupid Growth Calculators (Bookmark This)",
          text: `
Thanks for supporting the channel — seriously.

Your calculators live right here:
https://foundersgrowth.fun/tools/stupidgrowthcalculator_476303894573

Bookmark that link.

They run in your browser — no downloads, no phone app, nothing sketchy.
Just click and use.

Enjoy,
Ray
          `
        })

        console.log("StupidTools email sent to:", customerEmail)
      } catch (err) {
        console.error("Email send error:", err)
      }
    }
  }

  return NextResponse.json({ received: true })
}
