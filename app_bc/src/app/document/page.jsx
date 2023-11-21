"use client";
import { useSearchParams } from "next/navigation";

export default function Document() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <div>
      <h1>Document - {id}</h1>
    </div>
  );
}
