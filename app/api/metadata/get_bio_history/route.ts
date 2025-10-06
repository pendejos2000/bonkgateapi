import { type NextRequest, NextResponse } from "next/server"
import { TotoApi } from "../../utils/totoApi"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { user, how = "username", page = 1 } = body

    if (!user) {
      return NextResponse.json({ error: "User parameter is required" }, { status: 400 })
    }

    const api = new TotoApi()
    const data = await api.getBioHistory(user, how, page)

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching bio history:", error)
    return NextResponse.json({ error: "Failed to fetch bio history" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const user = searchParams.get("user")
  const how = searchParams.get("how") || "username"
  const page = Number.parseInt(searchParams.get("page") || "1")

  if (!user) {
    return NextResponse.json({ error: "User parameter is required" }, { status: 400 })
  }

  try {
    const api = new TotoApi()
    const data = await api.getBioHistory(user, how, page)

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching bio history:", error)
    return NextResponse.json({ error: "Failed to fetch bio history" }, { status: 500 })
  }
}
