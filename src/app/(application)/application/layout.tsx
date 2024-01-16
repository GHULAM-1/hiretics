import SideNavigation from "@/components/side-navigation";
import TopNavigation from "@/components/top-navigation";

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full flex justify-center  items-center  h-screen overscroll-y-none ">
        <div className="  max-w-[1440px]  w-full h-full flex  SMALL_LAPTOP:mr-12  ">
          <SideNavigation />
          <div className="w-full">
            <TopNavigation />
            <div
              className="overflow-y-auto   mr-5 ml-5 w-full hidden SMALL_LAPTOP:flex"
              style={{ height: "calc(100vh - 213px)" }}
            >
              {children}
            </div>

            <div className="  w-full flex SMALL_LAPTOP:hidden px-6 TABLET:px-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
