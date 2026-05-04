import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const runtime = "nodejs";          // required for MongoDB
export const dynamic = "force-dynamic";  // ⭐ prevents static optimization
export const fetchCache = "force-no-store"; // ⭐ disables caching

export const { GET, POST } = toNextJsHandler(auth);