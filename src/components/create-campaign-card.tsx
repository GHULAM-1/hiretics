import { Plus } from "lucide-react";

export default function CreateCampaignCard() {
  return (
    <>
      <div className="p-5 max-w-[328px] h-[210px]  w-[328px] border border-input rounded-md shadow-md flex flex-col justify-center items-center hover:bg-primaryHoverLight group cursor-pointer">
        <div className="flex justify-center items-center flex-col gap-4">
          <div className="rounded-full flex w-14 h-14 justify-center items-center  border  border-foreground dark:group-hover:border-black p-3 TABLET:p-4 cursor-pointer">
            <Plus
              className="stroke-foreground dark:group-hover:stroke-black"
              strokeWidth={2}
            ></Plus>
          </div>
          <div className="stroke-foreground dark:group-hover:text-black">
            Create a Campaign
          </div>
        </div>
      </div>
    </>
  );
}
