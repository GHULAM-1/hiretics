import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userInfo: {
    userName: String,
    userEmail: String,
    userImageUrl: String,
  },
  userPlan: {
    planName: String,
    planDuration: String,
  },

  userCompanies: [
    {
      comapanyName: String,
      companyLogoUrl: String,
      userCampaigns: [
        {
          campaignName: String,
          isCampaignFavorite: String,
          campaignFormLink: String,
          campaignStartDate: Date,
          camoaignEndDate: Date,
          jobRole: String,
          jobDescription: String,
          campaignApplicants: [
            {
              applicantScore: Number,
              applicantEmail: String,
              applicantLinkedin: String,
              applicantImageUrl: String,
              applicantName: String,
              applicantCVUrl: String,
            },
          ],
          campaignCollaborators: [
            {
              collaboratorRole: String,
              collaboratorName: String,
              collaboratorEmail: String,
            },
          ],
        },
      ],
    },
  ],
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
