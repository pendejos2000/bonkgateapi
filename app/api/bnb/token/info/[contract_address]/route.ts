import { NextResponse } from 'next/server';
import { TotoApi } from '../../../../utils/totoApi';

export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Max-Age': '86400',
};

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(
  request: Request,
  context: { params: { contract_address: string } }
) {
  try {
    const contract = context?.params?.contract_address;
    if (!contract) {
      return NextResponse.json(
        { error: 'contract_address parameter is required' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Collect query params, preserving duplicates
    const url = new URL(request.url);
    const search = url.searchParams;
    const query: Record<string, string | Array<string>> = {};
    const keys = Array.from(new Set(Array.from(search.keys())));
    for (const key of keys) {
      const all = search.getAll(key);
      query[key] = all.length > 1 ? all : all[0];
    }

    const api = new TotoApi();
    const data = await api.getBnbTokenInfo(contract, query);

    return NextResponse.json(data, { headers: corsHeaders });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}
