"use server"

import { cookies } from "next/headers"

export async function submitSupportTicket(prevState: any, formData: FormData) {
  try {
    // Rate limiting check
    const cookieStore = await cookies()
    const lastSubmission = cookieStore.get("last_support_ticket")
    const now = Date.now()

    if (lastSubmission) {
      const timeSinceLastSubmission = now - Number.parseInt(lastSubmission.value)
      const fifteenMinutes = 15 * 60 * 1000 // 15 minutes in milliseconds

      if (timeSinceLastSubmission < fifteenMinutes) {
        const remainingTime = Math.ceil((fifteenMinutes - timeSinceLastSubmission) / 60000)
        return {
          success: false,
          error: `Please wait ${remainingTime} minute${remainingTime > 1 ? "s" : ""} before submitting another ticket.`,
        }
      }
    }

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const telegram = formData.get("telegram") as string
    const category = formData.get("category") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !category || !message) {
      return { success: false, error: "Missing required fields" }
    }

    const webhookUrl =
      "https://discord.com/api/webhooks/1392531253072367716/TeO8wsrvs0BbK2WKIWPydjcKrWhE79Id7zxMVYX0gW-qa3OIw5Dl3Fvl23UqB-XWhLh-"

    const payload = {
      embeds: [
        {
          title: `🎫 New Support Ticket: ${category}`,
          color: 0xf0b90b, // FYS Orange
          fields: [
            {
              name: "👤 Name",
              value: name,
              inline: true,
            },
            {
              name: "📧 Email",
              value: email,
              inline: true,
            },
            {
              name: "💬 Telegram",
              value: telegram || "Not provided",
              inline: true,
            },
            {
              name: "📝 Message",
              value: message.length > 1000 ? message.substring(0, 1000) + "..." : message,
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "FourYourSafety Support System",
          },
        },
      ],
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      // Set cookie for rate limiting
      cookieStore.set("last_support_ticket", now.toString(), {
        maxAge: 15 * 60, // 15 minutes
        httpOnly: true,
        sameSite: "strict",
      })

      return { success: true, message: "Your support ticket has been submitted successfully!" }
    } else {
      const errorText = await response.text()
      console.error("Failed to send to Discord:", errorText)
      return { success: false, error: "Failed to send message to Discord." }
    }
  } catch (error) {
    console.error("Error submitting support ticket:", error)
    return { success: false, error: "An unexpected error occurred." }
  }
}
