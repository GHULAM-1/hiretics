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
<<<<<<< HEAD

=======
import createProject from "@/actions/create-campaign-action";
>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
<<<<<<< HEAD

export default function CreateCampaignSpecifications({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
=======
import { useRef } from "react";
export default function CreateCampaignSpecifications({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const formRef = useRef<HTMLFormElement>(null);

>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
  const changeCreateCampaignScreen = useTogglingStore(
    (state) => state.changeCreateCampaignScreen
  );

  const [startingDate, setStartingDate] = React.useState<Date>();
  const [endingDate, setEndingDate] = React.useState<Date>();
<<<<<<< HEAD

  return (
    <>
      <div className="flex flex-col justify-between  TABLET:justify-start ">
        <div>
          <div className="text-h3 font-semibold text-foreground">
            Create Campaign
          </div>
          <div className="text-p text font-medium text-secondary-foreground">
            Campaign Specifics
=======
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
            Create Project
          </div>
          <div className="text-p text font-medium text-secondary-foreground">
            Project Specifics
>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-2 my-6 ">
          <Label htmlFor="text" className="text-body font-semibold">
            Title
          </Label>
          <Input
            type="text"
            id="email"
<<<<<<< HEAD
            placeholder="Title of your Campaign"
            required
          />
          <div className="text-body text-muted-foreground opacity-70">
            This will be shown as the campaign heading to the applicants.
=======
            placeholder="Title of your Project"
            name="project"
            required
          />
          <div className="text-body text-muted-foreground opacity-70">
            This will be shown as the project heading to the collaborators.
>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
          </div>
        </div>

        <div className="flex flex-col justify-start gap-2 mb-6">
<<<<<<< HEAD
          <div className="text-body font-semibold">campaign duration</div>
=======
>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
          <div
            className={cn(
              "flex gap-2 SMALL_LAPTOP:flex-row flex-col w-[50%] ",
              className
            )}
          >
<<<<<<< HEAD
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    " justify-start text-left font-normal",
                    !startingDate && "text-muted-foreground"
                  )}
                >
                  <CalendarRange className="mr-2 h-4 w-4" />
                  {startingDate ? (
                    format(startingDate, "PPP")
                  ) : (
                    <span>starting date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={startingDate}
                  onSelect={setStartingDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {/* end */}

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    " justify-start text-left font-normal",
                    !startingDate && "text-muted-foreground"
                  )}
                >
                  <CalendarRange className="mr-2 h-4 w-4" />
                  {endingDate ? (
                    format(endingDate, "PPP")
                  ) : (
                    <span>ending date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 " align="start">
                <Calendar
                  mode="single"
                  selected={endingDate}
                  onSelect={setEndingDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-2 mb-8 ">
          <Label htmlFor="email" className="text-body font-semibold ">
            Company Name
          </Label>
          <div className="flex gap-4 w-full">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="select company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Bitprowler</SelectItem>
                <SelectItem value="dark">Gamma developers</SelectItem>
                <SelectItem value="system">Hiretics</SelectItem>
              </SelectContent>
            </Select>
            <Button
              className="bg-primaryHoverLight flex gap-1 mr-5"
              variant="outline"
            >
              <PlusSquare className="stroke-secondary-foreground w-5 h-5"></PlusSquare>
              <span className="text-secondary-foreground ">New</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-start ">
          <div className="text-body font-semibold mb-2">Comapany Avatar</div>
          <div className="flex  items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <a
              href="path_to_file"
              download="proposed_file_name"
              className="flex bg-primary py-2 px-3 text-background rounded-md gap-2 items-center"
            >
              <Upload className="h-4 w-4"></Upload>
              <span className="text-body">upload photo</span>
            </a>
          </div>
        </div>

        <CreateCampaignAnimation stepNumber={1} />
        {/* <div>error signal</div> */}

=======
            {/* end */}
          </div>
        </div>

>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
        <AlertDialogFooter className=" w-full flex-row flex justify-between mt-6    ">
          <Button
            variant="outline"
            onClick={() => changeCreateCampaignScreen("CampaignLostAlert")}
          >
            cancel
          </Button>
<<<<<<< HEAD
          <Button
            variant="default"
            className="text-background"
            onClick={() => changeCreateCampaignScreen("jobSpecifications")}
          >
            next
          </Button>
        </AlertDialogFooter>
      </div>
=======
          <Button type="submit" variant="default" className="text-background">
            create
          </Button>
        </AlertDialogFooter>
      </form>
>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
    </>
  );
}
