"use client";
import { Pencil, Link2, Star, Linkedin, ArrowDownToLine } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "./ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { DeleteDialog } from "./delete-dialog";
import Meet from "~/svgs/meet";

export function BestCandidateDropdown() {
  const { toast } = useToast();

  const handleDeleteClick = (e: any) => {
    e.preventDefault();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MoreVertical className="w-5 h-5 dark:group-hover:stroke-black cursor-pointer"></MoreVertical>
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
            <ArrowDownToLine className="h-4 w-4 text-primary"></ArrowDownToLine>
            download CV
          </DropdownMenuItem>

          <DropdownMenuItem
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => {
              toast({
                duration: 2000,
                title: "Link copied to clipboard",
              });
            }}
          >
            <Linkedin className="h-4 w-4 text-primary fill-primary"></Linkedin>
            linkedin
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-3 cursor-pointer ">
            <Meet className="h-6 w-6"></Meet>
            meet
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
