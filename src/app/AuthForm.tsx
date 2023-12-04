"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "./database.types";

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>();

  // Auth UI로 버튼을 누르면 인증 서버로 이동합니다.
  // 인증서버에서 요청한 후에 auth/callback으로 보냅니다. /auth/callback/route.tsx 참조
  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      appearance={{ theme: ThemeSupa }}
      theme="dark"
      showLinks={false}
      providers={["google"]}
      redirectTo="http://localhost:3000/auth/callback"
    />
  );
}
