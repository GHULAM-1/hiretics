export type Applicant = {
  applicantScore: number;
  applicantEmail: string;
  applicantLinkedin: string;
  applicantImageUrl: string;
  applicantName: string;
  applicantCVUrl: string;
};

export type Collaborator = {
  collaboratorRole: string;
  collaboratorName: string;
  collaboratorEmail: string;
};
export type Campaign = {
  campaignName: string;
  isCampaignFavorite: string;
  campaignFormLink: string;
  campaignStartDate: Date;
  camoaignEndDate: Date;
  jobRole: string;
  jobDescription: string;
  campaignApplicants: Applicant[];
  campaignCollaborators: Collaborator[];
};

export type Company = {
  comapanyName: string;
  companyLogoUrl: string;
  userCampaigns: Campaign[];
};

export type UserPlan = {
  planName: string;
  planDuration: string;
};

export type UserInfo = {
  userName: string;
  userEmail: string;
  userImageUrl: string;
};
