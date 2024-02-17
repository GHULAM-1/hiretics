import { Star } from "lucide-react";
import { MoreVertical } from "lucide-react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users } from "lucide-react";
import Link from "next/link";
import { CardDropDown } from "./card-dropdown";

export default function CampaignCard() {
  return (
    <>
      <Link
        href="/application/web-developer"
        className="p-5 max-w-[328px] h-[210px]  w-[328px] border border-input rounded-md shadow-md flex flex-col justify-between hover:bg-primaryHoverLight group"
      >
        <div>
          <div className="flex justify-between items-center ">
            <div className="text-h4 font-semibold dark:group-hover:text-black mr-4">
              Web Developer
            </div>
            <div className="flex gap-2 ">
              <Star className="w-5 h-5 dark:group-hover:stroke-black"></Star>

              {/* <MoreVertical className="w-5 h-5 dark:group-hover:stroke-black"></MoreVertical> */}

              <CardDropDown></CardDropDown>
            </div>
          </div>

          <div className="flex gap-1  items-center">
            <Check
              className="w-5 h-5 bg-primary rounded-full stroke-white p-1  "
              strokeWidth={4}
            ></Check>
            <div className="text-body text-secondary-foreground dark:group-hover:text-neutral-500">
              Completed
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Avatar className="h-7 w-7">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-body  font-semibold text-secondary-foreground dark:group-hover:text-neutral-500 hidden SMALL_MOBILE:flex">
              ghulam
            </div>
          </div>

          <div className="flex justify-center items-center gap-1">
            {/* <Users className="dark:group-hover:stroke-black"></Users> */}
            {/* <div className="text-primary text-h3 font-semibold">141</div> */}
          </div>
        </div>
      </Link>
    </>
  );
}
