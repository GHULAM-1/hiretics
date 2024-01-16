import CampaignCard from "@/components/campaign-card";
import CreateCampaignCard from "@/components/create-campaign-card";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import CreateCampaignDialog from "@/components/create-campaign-dialog";
export default function Home() {
  return (
    <>
      <div className="flex   justify-center  w-full  items-start     ">
        <div className="flex flex-wrap w-full  gap-6 self-start">
          <CreateCampaignDialog>
            <CreateCampaignCard></CreateCampaignCard>
          </CreateCampaignDialog>
          <CampaignCard></CampaignCard>
          <CampaignCard></CampaignCard>
        </div>
      </div>
    </>
  );
}
