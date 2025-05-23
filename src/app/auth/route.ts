import { PrivyClient } from "@privy-io/server-auth";
import { headers } from "next/headers";

const privy = new PrivyClient(
  process.env.NEXT_PUBLIC_PRIVY_APP_ID!,
  process.env.PRIVY_SECRET!
);

export async function GET() {
  const headerStore = await headers(); // Await the headers function
  const authHeader = headerStore.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return new Response(JSON.stringify({ error: "No token provided" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // const claims = await privy.verifyAuthToken(token);
    const user = await privy.getUser({ idToken: token });

    return new Response(JSON.stringify({ user }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return new Response(JSON.stringify({ error: "Invalid or expired token" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }
}
