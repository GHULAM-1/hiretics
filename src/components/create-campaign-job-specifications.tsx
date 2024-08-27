import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { AlertDialogFooter } from "@/components/ui/alert-dialog";
import { useTogglingStore } from "@/store/toggle-store";
import { Button } from "./ui/button";
import CreateCampaignAnimation from "./create-campaign-animation";

export default function CreateCampaignJobSpecifications() {
  const changeCreateCampaignScreen = useTogglingStore(
    (state) => state.changeCreateCampaignScreen
  );
  const changeCampaignCancelFrom = useTogglingStore(
    (state) => state.changeCampaignCancelFrom
  );
  const handleCancelClick = () => {
    changeCreateCampaignScreen("CampaignLostAlert");
    changeCampaignCancelFrom("jobSpecifications");
  };
  return (
    <>
      <div className="flex flex-col justify-between  TABLET:justify-start ">
        <div>
          <div className="text-h3 font-semibold text-foreground mb-1">
            Create Campaign
          </div>
          <div className="text-p text font-medium text-secondary-foreground">
            Job Specifics
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 mt-8 ">
          <Label htmlFor="email" className="mb-2">
            Role Required
          </Label>
          <Input
            type="text"
            id="email"
            placeholder="e.g : web developer"
            className="mb-4"
          />
        </div>
        <div className="grid w-full gap-1.5 mt-4">
          <Label htmlFor="message" className="mb-2">
            Job Description
          </Label>
          <Textarea
            placeholder="Type your message here."
            id="message"
            className="h-[280px]"
          />
        </div>
        <CreateCampaignAnimation stepNumber={2} />
        {/* <div className="my-2">error signal</div> */}

        <AlertDialogFooter className="flex flex-row justify-between items-center gap-4">
          <Button
            variant="ghost"
            className="mt-2"
            onClick={() => changeCreateCampaignScreen("campaignSpecifications")}
          >
            <ArrowLeft></ArrowLeft>
          </Button>
          <div className="flex gap-4">
            <Button onClick={handleCancelClick} variant="outline">
              Cancel
            </Button>
            <Button
              variant="default"
              className="text-background"
              onClick={() => changeCreateCampaignScreen("campaignCreated")}
            >
              Next
            </Button>
          </div>
        </AlertDialogFooter>
      </div>
    </>
  );
}
