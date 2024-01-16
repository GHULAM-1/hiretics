import { Pencil, Link2, Star, Trash, Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NotificationsDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Bell className="w-5 h-5 dark:group-hover:stroke-black"></Bell>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className=" w-[560px]"
        side="bottom"
        // align="start"
        collisionPadding={{ top: 50 }}
        avoidCollisions
        hideWhenDetached
      >
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex items-center gap-3 cursor-pointer ">
            <Pencil className="h-4 w-4"></Pencil>
            edit campaign
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-3 cursor-pointer">
            <Link2 className="h-4 w-4"></Link2>
            copy form link
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-3 cursor-pointer ">
            <Star className="h-4 w-4"></Star>
            add to favorites
          </DropdownMenuItem>
          <DropdownMenuSeparator></DropdownMenuSeparator>
          <DropdownMenuItem className="flex items-center gap-3 cursor-pointer ">
            <Trash className="h-4 w-4 stroke-red-500"></Trash>
            <span className=" text-red-500">delete campaign</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
