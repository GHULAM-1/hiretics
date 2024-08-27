<<<<<<< HEAD
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
=======
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  userInfo: {
    userName: String,
    userEmail: String,
  },

  userProjects: [
    {
      projectName: String,

>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
    },
  ],
});

<<<<<<< HEAD
const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
=======
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
