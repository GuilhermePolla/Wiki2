"use client";
import { Suspense, useEffect, useState } from "react";
import { Menu } from "lucide-
import "./styles.css";
import { SearchInput } from "../SearchInput";
import { Navbar } from "../Navbar";
import { Profile } from "../Profile";
import useOnClickOutsideRef from "@/utils/useOnClickOutsideRef";
import Loader from "../Loader";
import { useRouter } from "next/navigation";

export function Dashboard(props) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const modalRef = useOnClickOutsideRef(() => setOpen(false));
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (session === null || session === undefined) return;
    if (session.logged && session.type === "user") {
      router.push("/user");
    }
    if (session.logged && session.type === "admin") {
      router.push("/admin");
    }
  }, [session, router]);

  return (
    <div className="dashboard">
      <div className="menuWrapper" ref={modalRef}>
        <Menu
          size={33}
          color="#e55b0b"
          onClick={() => setOpen((prev) => !prev)}
          cursor={"pointer"}
        />
        {open && (
          <div className="wrapper">
            <Suspense fallback={<Loader />}>
              <Profile session={session} setSession={setSession} />
            </Suspense>
          </div>
        )}
      </div>
      <h1 className="title">Base De Conhecimento</h1>
      <SearchInput
        style={{ width: "25vw" }}
        onBlur={(e) => setSearch(e.target.value)}
        onClick={() => {
          console.log(search);
        }}
      />
      <Navbar />
    </div>
  );
}
