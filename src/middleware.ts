import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();
  const path = url.pathname.toLowerCase();

  // Handle outrich.online domain multi-tenant routing
  if (host.toLowerCase().includes('outrich')) {
    if (path === '/') {
      url.pathname = '/outrich-dubai';
      return NextResponse.rewrite(url);
    }
    if (path === '/maps' || path === '/maps/') {
      url.pathname = '/outrich-dubai/maps';
      return NextResponse.rewrite(url);
    }
    if (path === '/food' || path === '/food/') {
      url.pathname = '/outrich-dubai/food';
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
