import SideNavigation from "@/components/side-navigation";
import TopNavigation from "@/components/top-navigation";
import TopbarCompact from "@/components/topbar-compact";
import TopbarSpaced from "@/components/topbar-spaced";
export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full flex justify-center flex-col  items-center  h-screen overscroll-y-none ">
        <div className="  max-w-[1440px]  w-full h-full flex  SMALL_LAPTOP:mr-12  ">
          <SideNavigation />

<<<<<<< HEAD
          {/* <TopNavigation /> */}
=======
>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
          <div
            className="overflow-y-auto   mr-5 ml-5 w-full hidden SMALL_LAPTOP:flex"
            style={{ height: "calc(100vh - 50px)" }}
          >
            {children}
          </div>

          <div className="  w-full flex SMALL_LAPTOP:hidden px-6 TABLET:px-8">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
