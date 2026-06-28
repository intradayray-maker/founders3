import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const sessionId = searchParams.get("session_id")

  if (!sessionId) {
    return NextResponse.json({ error: "Missing session_id" }, { status: 400 })
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items.data.price.product"]
    })

    const lineItem = session.line_items?.data[0]
    const price = lineItem?.price
    const product = price?.product as Stripe.Product | null

    return NextResponse.json({
      productName: product?.name ?? null,
      packageTier: product?.name ?? null,
      priceAmount: price?.unit_amount ?? null,
      priceCurrency: price?.currency ?? null,
      orderId: session.id,
      customerEmail: session.customer_details?.email ?? null,
      purchaseTimestamp: session.created ? new Date(session.created * 1000).toISOString() : null
    })
  } catch (err) {
    console.error("Stripe session error:", err)
    return NextResponse.json({ error: "Failed" }, { status: 500 })
  }
}
