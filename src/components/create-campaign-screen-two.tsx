import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";

export default function CreateCampaignScreenTwo() {
  return (
    <>
      <div>
        <div>
          <div>Create Campaign</div>
          <div>Job Specifics</div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Title</Label>
          <Input type="text" id="email" placeholder="Title of your Campaign" />
        </div>

        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Your message</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>

        <div>that cool animation</div>
        <div>error signal</div>

        <div>
          <AlertDialogFooter className="flex flex-row justify-between items-baseline gap-4">
            <AlertDialogAction className="bg-primaryHoverStrong hover:bg-primary dark:text-background">
              <ArrowLeft></ArrowLeft>
            </AlertDialogAction>
            <div>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-primaryHoverStrong hover:bg-primary dark:text-background">
                Next
              </AlertDialogAction>
            </div>
          </AlertDialogFooter>
        </div>
      </div>
    </>
  );
}
