import { create } from "zustand";
interface TogglingStoreI {
<<<<<<< HEAD
=======
  showCreateDocumentModal: boolean;
>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
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
<<<<<<< HEAD
}
export const useTogglingStore = create<TogglingStoreI>()((set) => ({
=======

  toggleShowCreateDocument: () => void;
}

export const useTogglingStore = create<TogglingStoreI>()((set) => ({
  showCreateDocumentModal: false,
>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
  createCampaignScreen: "campaignSpecifications",
  campaignCancelFrom: "campaignSpecifications",
  topSectionDetails: {
    mainHeading: "Your Campaigns",
    subHeading: "Welcome",
  },

<<<<<<< HEAD
  

  changeTopSectionDetails: (newTopSectionDetails) =>
    set(() => ({ topSectionDetails: newTopSectionDetails })),

=======
  changeTopSectionDetails: (newTopSectionDetails) =>
    set(() => ({ topSectionDetails: newTopSectionDetails })),

  toggleShowCreateDocument: () =>
    set((state: any) => ({
      showCreateDocumentModal: !state.showCreateDocumentModal,
    })),

>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
  changeCreateCampaignScreen: (newCreateCampaignScreen) =>
    set(() => ({ createCampaignScreen: newCreateCampaignScreen })),
  changeCampaignCancelFrom: (newCampaigncamcelFrom) =>
    set(() => ({ campaignCancelFrom: newCampaigncamcelFrom })),
}));
