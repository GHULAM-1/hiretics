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
        <TopNavigation mainHeading="your Documents" subHeading="Explore" />

        <div className="h- mr-5 ml-5   overflow-y-auto">
          <div className="mt-5">
            <CampaignActionBar />
          </div>
          <div className="w-full flex border border-input mt-4 mb-5"></div>
        </div>
      </div>
    </>
  );
}
