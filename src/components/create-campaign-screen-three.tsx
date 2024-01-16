import { Check } from "lucide-react";

export default function CreateCampaignScreenThree() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="bg-primary rounded-full flex w-14 h-14 justify-center items-center  border  border-foreground  p-3 TABLET:p-4 cursor-pointer">
          <Check className="stroke-foreground " strokeWidth={2}></Check>
        </div>
        <div>New Campaign Created</div>
        <div>that cool animation</div>
      </div>
    </>
  );
}
