"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useNavigation } from "@/context/NavigationContext";
import { useRouter } from "next/navigation";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { navigateWithLoader } = useNavigation();
  const router = useRouter();

  const handleNavigation = (path: string) => {
    navigateWithLoader(router, path);
  };

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div onClick={() => handleNavigation("/")}>
          <MenuItem
            setActive={setActive}
            active={active}
            item={"Home"}
          ></MenuItem>
        </div>
        <MenuItem setActive={setActive} active={active} item={"about us"}>
          <div className="flex flex-col space-y-4 text-sm">
            <div onClick={() => handleNavigation("/prototype")}>
              <HoveredLink href="/prototype">prototype</HoveredLink>
            </div>
            <div onClick={() => handleNavigation("/aboutus/aboutteam")}>
              <HoveredLink href="/aboutus/aboutteam">about team </HoveredLink>
            </div>
            <div onClick={() => handleNavigation("/docs")}>
              <HoveredLink href="/docs">INFO Docs</HoveredLink>
            </div>
            <div onClick={() => handleNavigation("/tracking")}>
              <HoveredLink href="/tracking">track data</HoveredLink>
            </div>
          </div>
        </MenuItem>
        <div onClick={() => handleNavigation("/buy")}>
          <MenuItem
            setActive={setActive}
            active={active}
            item={"buy now"}
          ></MenuItem>
        </div>
        <div onClick={() => handleNavigation("/contact")}>
          <MenuItem
            setActive={setActive}
            active={active}
            item={"contactUs"}
          ></MenuItem>
        </div>
        <div
          onClick={() => handleNavigation("/logout")}
          className="bg-red-900 rounded p-0.5 text-white"
        >
          <MenuItem
            setActive={setActive}
            active={active}
            item={"logout"}
          ></MenuItem>
        </div>
      </Menu>
    </div>
  );
}

export default Navbar;
