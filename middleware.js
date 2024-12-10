import { clerkMiddleware } from "@clerk/nextjs/server";

// Define the createRouteMatcher function
const createRouteMatcher = (routes) => {
  const patterns = routes.map((route) => new RegExp(route));
  return (req) => patterns.some((pattern) => pattern.test(req.nextUrl.pathname));
};

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
