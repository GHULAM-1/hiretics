"use server";
import connectDB from "@/lib/db-connect";
import User from "@/models/user-model";
import { authOptions } from "@/lib/next-auth-options";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
export default async function createDocument(formData: any) {
  try {
    const newDocumentName = formData.get("document");
    const session = await getServerSession(authOptions);
    console.log(session, "dksdnsjdn");
    await connectDB();
    const updatedUser = await User.findOneAndUpdate(
      { "userInfo.userEmail": session?.user?.email },
      {
        $push: {
          "userProjects.userDocuments": { documentName: newDocumentName },
        },
      },
      { new: true }
    );
    console.log("pushed a new document");
    revalidatePath("/application");
  } catch (error) {
    console.log(error);
  }
}
