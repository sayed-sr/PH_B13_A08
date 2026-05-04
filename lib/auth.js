import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

// ⭐ create global cached connection (serverless safe)
let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(process.env.MONGODB_URI);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export const auth = betterAuth({
  database: mongodbAdapter(
    (await clientPromise).db("skillsphere")   // ⭐ CONNECT FIRST
  ),

  emailAndPassword: {
    enabled: true,
  },

  trustedOrigins: [
  "http://localhost:3000",
  "https://education-three-beryl.vercel.app",
  "https://*.vercel.app"
],
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
});