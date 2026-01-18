import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

export async function POST(){
     const supabase = await createClient()

     await supabase.auth.signOut();

     redirect("/auth/login")

}