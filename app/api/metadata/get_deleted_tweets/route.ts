import { NextResponse } from "next/server"
import { TotoApi, filterCredits } from "../../utils/totoApi"

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Max-Age": "86400",
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders })
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const user = searchParams.get("user")
    const how = searchParams.get("how") || "username"
    const page = Number.parseInt(searchParams.get("page") || "1")

    if (!user) {
      return NextResponse.json({ error: "user parameter is required" }, { status: 400, headers: corsHeaders })
    }

    const api = new TotoApi()
    const data = await api.getDeletedTweets(user, how, page)
    const filteredData = filterCredits(data)

    return NextResponse.json(filteredData, { headers: corsHeaders })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500, headers: corsHeaders })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { user, how = "username", page = 1 } = body

    if (!user) {
      return NextResponse.json({ error: "user parameter is required" }, { status: 400, headers: corsHeaders })
    }

    const api = new TotoApi()
    const data = await api.getDeletedTweets(user, how, page)
    const filteredData = filterCredits(data)

    return NextResponse.json(filteredData, { headers: corsHeaders })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500, headers: corsHeaders })
  }
}
