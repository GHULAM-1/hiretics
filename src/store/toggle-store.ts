import { create } from "zustand";
interface TogglingStoreI {
  topSectionDetails: {
    mainHeading?: string;
    subHeading?: string;
  };

  changeTopSectionDetails: (
    newTopSectionDetails: TogglingStoreI["topSectionDetails"]
  ) => void;
  createCampaignScreen:
    | "campaignSpecifications"
    | "jobSpecifications"
    | "campaignCreated"
    | "CampaignLostAlert";
  changeCreateCampaignScreen: (
    newCreateCampaignScreen: TogglingStoreI["createCampaignScreen"]
  ) => void;

  campaignCancelFrom: "campaignSpecifications" | "jobSpecifications";
  changeCampaignCancelFrom: (
    newCampaigncamcelFrom: "campaignSpecifications" | "jobSpecifications"
  ) => void;
}
export const useTogglingStore = create<TogglingStoreI>()((set) => ({
  createCampaignScreen: "campaignSpecifications",
  campaignCancelFrom: "campaignSpecifications",
  topSectionDetails: {
    mainHeading: "Your Campaigns",
    subHeading: "Welcome",
  },

  

  changeTopSectionDetails: (newTopSectionDetails) =>
    set(() => ({ topSectionDetails: newTopSectionDetails })),

  changeCreateCampaignScreen: (newCreateCampaignScreen) =>
    set(() => ({ createCampaignScreen: newCreateCampaignScreen })),
  changeCampaignCancelFrom: (newCampaigncamcelFrom) =>
    set(() => ({ campaignCancelFrom: newCampaigncamcelFrom })),
}));
