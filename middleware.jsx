import { NextResponse } from "next/server";

export function middleware(request) {
    const token = request.cookies.get("token")?.value;
    const path = request.nextUrl.pathname;
    const isPublicPath = path === "/sign_in" || path === "/sign_up";
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/sign_in", request.nextUrl));
    }

    const response = NextResponse.next();
    return response;
}

export const config = {
    matcher:[
        "/user_dashboard/:path*",
        "/favorite",
        "/cart",
        "/sign_up",
        "/sign_in",
        "/checkout",
        // '/((?!api||_next/image|favicon.ico).*)',

    ]

};
