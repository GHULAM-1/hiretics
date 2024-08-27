import Speaker from "~/svgs/speaker";
import Briefcase from "~/svgs/briefcase";
export default function CreateCampaignAnimation({
  stepNumber,
}: {
  stepNumber: 1 | 2 | 3;
}) {
  if (stepNumber === 1) {
    return (
      <>
        <div className="flex w-full items-center justify-center  mt-7 mb-5">
          <div className=" w-[18%] border-primary border-[2px] rounded-l-full"></div>
          <div className="flex justify-center items-center p-2 rounded-full bg-primaryHoverStrong">
            <Speaker className="h-6 w-6 fill-primary" />
          </div>
          <div className="w-[18%] border-primaryHoverStrong border-[2px]"></div>
          <div className="flex justify-center items-center bg-primaryHoverStrong rounded-full p-2">
            <Briefcase className="h-6 w-6 fill-tertiaryForeground stroke-tertiaryForeground " />
          </div>
          <div className="w-[18%] border-primaryHoverStrong border-[2px] rounded-r-full"></div>
        </div>
      </>
    );
  }
  if (stepNumber === 2) {
    return (
      <>
        <div className="flex w-full items-center justify-center  mt-7 mb-5">
          <div className=" w-[18%] border-primary border-[2px] rounded-l-full"></div>
          <div className="flex justify-center items-center p-2 rounded-full bg-primary">
            <Speaker className="h-6 w-6 fill-primaryHoverStrong" />
          </div>
          <div className="w-[18%] border-primary border-[2px]"></div>
          <div className="flex justify-center items-center bg-primaryHoverStrong rounded-full p-2">
            <Briefcase className="h-6 w-6 fill-primary stroke-primary" />
          </div>
          <div className="w-[18%] border-primaryHoverStrong border-[2px] rounded-r-full"></div>
        </div>
      </>
    );
  }
  if (stepNumber === 3) {
    return (
      <>
        <div className="flex w-full items-center justify-center  mt-7 mb-5">
          <div className=" w-[18%] border-primary border-[2px] rounded-l-full"></div>
          <div className="flex justify-center items-center p-2 rounded-full bg-primary">
            <Speaker className="h-6 w-6 fill-primaryHoverStrong" />
          </div>
          <div className="w-[18%] border-primary border-[2px]"></div>
          <div className="flex justify-center items-center bg-primary rounded-full p-2">
            <Briefcase className="h-6 w-6 fill-primaryHoverStrong stroke-primaryHoverStrong" />
          </div>
          <div className="w-[18%] border-primary border-[2px] rounded-r-full"></div>
        </div>
      </>
    );
  }
}
