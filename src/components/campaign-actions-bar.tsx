"use client";
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
import { useTogglingStore } from "@/store/toggle-store";
import CreateCampaignDialog from "./create-campaign-dialog";
export default function CampaignActionBar() {
  const toggleShowCreateDocument = useTogglingStore(
    (state) => state.toggleShowCreateDocument
  );
  return (
    <>
      <div className="w-full flex justify-between">
        <div className="flex gap-2  items-center">
          <div className="flex justify-center items-center p-1 h-7 w-7  bg-primary rounded-full">
            <Check className="stroke-white  h-4 w-4" strokeWidth={3} />
          </div>
          <div className="text-h2 text-primary font-semibold">Completed</div>
        </div>

        <div className="flex gap-2 items-center flex-row-reverse SMALL_LAPTOP:flex-row">
          <div className="flex SMALL_LAPTOP:hidden ">
            <CardDropDown />
          </div>
          <div className="flex gap-3">
            <CreateCampaignDialog specialScreen="createDocumentScreen">
              <Button
                // variant="secondary"
                className="bg-[#2563EB] text-white gap-2  "
                onClick={() => toggleShowCreateDocument()}
              >
                <span className="hidden LARGE_TABLET:flex">Share</span>
                <Share2 className="h-4 w-4" />
              </Button>
            </CreateCampaignDialog>
          </div>
        </div>
      </div>
    </>
  );
}
