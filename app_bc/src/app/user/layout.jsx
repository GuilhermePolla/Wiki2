"use client";

import Loader from "@/components/Loader";
import { redirect } from "next/navigation";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function UserLayout({ children }) {
  const data = useSWR("/sessions", fetcher);

  if (data.isLoading) return <Loader />;

  if (data.error) {
    alert("Erro ao carregar.");
    redirect("/", "replace");
  }

  if (!data.isLoading) {
    if (data.data.authorLevel === "user") {
      return children;
    }
    if (data.data.authorLevel === "admin") {
      redirect("/admin", "replace");
    }
    redirect("/", "replace");
  }
}
