"use client";
import CreateCampaignAnimation from "./create-campaign-animation";
import * as React from "react";
import { CalendarRange, Upload, PlusSquare } from "lucide-react";
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTogglingStore } from "@/store/toggle-store";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AlertDialogFooter } from "@/components/ui/alert-dialog";
import createProject from "@/actions/create-campaign-action";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef } from "react";
export default function CreateDocumentModal({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const formRef = useRef<HTMLFormElement>(null);

  const toggleShowCreateDocument = useTogglingStore(
    (state) => state.toggleShowCreateDocument
  );

  const [startingDate, setStartingDate] = React.useState<Date>();
  const [endingDate, setEndingDate] = React.useState<Date>();
  const handleProjectCreation = async (formData: any) => {
    formRef.current?.reset();

    const res = await createProject(formData);
  };

  return (
    <>
      <form
        ref={formRef}
        action={handleProjectCreation}
        className="flex flex-col justify-between  TABLET:justify-start "
      >
        <div>
          <div className="text-h3 font-semibold text-foreground">
            Create Document
          </div>
          <div className="text-p text font-medium text-secondary-foreground">
            Document Specifics
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-2 my-6 ">
          <Label htmlFor="text" className="text-body font-semibold">
            Title
          </Label>
          <Input
            type="text"
            id="email"
            placeholder="Title of your Project"
            name="document"
            required
          />
        </div>

        <div className="flex flex-col justify-start gap-2 mb-6">
          <div
            className={cn(
              "flex gap-2 SMALL_LAPTOP:flex-row flex-col w-[50%] ",
              className
            )}
          >
            {/* end */}
          </div>
        </div>

        <AlertDialogFooter className=" w-full flex-row flex justify-between mt-6    ">
          <Button variant="outline" onClick={() => toggleShowCreateDocument()}>
            cancel
          </Button>
          <Button type="submit" variant="default" className="text-background">
            create
          </Button>
        </AlertDialogFooter>
      </form>
    </>
  );
}
