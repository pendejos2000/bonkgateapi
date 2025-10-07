import { type NextRequest, NextResponse } from "next/server"
import { TotoApi } from "../../../../utils/totoApi"

export const runtime = 'nodejs'

export async function GET(request: NextRequest, { params }: { params: { contract_address: string } }) {
  try {
    const { contract_address } = params

    if (!contract_address) {
      return NextResponse.json({ error: "Contract address is required" }, { status: 400 })
    }

    const api = new TotoApi()
    const tokenInfo = await api.fetchTokenInfo(contract_address)

    return NextResponse.json(
      { tokenInfo },
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
    console.error("Error in token info:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest, { params }: { params: { contract_address: string } }) {
  try {
    const { contract_address } = params

    if (!contract_address) {
      return NextResponse.json({ error: "Contract address is required" }, { status: 400 })
    }

    const api = new TotoApi()
    const tokenInfo = await api.fetchTokenInfo(contract_address)

    return NextResponse.json(
      { tokenInfo },
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
    console.error("Error in token info POST:", error)
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
