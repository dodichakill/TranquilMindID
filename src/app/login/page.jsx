import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import LoginComponent from "./LoginComponent";
import { cookies } from "next/headers";
const Login = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data?.session) {
    redirect("/");
  }
  return <LoginComponent />;
};

export default Login;
