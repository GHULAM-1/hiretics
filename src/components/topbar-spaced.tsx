import React, { HTMLAttributes } from "react";
import { Bell } from "lucide-react";
import Link from "next/link";
import { ThemeSwitchButton } from "./ui/theme-switch-button";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NotificationsDropDown } from "./nofification-dropdown";
type TopbarSpacedProps = HTMLAttributes<HTMLDivElement>;
export default function TopbarSpaced(props: TopbarSpacedProps) {
  return (
    <>
      <div {...props}>
        <div className="TOP flex justify-between py-8  items-center ">
          <div className="LEFT flex flex-col justify-start">
            <div className="text-h2 font-extrabold">Your Campaigns</div>
            <div className="ml-2 text-large text-secondary-foreground">
              welcome , Moiz
            </div>
          </div>

          <div className="RIGHT flex justify-center items-center gap-2">
            <ThemeSwitchButton></ThemeSwitchButton>

            <NotificationsDropDown></NotificationsDropDown>

            <div className="flex gap-2 justify-center items-center  p-1 ml-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="">Abdul Moiz</div>
            </div>
          </div>
        </div>

        <div className="w-full flex border border-input mb-8 "></div>

        {/* breadcumbs */}
        {/* <div className="BOTTOM mb-4">
          <Link href="/">next campaign</Link>
        </div> */}
      </div>
    </>
  );
}
