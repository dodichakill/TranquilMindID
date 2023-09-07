import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const requestUrl = new URL(request.url);
  //   const formData = await request.formData();
  //   const email = String(formData.get("email"));
  //   const password = String(formData.get("password"));
  const supabase = createRouteHandlerClient({ cookies });

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/register?error=Gagal Mengautentikasi Pengguna, silahkan coba daftar lagi`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      }
    );
  }

  console.log(data);

  return NextResponse.redirect(data.url, {
    // a 301 status is required to redirect from a POST to a GET route
    status: 301,
  });
}
