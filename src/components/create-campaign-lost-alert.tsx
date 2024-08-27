"use client";
import { useTogglingStore } from "@/store/toggle-store";
import { Button } from "./ui/button";
import { AlertDialogCancel, AlertDialogFooter } from "./ui/alert-dialog";
export default function CreateCampaignLostAlert() {
  const changeCreateCampaignScreen = useTogglingStore(
    (state) => state.changeCreateCampaignScreen
  );
  const createCampaignScreen = useTogglingStore(
    (state) => state.createCampaignScreen
  );

  const campaignCancelFrom = useTogglingStore(
    (state) => state.campaignCancelFrom
  );
  const changeCampaignCancelFrom = useTogglingStore(
    (state) => state.changeCampaignCancelFrom
  );
  const handleContinueClick = () => {
    if (campaignCancelFrom === "jobSpecifications") {
      changeCreateCampaignScreen("jobSpecifications");
      changeCampaignCancelFrom("campaignSpecifications");
    } else {
      changeCreateCampaignScreen("campaignSpecifications");
    }
  };

  return (
    <>
      <div className="flex max-w-[464px] flex-col justify-center text-center  TABLET:text-left  ">
        <div className="font-semibold mb-4 text-h4">
          Are you sure you want to go back?{" "}
        </div>
        <div>
          This action cannot be undone. This action will result in deletion of
          this campaign creation process.
        </div>

        <AlertDialogFooter className="w-full flex gap-1 TABLET:gap-4 items-end justify-end  TABLET:flex-row">
          <AlertDialogCancel
            className="w-full TABLET:w-auto"
            onClick={() => changeCreateCampaignScreen("campaignSpecifications")}
          >
            Yes
          </AlertDialogCancel>
          <Button
            className="bg-primaryHoverStrong w-full TABLET:w-auto mt-4 TABLET:mt-0 px-5"
            onClick={handleContinueClick}
          >
            No
          </Button>
        </AlertDialogFooter>
      </div>
    </>
  );
}
