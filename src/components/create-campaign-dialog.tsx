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
<<<<<<< HEAD

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
=======
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

>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
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
