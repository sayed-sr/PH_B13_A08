import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

/**
 * This catch-all route handles all Better-Auth requests 
 * (sign-in, sign-up, get-session, sign-out, etc.)
 */
export const { GET, POST } = toNextJsHandler(auth);