import { type NextRequest, NextResponse } from "next/server"
import { TotoApi } from "../../../utils/totoApi"

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

export async function GET(request: NextRequest, { params }: { params: { contract_address: string } }) {
  try {
    const contractAddress = params.contract_address

    if (!contractAddress) {
      return NextResponse.json({ error: "Contract address is required" }, { status: 400, headers: corsHeaders })
    }

    // Get query parameters
    const searchParams = request.nextUrl.searchParams
    const query: Record<string, string | number | boolean | Array<string | number | boolean>> = {}

    searchParams.forEach((value, key) => {
      // Handle array parameters
      const allValues = searchParams.getAll(key)
      if (allValues.length > 1) {
        query[key] = allValues
      } else {
        // Try to parse as number or boolean
        if (value === "true") query[key] = true
        else if (value === "false") query[key] = false
        else if (!isNaN(Number(value))) query[key] = Number(value)
        else query[key] = value
      }
    })

    const api = new TotoApi()
    const data = await api.getBnbTokenInfo(contractAddress, query)

    return NextResponse.json(data, { headers: corsHeaders })
  } catch (error) {
    console.error("Error fetching BNB token info:", error)
    return NextResponse.json({ error: "Failed to fetch BNB token info" }, { status: 500, headers: corsHeaders })
  }
}
