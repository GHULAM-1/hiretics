import { Eye, ChevronRight } from "lucide-react";

export default function ViewAsApplicantCard() {
  return (
    <>
      <div className="flex flex-col p-6 max-w-[286px] w-full border shadow-lg rounded-lg hover:bg-primaryHoverStrong group cursor-pointer">
        <Eye className="w-9 h-9 stroke-background fill-primary dark:group-hover:stroke-white" />

        <div className="text-p font-bold text-foreground dark:group-hover:text-black">
          View campaign document as an applicant.
        </div>
        <div className="flex w-full justify-end">
          <div className="flex justify-center items-center p-1 h-9 w-9  bg-primary rounded-full">
            <ChevronRight className="stroke-white  h-5 w-5" strokeWidth={3} />
          </div>
        </div>
      </div>
    </>
  );
}
