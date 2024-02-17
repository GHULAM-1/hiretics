"use client";
import * as React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type DrawerDialogProps = {
  children: React.ReactNode;
  specialScreen?: string;
};
import { useTogglingStore } from "@/store/toggle-store";
import giveCampaignScreen from "@/lib/give-campaign-screen";
import CreateDocumentModal from "./create-document-modal";
export default function CreateCampaignDialog({
  children,
  specialScreen,
}: DrawerDialogProps) {
  let isMobileModal = false;
  const createCampaignScreen = useTogglingStore(
    (state) => state.createCampaignScreen
  );
  let currentCampaignScreen = giveCampaignScreen(createCampaignScreen);
  if (
    createCampaignScreen === "campaignSpecifications" ||
    createCampaignScreen !== "jobSpecifications"
  ) {
    isMobileModal = true;
  }

  if (specialScreen === "createDocumentScreen") {
    currentCampaignScreen = <CreateDocumentModal></CreateDocumentModal>;
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
