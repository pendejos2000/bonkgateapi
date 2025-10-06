import { type NextRequest, NextResponse } from "next/server"
import { TotoApi } from "../../../../api/utils/totoApi"

export async function GET(request: NextRequest, { params }: { params: { contract_address: string } }) {
  try {
    const contractAddress = params.contract_address

    if (!contractAddress) {
      return NextResponse.json({ error: "Contract address is required" }, { status: 400 })
    }

    // Get query parameters
    const searchParams = request.nextUrl.searchParams
    const query: Record<string, string | number | boolean | Array<string | number | boolean>> = {}

    searchParams.forEach((value, key) => {
      // Handle array parameters
      if (searchParams.getAll(key).length > 1) {
        query[key] = searchParams.getAll(key)
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

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching BNB token info:", error)
    return NextResponse.json({ error: "Failed to fetch BNB token info" }, { status: 500 })
  }
}
