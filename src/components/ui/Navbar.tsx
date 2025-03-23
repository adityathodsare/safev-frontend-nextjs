"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item={"Home"}
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item={"about us"}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">about product</HoveredLink>
            <HoveredLink href="/">prototype</HoveredLink>
            <HoveredLink href="/aboutus/aboutteam">about team </HoveredLink>
            <HoveredLink href="/">INFO Docs</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/buy"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item={"buy now"}
          ></MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item={"contactUs"}
          ></MenuItem>
        </Link>
        <Link href={"/logout"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item={"logout"}
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
