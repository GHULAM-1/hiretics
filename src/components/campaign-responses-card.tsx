import { Clock, Users } from "lucide-react";
export default function CampaignResponsesCard() {
  return (
    <>
      <div className="flex shadow-lg rounded-lg max-w-[286px] w-full border px-10 py-8">
        <div className="flex flex-col">
          <Users strokeWidth={2} />
          <div className="font-semibold text-body">Responses</div>
          <div className="font-semibold text-body">Received</div>
          <div className="font-semibold text-h2 text-primary">101</div>
        </div>

        <div className="flex border-l mx-6"></div>

        <div className="flex flex-col  ">
          <Clock strokeWidth={2} />
          <div className="font-semibold text-body">Days</div>
          <div className="font-semibold text-body">Remaining</div>
          <div className="text-h2 font-semibold text-primary">0</div>
        </div>
      </div>
    </>
  );
}
