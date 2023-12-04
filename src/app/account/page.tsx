import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "../database.types";
import AccountForm from "@/app/account/AccountForm";

export default async function Account() {
  // 서버 컴포넌트에서는 createServerComponentClient를 사용합니다.
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <AccountForm session={session} />;
}
