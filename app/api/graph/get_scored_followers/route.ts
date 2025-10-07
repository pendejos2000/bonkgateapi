import { type NextRequest, NextResponse } from "next/server"
import { TotoApi } from "../../utils/totoApi"

export const runtime = 'nodejs'

interface Follower {
  id: string
  username: string
  name: string
  followers_count?: number
  following_count?: number
  tweet_count?: number
}

function calculateFollowerScore(follower: Follower): number {
  const followersWeight = 0.4
  const followingWeight = 0.2
  const tweetsWeight = 0.4

  const followersScore = (follower.followers_count || 0) * followersWeight
  const followingScore = (follower.following_count || 0) * followingWeight
  const tweetsScore = (follower.tweet_count || 0) * tweetsWeight

  return followersScore + followingScore + tweetsScore
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const username = searchParams.get("username")
    const limit = Number.parseInt(searchParams.get("limit") || "20")

    if (!username) {
      return NextResponse.json({ error: "Username parameter is required" }, { status: 400 })
    }

    const api = new TotoApi()
    const response = await api.fetchScoredFollowers(username)

    // Extract the followers array from nested response: response.data.data
    const followersData = response?.data?.data || []

    if (!followersData || followersData.length === 0) {
      return NextResponse.json({ error: "No followers found" }, { status: 404 })
    }

    // Followers already have scores from the API, just sort and limit
    const sortedFollowers = [...followersData].sort((a: any, b: any) => 
      (b.follower_score || 0) - (a.follower_score || 0)
    )

    const topFollowers = sortedFollowers.slice(0, limit)

    return NextResponse.json(
      { scoredFollowers: topFollowers },
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
    console.error("Error in get_scored_followers:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, limit = 20 } = body

    if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 })
    }

    const api = new TotoApi()
    const response = await api.fetchScoredFollowers(username)

    // Extract the followers array from nested response: response.data.data
    const followersData = response?.data?.data || []

    if (!followersData || followersData.length === 0) {
      return NextResponse.json({ error: "No followers found" }, { status: 404 })
    }

    // Followers already have scores from the API, just sort and limit
    const sortedFollowers = [...followersData].sort((a: any, b: any) => 
      (b.follower_score || 0) - (a.follower_score || 0)
    )

    const topFollowers = sortedFollowers.slice(0, limit)

    return NextResponse.json(
      { scoredFollowers: topFollowers },
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
    console.error("Error in get_scored_followers POST:", error)
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
