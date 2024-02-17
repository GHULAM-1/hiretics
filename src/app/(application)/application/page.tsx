import CampaignCard from "@/components/campaign-card";
import CreateCampaignCard from "@/components/create-campaign-card";
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

  return (
    <>
      <div className="flex flex-col   overflow-x-hidden">
        <TopNavigation mainHeading="Your Campaigns" subHeading="Welcome" />
        <div className="flex   justify-center  w-full  items-start     mr-5 ml-5  overflow-y-auto">
          <div className="flex flex-wrap w-full  gap-6 self-start">
            <CreateCampaignDialog>
              <CreateCampaignCard></CreateCampaignCard>
            </CreateCampaignDialog>
            {projects.userProjects.map((project: any) => {
              return <CampaignCard cardHeading={project.projectName} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
