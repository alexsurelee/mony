import { getAuth } from "@clerk/remix/ssr.server";
import type { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";

export async function getDB(
  request: Request
): Promise<{ userId: string; supabase: SupabaseClient }> {
  const { userId, getToken } = await getAuth(request);
  if (!userId) {
    throw new Error("No Clerk User ID");
  }

  const secret = await getToken({ template: "supabase" });
  if (!secret) {
    throw new Error("No supabase token found in Clerk");
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_KEY;
  if (!supabaseUrl) {
    throw new Error("No SUPABASE_URL environment variable");
  }
  if (!supabaseSecretKey) {
    throw new Error("No SUPABASE_KEY environment variable");
  }

  const supabase = createClient(supabaseUrl, supabaseSecretKey);

  supabase.auth.setAuth(secret);
  return { userId, supabase };
}
