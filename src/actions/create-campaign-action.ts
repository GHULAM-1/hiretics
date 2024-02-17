"use server";
import connectDB from "@/lib/db-connect";
import User from "@/models/user-model";
import { authOptions } from "@/lib/next-auth-options";
import { getServerSession } from "next-auth";
export default async function createProject(formData: any) {
  try {
    const newProjectName = formData.get("project");
    const session = await getServerSession(authOptions);
    console.log(session, "dksdnsjdn");
    await connectDB();
    const updatedUser = await User.findOneAndUpdate(
      { "userInfo.userEmail": session?.user?.email },
      { $push: { userProjects: { projectName: newProjectName } } },
      { new: true }
    );
    console.log("pushed a new project");
  } catch (error) {
    console.log(error);
  }
}
