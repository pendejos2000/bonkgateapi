import { NextResponse } from 'next/server';
import { TotoApi, filterCredits } from '../../utils/totoApi';
 
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
 
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const user = data.user;
    const how = data.how || 'username';
    const page = data.page || 1;
 
    if (!user) {
      return NextResponse.json({ error: 'User parameter is required' }, 
        { status: 400, headers: corsHeaders });
    }
 
    const api = new TotoApi();
    const result = await api.getBioHistory(user, how, page);
    const filteredResult = filterCredits(result);
 
    return NextResponse.json(filteredResult, { headers: corsHeaders });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
} 