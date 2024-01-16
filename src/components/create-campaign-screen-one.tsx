"use client";

import * as React from "react";
import { CalendarRange, Upload } from "lucide-react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
export default function CreateCampaignScreenOne({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <>
      <div>
        <div>
          <div>Create Campaign</div>
          <div>Campaign Specifics</div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Title</Label>
          <Input type="text" id="email" placeholder="Title of your Campaign" />
          <div>
            This will be shown as the campaign heading to the applicants.
          </div>
        </div>

        <div>
          <div>campaign duration</div>
          <div className={cn("grid gap-2", className)}>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-[300px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarRange className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Company Name</Label>
          <Input type="text" id="email" placeholder="Name of your Comapny" />
        </div>

        <div>
          <div>Comapny Avatar</div>
          <div className="flex">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <a href="path_to_file" download="proposed_file_name">
              <Upload></Upload>
              <span>upload photo</span>
            </a>
          </div>
        </div>

        <div>that cool animation</div>
        <div>error signal</div>

        <div>
          {/* <AlertDialogFooter className="flex flex-row justify-between items-baseline gap-4">
            <div>Cancel</div>
            <AlertDialogAction className="bg-primaryHoverStrong hover:bg-primary dark:text-background">
              Next
            </AlertDialogAction>
          </AlertDialogFooter> */}
        </div>
      </div>
    </>
  );
}
