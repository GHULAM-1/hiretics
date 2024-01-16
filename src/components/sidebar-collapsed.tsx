"use client";
import { usePathname } from "next/navigation";
import React, { HTMLAttributes } from "react";
import HireticsLogo from "./ui/hiretics-logo";
import { Button } from "./ui/button";
import { Home } from "lucide-react";
import { Star } from "lucide-react";
import { Settings } from "lucide-react";
import { ArchiveRestore } from "lucide-react";
import { LogOut } from "lucide-react";
import Link from "next/link";

type SidebarCollapsedProps = HTMLAttributes<HTMLDivElement>;

export default function SidebarCollapsed(props: SidebarCollapsedProps) {
  const pathname = usePathname();
  const isActive = (path: any) => path === pathname;
  return (
    <>
      <div {...props}>
        <div className="flex w-full flex-col items-center justify-center  ">
          <HireticsLogo fontSize="3rem">H</HireticsLogo>

          <div className="border border-input w-full mb-8"></div>
          <div className="flex flex-col gap-4">
            <Link href="/application">
              <Button
                className={`w-full  flex items-center justify-start gap-2 border-none group hover:bg-primaryHoverStrong transition-all ease-linear  ${
                  isActive("/application") ? "bg-primaryHoverStrong" : ""
                }`}
                variant="outline"
              >
                <Home
                  className={` group-hover:stroke-primary ${
                    isActive("/application")
                      ? "stroke-primary"
                      : "stroke-secondary-foreground"
                  }`}
                ></Home>
              </Button>
            </Link>
            <Link href="/application/favorites">
              <Button
                className={`w-full  flex items-center justify-start gap-2 border-none group hover:bg-primaryHoverStrong transition-all ease-linear  ${
                  isActive("/application/favorites")
                    ? "bg-primaryHoverStrong"
                    : ""
                }`}
                variant="outline"
              >
                <Star
                  className={` group-hover:stroke-primary ${
                    isActive("/application/favorites")
                      ? "stroke-primary"
                      : "stroke-secondary-foreground"
                  }`}
                ></Star>
              </Button>
            </Link>
            <Link href="/application/settings">
              <Button
                className={`w-full  flex items-center justify-start gap-2 border-none group hover:bg-primaryHoverStrong transition-all ease-linear  ${
                  isActive("/application/settings")
                    ? "bg-primaryHoverStrong"
                    : ""
                }`}
                variant="outline"
              >
                <Settings
                  className={` group-hover:stroke-primary ${
                    isActive("/application/settings")
                      ? "stroke-primary"
                      : "stroke-secondary-foreground"
                  }`}
                ></Settings>
              </Button>
            </Link>
            <Link href="/application/archives">
              <Button
                className={`w-full  flex items-center justify-start gap-2 border-none group hover:bg-primaryHoverStrong transition-all ease-linear  ${
                  isActive("/application/archives")
                    ? "bg-primaryHoverStrong"
                    : ""
                }`}
                variant="outline"
              >
                <ArchiveRestore
                  className={` group-hover:stroke-primary ${
                    isActive("/application/archives")
                      ? "stroke-primary"
                      : "stroke-secondary-foreground"
                  }`}
                ></ArchiveRestore>
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col  w-full justify-center items-center  ">
          <Link href="/">
            <Button
              className="w-full ml-1 group flex items-center justify-center gap-2 border-none hover:bg-primaryHoverStrong"
              variant="outline"
            >
              <LogOut className="stroke-secondary-foreground group-hover:stroke-primary"></LogOut>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
