import { redirect } from "next/navigation";
import useSession from "@/utils/useSession";

export default async function AdminLayout({ children }) {
  const { type } = await useSession();

  if (type !== "admin") {
    redirect("/", "replace");
  }

  return children;
}
