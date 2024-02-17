"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
export default function Login() {
  const isDevelopment = process.env.NODE_ENV === "development";
  const callbackUrl = isDevelopment
    ? "http://localhost:3000/application"
    : `${process.env.NEXT_PUBLIC_VERCEL_URL}/application`;
  return (
    <>
      <div>
        <div className="h-[7vh] w-screen flex  ">
          <div className="w-1/2 bg-primaryHoverStrong flex items-center pl-4 h-full">
            <Button
              variant="ghost"
              className="hover:bg-primary hover:text-white"
            >
              <ChevronLeft />
            </Button>
          </div>
          <div className="w-1/2 bg-black h-full flex items-center justify-end pr-6 pt-2  ">
            <Link href="/register">
              <Button className="" variant="secondary">
                Sign up
                <ChevronRight className="h-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="h-[93vh]  w-screen flex ">
          <div className="h-full w-1/2 flex justify-center items-center bg-primaryHoverStrong ">
            <div className="text-[5rem] text-primary font-bold">
              Collaboro Docs
            </div>
          </div>
          <div className="w-1/2 flex  justify-center items-center bg-black text-white flex-col">
            <div className="w-[25vw] flex flex-col justify-center items-center ">
              <div className="text-h2 font-bold mb-2">SignIn to an account</div>
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
              <Button
                className="w-full py-6 font-semibold text-lg  "
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "http://localhost:3000/application",
                  })
                }
              >
                Sign In
              </Button>
              <div className="my-8">OR CONTINUE WITH</div>
              <div className="flex gap-4 w-full">
                <Button
                  className="bg-transparent w-full py-6 font-semibold text-lg "
                  variant="outline"
                >
                  Google
                </Button>

                <Button
                  onClick={() => signIn("google", { callbackUrl })}
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

// "use client";
// import { signIn } from "next-auth/react";
// const isDevelopment = process.env.NODE_ENV === "development";
// const callbackUrl = isDevelopment
//   ? "http://localhost:3000/application"
//   : `${process.env.NEXT_PUBLIC_VERCEL_URL}/application`;

// export default function Login() {
//   return (
//     <>
//       <button onClick={() => signIn("google", { callbackUrl })}>Sign In</button>
//     </>
//   );
// }
