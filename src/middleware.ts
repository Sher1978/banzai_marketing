import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // If request hits outrich.online or outrich alias at root '/'
  if (host.toLowerCase().includes('outrich') && url.pathname === '/') {
    url.pathname = '/outrich-dubai';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
