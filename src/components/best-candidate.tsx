import { ArrowDownToLine, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Meet from "~/svgs/meet";
import { BestCandidateDropdown } from "./best-candidate-dropdown";
export default function BestCandidate() {
  return (
    <>
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="font-semibold text-primary text-h2">
              CN
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="text-p font-medium">Abdul Moiz</div>
            <div className="text-[12px] text-secondary-foreground font-medium">
              abmoiz.189@gmail.com
            </div>
          </div>
        </div>
        <div className="hidden MEDIUM_LAPTOP:flex gap-6">
          <ArrowDownToLine className="cursor-pointer stroke-primary" />
          <Meet className="cursor-pointer stroke-primary" />
          <Linkedin className="cursor-pointer fill-primary stroke-primary" />
        </div>

        <div className="SMALL_LAPTOP:flex hidden">
          <BestCandidateDropdown />
        </div>
      </div>
    </>
  );
}
