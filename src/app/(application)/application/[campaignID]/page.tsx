import TopNavigation from "@/components/top-navigation";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CampaignActionBar from "@/components/campaign-actions-bar";
import CampaignResponsesCard from "@/components/campaign-responses-card";
import ViewAsApplicantCard from "@/components/view-as-applicat-card";
import CampaignAnalyticsCard from "@/components/campaign-analytics-card";
import BestCandidate from "@/components/best-candidate";
import BestCandidatesCard from "@/components/best-candidates-card";
export default function Campaign({ params }: { params: any }) {
  return (
    <>
      <div className="w-full overflow-x-hidden overflow-y-hidden ">
        <TopNavigation
          mainHeading="Looking for a Web Developer"
          subHeading="BitProwler"
        />
        <div className="BOTTOM mb-4 flex items-center gap-1 mr-5 ml-5">
          <Link
            className="underline text-primary decoration-transparent border-b-[1px] border-primary"
            href="/application"
          >
            All Campaigns
          </Link>
          {/* <ChevronRight className="w-5 stroke-primary pt-1" /> */}
        </div>
        <div className="h- mr-5 ml-5   overflow-y-auto">
          <div className="mt-5">
            <CampaignActionBar />
          </div>
          <div className="w-full flex border border-input mt-4 mb-5"></div>
          <div className="flex gap-6 w-full">
            <div className="flex flex-col gap-6 w-full">
              <div className="flex gap-6 w-full">
                <CampaignResponsesCard />
                <ViewAsApplicantCard />
              </div>
              <CampaignAnalyticsCard />
            </div>
            <div className="w-full">
              <BestCandidatesCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
