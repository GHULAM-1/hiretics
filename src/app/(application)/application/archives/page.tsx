import TopNavigation from "@/components/top-navigation";
import CampaignCard from "@/components/campaign-card";

export default function Archives() {
  return (
    <>
      <div className="flex flex-col w-full overflow-x-hidden">
        <TopNavigation mainHeading="Archived Campaigns" subHeading="Welcome" />
        <div className="flex   justify-center  w-full  items-start     mr-5 ml-5">
          <div className="flex flex-wrap w-full  gap-6 self-start">
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
          </div>
        </div>
      </div>
    </>
  );
}
