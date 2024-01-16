import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CreateCampaignCard from "./create-campaign-card";
type DrawerDialogProps = {
  children: React.ReactNode;
};
import CreateCampaignScreenOne from "./create-campaign-screen-one";
import CreateCampaignScreenTwo from "./create-campaign-screen-two";
import CreateCampaignScreenThree from "./create-campaign-screen-three";

export default function CreateCampaignDialog({ children }: DrawerDialogProps) {
  // const [open, setOpen] = React.useState(false);
  // const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <div className="hidden SMALL_LAPTOP:flex">
        <AlertDialog>
          <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
          <AlertDialogContent>
            <CreateCampaignScreenOne />
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="flex SMALL_LAPTOP:hidden">
        <Drawer>
          <DrawerTrigger asChild>{children}</DrawerTrigger>
          <DrawerContent>
            <CreateCampaignScreenOne />
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}

//  <div className="hidden SMALL_LAPTOP:flex">
//         <AlertDialog open={open} onOpenChange={setOpen}>
//           <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
//           <AlertDialogContent>
//             <CreateCampaignScreenOne />
//           </AlertDialogContent>
//         </AlertDialog>
//       </div>

//       <div className="flex SMALL_MOBILE:hidden">
//         <Drawer open={open} onOpenChange={setOpen}>
//           <DrawerTrigger asChild>{children}</DrawerTrigger>
//           <DrawerContent>
//             <CreateCampaignScreenOne />
//           </DrawerContent>
//         </Drawer>
//       </div>
