import React from "react";
import { ThemeSwitchButton } from "./ui/theme-switch-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NotificationsDropDown } from "./nofification-dropdown";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/next-auth-options";
import getFirstLetterUpperCase from "@/lib/get-first-letter-uppercase";
type TopbarSpacedProps = {
  mainHeading: string;
  subHeading: string;
};

export default async function TopbarSpaced({
  mainHeading,
  subHeading,
}: TopbarSpacedProps) {
  const session = await getServerSession(authOptions);

  if (session?.user !== null && session?.user !== undefined) {
    return (
      <>
<<<<<<< HEAD
        <div className="hidden SMALL_LAPTOP:flex flex-col  mt-5 mr-5 ml-5  ">
          <div className="TOP flex justify-between py-8  items-center ">
=======
        <div className="SMALL_LAPTOP:flex hidden  flex-col  mt-5 mr-5 ml-5  ">
          <div className="TOP hidden justify-between SMALL_LAPTOP:flex py-8  items-center ">
>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
            <div className="LEFT flex flex-col justify-start">
              <div className="text-h2 font-extrabold">{mainHeading}</div>
              <div className="ml-2 text-large text-secondary-foreground">
                {subHeading} , {session?.user.name}
              </div>
            </div>

            <div className="RIGHT flex justify-center items-center gap-2">
              <ThemeSwitchButton></ThemeSwitchButton>

              <NotificationsDropDown></NotificationsDropDown>

              <div
                className="flex gap-2 justify-center items-center  p-1 ml-4"
                title={session?.user?.email || ""}
              >
                <Avatar>
                  <AvatarImage src={session?.user?.image || ""} alt="@shadcn" />
                  <AvatarFallback className="font-semibold text-primary text-h2">
                    {getFirstLetterUpperCase(session?.user?.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="">{session?.user?.name}</div>
              </div>
            </div>
          </div>

          <div className="w-full flex border border-input mb-4 "></div>
        </div>
      </>
    );
  }
}
