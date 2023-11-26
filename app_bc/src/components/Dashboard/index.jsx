"use client";
import { Suspense, useEffect, useState } from "react";
import { ChevronRight, Menu, SearchIcon } from "lucide-react";
import { TextInput } from "../TextInput";
import "./styles.css";
import { SearchInput } from "../SearchInput";
import { Navbar } from "../Navbar";
import { Profile } from "../Profile";
import useOnClickOutsideRef from "@/utils/useOnClickOutsideRef";
import Loading from "../Loading";

export function Dashboard() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const modalRef = useOnClickOutsideRef(() => setOpen(false));

  return (
    <div className="dashboard">
      <div className="menuWrapper" ref={modalRef}>
        <Menu
          size={32}
          color="#e55b0b"
          onClick={() => setOpen(true)}
          cursor={"pointer"}
        />
        {open && <Profile />}
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
