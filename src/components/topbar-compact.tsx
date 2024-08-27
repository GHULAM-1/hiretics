import React, { HTMLAttributes } from "react";
import { Menu, Plus } from "lucide-react";
import HireticsLogo from "./ui/hiretics-logo";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";
import Link from "next/link";
import CreateCampaignDialog from "./create-campaign-dialog";
import { ThemeSwitchButton } from "./ui/theme-switch-button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type TopbarCompactProps = HTMLAttributes<HTMLDivElement> & {
  mainHeading: string;
  subHeading: string;
};
export default function TopbarCompact({
  mainHeading,
  subHeading,
}: TopbarCompactProps) {
  return (
    <>
      <div className="SMALL_MOBILE:mt-2 mt-6 ">
        <div className="flex justify-between SMALL_LAPTOP:hidden mx-6 TABLET:mx-8">
          <div className="flex justify-start items-center gap-2">
            <Menu className="h-8 w-8"></Menu>
            <div className=" hidden SMALL_MOBILE:flex ">
              <Link
                href="/"
                className={`text-primary flex font-bold tracking-tight justify-center items-center text-[3rem]`}
              >
                <span className="flex LARGE_TABLET:hidden">H</span>
                <span className="hidden LARGE_TABLET:flex">Hiretics</span>
              </Link>
            </div>
          </div>

          {/* other half */}

          <div className="RIGHT flex justify-center items-center gap-2">
            <ThemeSwitchButton></ThemeSwitchButton>
            <Button size="circleIcon" variant="outline">
              <Bell></Bell>
            </Button>

            <div className="flex gap-2 justify-center items-center  p-1 TABLET:ml-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="TABLET:flex hidden">Abdul Moiz</div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="flex justify-between items-center SMALL_LAPTOP:hidden mx-6 TABLET:mx-8 mb-8 mt-6 ">
          <div className="flex flex-col leading-6  SMALL_MOBILE:leading-5 TABLET:leading-7 ">
            <div className="text-h4 TABLET:text-h2 font-semibold mr-4">
              {mainHeading}
            </div>
            <div className="SMALL_MOBILE:ml-1 ml-1 text-body TABLET:text-large text-secondary-foreground">
              {subHeading}, Moiz
            </div>
          </div>

          <CreateCampaignDialog>
            <div className="rounded-full bg-primary p-3 TABLET:p-4 cursor-pointer">
              <Plus className="stroke-white" strokeWidth={2}></Plus>
            </div>
          </CreateCampaignDialog>
        </div>
      </div>
    </>
  );
}
