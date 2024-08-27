import BestCandidate from "./best-candidate";
import { Button } from "./ui/button";
export default function BestCandidatesCard() {
  return (
    <>
      <div className=" SMALL_LAPTOP:flex hidden w-full border flex-col  shadow-lg h-[61vh]  overflow-y-hidden rounded-md p-6">
        <div className="text-h3 font-semibold mb-2">Best Candidates</div>
        <div className="text-p font-medium text-secondary-foreground">
          Applicants that best match your needs.
        </div>
        <div className="border w-full my-5"></div>
        <div className="flex flex-col items-center justify-between  h-[45vh]">
          <div className="flex flex-col w-full gap-5 overflow-y-auto">
            <BestCandidate />
            <BestCandidate />
            <BestCandidate />
            <BestCandidate />
            <BestCandidate />
            {/* <BestCandidate /> */}
          </div>
          <Button className="w-full" variant="ghost">
            Load more
          </Button>
        </div>
      </div>
    </>
  );
}
