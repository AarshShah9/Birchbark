import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
  // debug: true,
  ignoredRoutes: ["/api/stripe/stripeWebhook"],
  publicRoutes: [
    "/sign-in",
    "/sign-up",
    "/",
    "/about-us",
    "/contact-us",
    "/confirmation",
    "/organization-selection",
    "/api/trpc/organization.getAllOrganizations",
  ],
  afterAuth(auth, req, evt) {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    console.log(req.url);

    if (auth.userId && req.nextUrl.pathname === "/sign-in") {
      const orgSelection = new URL("/app/calendar", req.url);
      return NextResponse.redirect(orgSelection);
    }

    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
