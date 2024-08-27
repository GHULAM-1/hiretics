import CampaignCard from "@/components/campaign-card";
import CreateCampaignCard from "@/components/create-campaign-card";
<<<<<<< HEAD

import CreateCampaignDialog from "@/components/create-campaign-dialog";
import TopNavigation from "@/components/top-navigation";
export default function Home() {
=======
import CreateCampaignDialog from "@/components/create-campaign-dialog";
import TopNavigation from "@/components/top-navigation";
import connectDB from "@/lib/db-connect";
import User from "@/models/user-model";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/next-auth-options";
export default async function Home() {
  const session = await getServerSession(authOptions);

  await connectDB();
  const projects = await User.findOne(
    {
      "userInfo.userEmail": session?.user?.email,
    },
    { userProjects: 1, _id: 0 }
  );

  console.log("user project in home ", projects);

>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
  return (
    <>
      <div className="flex flex-col   overflow-x-hidden">
        <TopNavigation mainHeading="Your Campaigns" subHeading="Welcome" />
        <div className="flex   justify-center  w-full  items-start     mr-5 ml-5  overflow-y-auto">
          <div className="flex flex-wrap w-full  gap-6 self-start">
            <CreateCampaignDialog>
              <CreateCampaignCard></CreateCampaignCard>
            </CreateCampaignDialog>
<<<<<<< HEAD
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
            <CampaignCard></CampaignCard>
=======
            {projects.userProjects.map((project: any) => {
              return <CampaignCard cardHeading={project.projectName} />;
            })}
>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
          </div>
        </div>
      </div>
    </>
  );
}
