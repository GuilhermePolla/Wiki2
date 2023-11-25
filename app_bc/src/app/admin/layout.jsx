"use client";

import Loading from "@/components/Loading";
import { redirect } from "next/navigation";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function AdminLayout({ children }) {
  const data = useSWR("/sessions", fetcher);
  if (data.isLoading) return <Loading />;
  if (data.error) {
    alert("Erro ao carregar.");
    redirect("/", "replace");
  }

  if (!data.isLoading) {
    if (data.data.logged && data.data.type === "admin") {
      return children;
    }
    redirect("/", "replace");
  }
}
