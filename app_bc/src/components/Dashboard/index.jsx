"use client";

import { Suspense, useEffect, useState } from "react";
import { Menu } from "lucide-react";
import "./styles.css";
import { SearchInput } from "../SearchInput";
import { Navbar } from "../Navbar";
import { Profile } from "../Profile";
import useOnClickOutsideRef from "@/utils/useOnClickOutsideRef";
import Loader from "../Loader";
import { useRouter } from "next/navigation";
import useSession from "@/utils/useSession";

async function handleSession(router, setSession) {
  const session = await useSession();

  if (session === null || session === undefined) return;
  if (session.authorLevel === "user") {
    setSession(session);
    router.push("/");
  }
  if (session.authorLevel === "admin") {
    setSession(session);
    router.push("/");
  } else {
    router.push("/");
  }
}

export function Dashboard(props) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const modalRef = useOnClickOutsideRef(() => setOpen(false));
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    try {
      handleSession(router, setSession);
    } catch (err) {
      alert("Erro ao carregar sessão");
      console.log(err);
    }
  }, []);

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
          router.push("/search?keywords=" + search);
        }}
      />
      <Navbar />
    </div>
  );
}
