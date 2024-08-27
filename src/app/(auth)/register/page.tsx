"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Label } from "@/components/ui/label";

export default function Register() {
<<<<<<< HEAD
  const handleGoogleClick = () => {
    
  }

=======
  const handleGoogleClick = () => {};
>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8

  return (
    <>
      <div>
        <div className="h-[7vh] w-screen flex  ">
          <div className="w-1/2 bg-primaryHoverStrong flex items-center pl-4 h-full">
<<<<<<< HEAD
            <Button
              variant="ghost"
              className="hover:bg-primary hover:text-white"
            >
=======
            <Button className="hover:bg-primary hover:text-white">
>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
              <ChevronLeft />
            </Button>
          </div>
          <div className="w-1/2 bg-black h-full flex items-center justify-end pr-6 pt-2  ">
            <Link href="/login">
<<<<<<< HEAD
              <Button className="" variant="secondary">
=======
              <Button className="">
>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
                Sign in
                <ChevronRight className="h-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="h-[93vh]  w-screen flex ">
          <div className="h-full w-1/2 flex justify-center items-center bg-primaryHoverStrong ">
<<<<<<< HEAD
            <div className="text-[8rem] text-primary font-bold">Hiretics</div>
=======
            <div className="text-[5rem] text-primary font-bold">
              Collbora Docs
            </div>
>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
          </div>
          <div className="w-1/2 flex  justify-center items-center bg-black text-white flex-col">
            <div className="w-[25vw] flex flex-col justify-center items-center ">
              <div className="text-h2 font-bold mb-2">SignUp to an account</div>
              <div className="text-gray-500 text-h4 mb-8 text-center">
                Enter your Email and Password below
              </div>
              <div className="flex flex-col w-full gap-2 mb-4">
                <Label htmlFor="text" className="text-body font-semibold">
                  Email :
                </Label>

                <Input
                  className="bg-transparent border border-input text-white mb-4"
                  placeholder="name@example.com"
                />
              </div>

              <div className="flex flex-col w-full gap-2">
                <Label htmlFor="text" className="text-body font-semibold">
                  Password :
                </Label>

                <Input
                  className="bg-transparent border border-input text-white mb-4"
                  placeholder=""
                  type="password"
                />
              </div>
              <Button className="w-full py-6 font-semibold text-lg  ">
                Sign up
              </Button>
              <div className="my-8">OR CONTINUE WITH</div>
              <div className="flex gap-4 w-full">
                <Button
                  className="bg-transparent w-full py-6 font-semibold text-lg "
<<<<<<< HEAD
                  variant="outline"
=======
                  // variant="outline"
>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
                  onClick={handleGoogleClick}
                >
                  Google
                </Button>

                <Button
                  className="bg-transparent w-full py-6 font-semibold text-lg "
                  variant="outline"
                >
                  Linkedin
                </Button>
              </div>

              <div className="mt-4 text-center text-p">
                By clicking continue, you agree to our Terms of Service and
                Privacy Policy.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
