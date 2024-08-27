import CampaignCard from "@/components/campaign-card";
import CreateCampaignCard from "@/components/create-campaign-card";

import CreateCampaignDialog from "@/components/create-campaign-dialog";
import TopNavigation from "@/components/top-navigation";
export default function Home() {
  return (
    <>
      <div className="flex flex-col   overflow-x-hidden">
        <TopNavigation mainHeading="Your Campaigns" subHeading="Welcome" />
        <div className="flex   justify-center  w-full  items-start     mr-5 ml-5  overflow-y-auto">
          <div className="flex flex-wrap w-full  gap-6 self-start">
            <CreateCampaignDialog>
              <CreateCampaignCard></CreateCampaignCard>
            </CreateCampaignDialog>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
          </div>
        </div>
      </div>
    </>
  );
}
