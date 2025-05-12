// app/logout/route.ts (or route.js)

import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.redirect('/login');
  response.cookies.delete('privy-token');
  response.cookies.delete('privy-session');
  return response;
}
