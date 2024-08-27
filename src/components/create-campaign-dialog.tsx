"use client";
import * as React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type DrawerDialogProps = {
  children: React.ReactNode;
};
import { useTogglingStore } from "@/store/toggle-store";
import giveCampaignScreen from "@/lib/give-campaign-screen";

export default function CreateCampaignDialog({ children }: DrawerDialogProps) {
  let isMobileModal = false;
  const createCampaignScreen = useTogglingStore(
    (state) => state.createCampaignScreen
  );
  const currentCampaignScreen = giveCampaignScreen(createCampaignScreen);
  if (
    createCampaignScreen === "campaignSpecifications" ||
    createCampaignScreen !== "jobSpecifications"
  ) {
    isMobileModal = true;
  }
  return (
    <>
      <div className="">
        <AlertDialog>
          <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
          <AlertDialogContent
            className={`rounded-md w-[90%] ${
              createCampaignScreen !== "CampaignLostAlert" ? "h-screen" : null
            }  overflow-y-auto TABLET:h-auto`}
          >
            {currentCampaignScreen}
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
}
