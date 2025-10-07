import { type NextRequest, NextResponse } from "next/server"
import { TotoApi } from "../../utils/totoApi"

export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const username = searchParams.get("username")

    if (!username) {
      return NextResponse.json({ error: "Username parameter is required" }, { status: 400 })
    }

    const api = new TotoApi()
    const response = await api.fetchFollowers(username)

    // Extract the followers array from nested response: response.data.data
    const followersData = response?.data?.data || []

    if (!followersData || followersData.length === 0) {
      return NextResponse.json({ error: "No followers found" }, { status: 404 })
    }

    const firstFollower = followersData[0]

    return NextResponse.json(
      { firstFollower },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      },
    )
  } catch (error) {
    console.error("Error in get_first_follower:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username } = body

    if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 })
    }

    const api = new TotoApi()
    const response = await api.fetchFollowers(username)

    // Extract the followers array from nested response: response.data.data
    const followersData = response?.data?.data || []

    if (!followersData || followersData.length === 0) {
      return NextResponse.json({ error: "No followers found" }, { status: 404 })
    }

    const firstFollower = followersData[0]

    return NextResponse.json(
      { firstFollower },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      },
    )
  } catch (error) {
    console.error("Error in get_first_follower POST:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    },
  )
}
