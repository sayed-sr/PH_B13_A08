import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const runtime = "nodejs";

export const dynamic = "force-dynamic";


export const fetchCache = "force-no-store";

const handler = toNextJsHandler(auth);



export async function POST(req, ctx) {
  return handler.POST(req, ctx);
}



export async function GET(req, ctx) {
  return handler.GET(req, ctx);
}