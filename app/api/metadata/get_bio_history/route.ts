import { NextResponse } from "next/server"
import { TotoApi } from "../utils/totoApi"

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Max-Age": "86400",
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders })
}

export async function GET(request: Request, context: { params: { username: string } }) {
  try {
    const username = context?.params?.username
    if (!username) {
      return NextResponse.json({ error: "username parameter is required" }, { status: 400, headers: corsHeaders })
    }

    const api = new TotoApi()
    const data = await api.getBioHistory(username)

    return NextResponse.json(data, { headers: corsHeaders })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500, headers: corsHeaders })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username } = body

    if (!username) {
      return NextResponse.json({ error: "username is required" }, { status: 400, headers: corsHeaders })
    }

    const api = new TotoApi()
    const data = await api.getBioHistory(username)

    return NextResponse.json(data, { headers: corsHeaders })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500, headers: corsHeaders })
  }
}
