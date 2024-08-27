import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function CampaignAnalyticsCard() {
  return (
    <>
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center border h-[40vh] hover:bg-primaryHoverStrong cursor-pointer dark:hover:text-black w-full"
        style={{
          backgroundImage: 'url("/images/mock-graph.png")',
          height: "890x",
          width: "596px",
          objectFit: "cover",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed flex flex-col justify-between p-8"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
        >
          <div className="flex flex-col items-start ">
            <div className="text-h2 font-semibold mb-6 dark:group-hover:text-balck">
              Analtics
            </div>
            <div className="text-large text-secondary-foreground font-semibold ">
              Responses this wek
            </div>
            <div className="flex justify-center items-center gap-2 ">
              <div className="text-[48px] font-extrabold dark:group-hover:text-balck">
                48%
              </div>
              <Image
                src="/images/up-arrow.svg"
                width={33}
                height={0}
                alt="increase"
              />
            </div>
          </div>
          <div className="flex  justify-end  w-full">
            <div className="flex justify-center items-center p-1 h-14 w-14  bg-primary rounded-full">
              <ChevronRight className="stroke-white  h-7 w-7" strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
