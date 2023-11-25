import { redirect } from "next/navigation";
import useSession from "@/utils/useSession";

export default async function UserLayout({ children }) {
  const { type } = await useSession();

  if (type !== "user") {
    redirect("/", "replace");
  }

  return children;
}
