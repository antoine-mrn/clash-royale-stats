import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isValidTag, sanitizeTag } from "./utils/stringMethods";

export function middleware(request: NextRequest) {
    console.log(request.nextUrl.pathname);

    const segments = request.nextUrl.pathname.split("/");
    const type = segments[1];
    const tag = segments[2];

    if (!type || !tag || isValidTag(tag)) return NextResponse.next();

    const sanitized = sanitizeTag(tag);
    if (isValidTag(sanitized)) {
        console.log("🚀 ~ middleware ~ sanitized:", sanitized);
        const cleanUrl = request.nextUrl.clone();
        cleanUrl.pathname = `/${type}/${sanitized}`;
        return NextResponse.redirect(cleanUrl);
    } else {
        return NextResponse.rewrite(new URL("/not-found", request.url));
    }
}

export const config = {
    matcher: ["/player/:path*", "/clan/:path*"],
};
