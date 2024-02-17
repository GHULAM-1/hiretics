import { create } from "zustand";
interface TogglingStoreI {
  showCreateDocumentModal: boolean;
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

  toggleShowCreateDocument: () => void;
}

export const useTogglingStore = create<TogglingStoreI>()((set) => ({
  showCreateDocumentModal: false,
  createCampaignScreen: "campaignSpecifications",
  campaignCancelFrom: "campaignSpecifications",
  topSectionDetails: {
    mainHeading: "Your Campaigns",
    subHeading: "Welcome",
  },

  changeTopSectionDetails: (newTopSectionDetails) =>
    set(() => ({ topSectionDetails: newTopSectionDetails })),

  toggleShowCreateDocument: () =>
    set((state: any) => ({
      showCreateDocumentModal: !state.showCreateDocumentModal,
    })),

  changeCreateCampaignScreen: (newCreateCampaignScreen) =>
    set(() => ({ createCampaignScreen: newCreateCampaignScreen })),
  changeCampaignCancelFrom: (newCampaigncamcelFrom) =>
    set(() => ({ campaignCancelFrom: newCampaigncamcelFrom })),
}));
