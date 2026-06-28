import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    // STRIPE META
    const productName = String(formData.get("productName") || "")
    const packageTier = String(formData.get("packageTier") || "")
    const priceAmountRaw = formData.get("priceAmount")
    const priceCurrencyRaw = formData.get("priceCurrency")
    const orderId = String(formData.get("orderId") || "")
    const customerEmail = String(formData.get("customerEmail") || "")
    const purchaseTimestampRaw = formData.get("purchaseTimestamp")

    // FORM FIELDS
    const productDescription = String(formData.get("productDescription") || "")
    const audience = String(formData.get("audience") || "")
    const hook = String(formData.get("hook") || "")
    const style = String(formData.get("style") || "")
    const cta = String(formData.get("cta") || "")
    const notes = String(formData.get("notes") || "")
    const musicGenre = String(formData.get("musicGenre") || "")
    const voiceover = String(formData.get("voiceover") || "")
    const videoLength = String(formData.get("videoLength") || "")

    const photos = formData.getAll("photos") as File[]
    const audioFile = formData.get("audio") as File | null

    // PRICE FORMAT (remove decimals)
    const priceAmountNum = Number(priceAmountRaw || 0)
    const pricePaid = Math.round(priceAmountNum / 100)

    const priceCurrencyStr =
      typeof priceCurrencyRaw === "string"
        ? priceCurrencyRaw.toUpperCase()
        : ""

    // PURCHASE TIME FORMAT
    let purchaseTimeFormatted = ""
    if (purchaseTimestampRaw) {
      const ts = Number(purchaseTimestampRaw)
      const date = new Date(ts * 1000)
      purchaseTimeFormatted = date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "America/New_York"
      })
    }

    // EMAIL TRANSPORTER
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // CLEAN WHITE EMAIL — NO BACKGROUND COLORS
    const html = `
      <div style="font-family:Arial, sans-serif; padding:20px; color:#000;">

        <!-- STRIPE DETAILS -->
        <h2 style="
          margin:0 0 12px 0;
          font-size:22px;
          font-weight:600;
          background:linear-gradient(to right, #8B5CF6, #4ADE80);
          -webkit-background-clip:text;
          color:transparent;
        ">
          Stripe Order Details
        </h2>

        <p style="margin:4px 0; color:#444;">
          <strong style="color:#000;">Package Ordered:</strong> ${packageTier || productName}
        </p>

        <p style="margin:4px 0; color:#444;">
          <strong style="color:#000;">Price Paid:</strong> $${pricePaid} ${priceCurrencyStr}
        </p>

        <p style="margin:4px 0; color:#444;">
          <strong style="color:#000;">Order ID:</strong> ${orderId}
        </p>

        <p style="margin:4px 0; color:#444;">
          <strong style="color:#000;">Customer Email:</strong> ${customerEmail}
        </p>

        <p style="margin:4px 0; color:#444;">
          <strong style="color:#000;">Purchase Time:</strong> ${purchaseTimeFormatted}
        </p>

        <hr style="margin:25px 0; border:none; border-top:1px solid #ddd;" />

        <!-- FORM DETAILS -->
        <h2 style="
          margin:0 0 12px 0;
          font-size:20px;
          font-weight:600;
          background:linear-gradient(to right, #8B5CF6, #4ADE80);
          -webkit-background-clip:text;
          color:transparent;
        ">
          Client Submission Details
        </h2>

        <p style="margin:4px 0; color:#555;">
          <strong style="color:#000;">Product Description:</strong> ${productDescription}
        </p>

        <p style="margin:4px 0; color:#555;">
          <strong style="color:#000;">UGC Actor:</strong> ${audience}
        </p>

        <p style="margin:4px 0; color:#555;">
          <strong style="color:#000;">Video Length:</strong> ${videoLength} seconds
        </p>

        <p style="margin:4px 0; color:#555;">
          <strong style="color:#000;">Audio Preference:</strong> ${voiceover}
        </p>

        ${
          musicGenre
            ? `
        <p style="margin:4px 0; color:#555;">
          <strong style="color:#000;">Music Genre:</strong> ${musicGenre}
        </p>
        `
            : ""
        }

        <p style="margin:4px 0; color:#555;">
          <strong style="color:#000;">Hook Style:</strong> ${hook}
        </p>

        <p style="margin:4px 0; color:#555;">
          <strong style="color:#000;">Video Style:</strong> ${style}
        </p>

        <p style="margin:4px 0; color:#555;">
          <strong style="color:#000;">CTA:</strong> ${cta}
        </p>

        <p style="margin:4px 0; color:#555;">
          <strong style="color:#000;">Notes:</strong> ${notes}
        </p>

      </div>
    `

    // ATTACHMENTS
    const attachments = await Promise.all(
      photos.map(async (file, index) => ({
        filename: file.name || `photo-${index + 1}.jpg`,
        content: Buffer.from(await file.arrayBuffer())
      }))
    )

    if (audioFile) {
      attachments.push({
        filename: audioFile.name || "audio-file",
        content: Buffer.from(await audioFile.arrayBuffer())
      })
    }

    // SEND EMAIL
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "support.vaylo@gmail.com",
      subject: `New Vaylo Order Intake — ${productName}`,
      html,
      attachments
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Order intake error:", err)
    return NextResponse.json({ error: "Failed" }, { status: 500 })
  }
}
