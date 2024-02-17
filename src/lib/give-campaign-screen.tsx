import CreateCampaignJobSpecifications from "@/components/create-campaign-job-specifications";
import CreateCampaignSpecifications from "@/components/create-campaign-specifications";
import CreateCampaignLostAlert from "@/components/create-campaign-lost-alert";
import CreateCampaignCreated from "@/components/create-campaign-screen-created";
export default function giveCampaignScreen(
  campaignIdentifier: string
): JSX.Element {
  switch (campaignIdentifier) {
    case "campaignSpecifications":
      return <CreateCampaignSpecifications />;
    case "jobSpecifications":
      return <CreateCampaignJobSpecifications />;
    case "campaignCreated":
      return <CreateCampaignCreated />;
    case "CampaignLostAlert":
      return <CreateCampaignLostAlert />;
    default:
      return <CreateCampaignSpecifications />;
  }
}
