import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  userInfo: {
    userName: String,
    userEmail: String,
  },

  userProjects: [
    {
      projectName: String,

    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;