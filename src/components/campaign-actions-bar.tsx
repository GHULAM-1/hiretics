import {
  Check,
  Pencil,
  Star,
  Trash,
  Link2,
  Share2,
  CircleDotDashed,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";
import { CardDropDown } from "./card-dropdown";
export default function CampaignActionBar() {
  return (
    <>
      <div className="w-full flex justify-between">
        {/* complete */}
        <div className="flex gap-2  items-center">
          <div className="flex justify-center items-center p-1 h-7 w-7  bg-primary rounded-full">
            <Check className="stroke-white  h-4 w-4" strokeWidth={3} />
          </div>
          <div className="text-h2 text-primary font-semibold">Completed</div>
        </div>
        {/* ongoing */}
        {/* <div className="flex gap-2  items-center">
          <CircleDotDashed className="  h-8 w-8" strokeWidth={2} />

          <div className="text-h2 text-secondary-foreground font-semibold">
            Ongoing
          </div>
              </div> */}

        <div className="flex gap-2 items-center flex-row-reverse SMALL_LAPTOP:flex-row">
          <div className="SMALL_LAPTOP:flex gap-2 hidden">
            <Button size="circleIcon" variant="secondary">
              <Trash className="h-4 w-4 stroke-red-500" />
            </Button>
            <Button size="circleIcon" variant="secondary">
              <Star className="h-4 w-4" />
            </Button>
            <Button size="circleIcon" variant="secondary">
              <Pencil className="h-4 w-4" />
            </Button>
            <Button size="circleIcon" variant="secondary">
              <Link2 className="h-4 w-4 " />
            </Button>
          </div>

          <div className="flex SMALL_LAPTOP:hidden ">
            <CardDropDown />
          </div>
          <div className="flex gap-3">
            <Button
              variant="secondary"
              className="bg-[#2563EB] text-white gap-2 SMALL_LAPTOP:hidden flex"
            >
              <span className="hidden LARGE_TABLET:flex">Best Candidate</span>
              <Users className="h-4 w-4" />
            </Button>

            <Button
              variant="secondary"
              className="bg-[#2563EB] text-white gap-2  "
            >
              <span className="hidden LARGE_TABLET:flex">Share</span>
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}