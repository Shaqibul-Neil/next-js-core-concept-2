import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request) {
  const { pathname } = request.nextUrl;
  const now = new Date();
  const hour = now.getHours();
  console.log(pathname);

  // NOT /api/feedback* → 404
  if (!pathname.startsWith("/api/feedback")) {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }
  // রাত ১১টার পর (23:00–23:59, 00:00–06:59) block
  if (hour >= 23 || hour < 7) {
    //block/redirect
    return NextResponse.json(
      { message: "API unavailable at this time" },
      { status: 403 }
    );
  }
  // /api/feedback* → allow
  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: "/api/:path*",
};
