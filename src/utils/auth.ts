import { PrivyClient } from "@privy-io/server-auth";
import { cookies } from "next/headers";

const privy = new PrivyClient(
  process.env.NEXT_PUBLIC_PRIVY_APP_ID!,
  process.env.PRIVY_SECRET!
);

export async function getAuthenticatedUser() {
  const cookieStore = await cookies();
  const idToken = cookieStore.get("privy-token")?.value;

  if (!idToken || typeof idToken !== 'string') {
    console.warn('No idToken found in cookies');
    return null;
  }

  console.log("auth token", idToken);

  try {
    // Validate the token
    await privy.verifyAuthToken(idToken);

    // Fetch user info with idToken (recommended method)
    const user = await privy.getUser({ idToken });

    console.log("auth", user);
    return user;
  } catch (error) {
    console.error("Auth error:", error);
    return null;
  }
}
