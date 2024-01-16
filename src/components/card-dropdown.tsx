"use client";
import { Button } from "@/components/ui/button";
import { Pencil, Link2, Star, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DeleteDialog } from "./delete-dialog";

export function CardDropDown() {
  const handleDeleteClick = (e: any) => {
    e.preventDefault();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MoreVertical className="w-5 h-5 dark:group-hover:stroke-black"></MoreVertical>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className=" w-44"
        side="bottom"
        // align="start"
        collisionPadding={{ right: 20 }}
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
          <DropdownMenuItem
            className="flex items-center gap-3 cursor-pointer "
            onSelect={handleDeleteClick}
          >
            {/* <Trash className="h-4 w-4 stroke-red-500"></Trash>
            <span className=" text-red-500">delete campaign</span> */}
            <DeleteDialog />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
