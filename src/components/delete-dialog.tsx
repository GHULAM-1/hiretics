import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash } from "lucide-react";

export function DeleteDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="flex items-center gap-3">
          <Trash className="h-4 w-4 stroke-red-500"></Trash>
          <span className="text-red-500">delete campaign</span>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="rounded-md bg-background border border-input">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-row justify-end items-baseline gap-4">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-primaryHoverStrong hover:bg-primary dark:text-background">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
