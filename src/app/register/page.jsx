import { redirect } from "next/navigation";

import RegisterComponent from "./RegisterComponent";
const Register = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data?.session) {
    redirect("/");
  }
  return <RegisterComponent />;
};

export default Register;
