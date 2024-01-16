import SidebarCollapsed from "./sidebar-collapsed";
import SidebarExpanded from "./sidebar-expanded";
import SidebarHamMenu from "./sidebar-ham-menu";

export default function SideNavigation() {
  return (
    <>
      {/* <SidebarHamMenu className="flex SMALL_LAPTOP:hidden bg-red-600 w-screen h-screen absolute m-0" /> */}
      <SidebarCollapsed className="hidden SMALL_LAPTOP:flex LAPTOP:hidden flex-col  w-[104px] min-w-[104px] p-8 justify-between  items-center my-5 ml-5 border border-input rounded-md shadow-md" />

      <SidebarExpanded className="hidden LAPTOP:flex w-[280px]  min-w-[280px] p-8 flex-col justify-between items-center my-5 ml-5 border border-input rounded-md shadow-md" />
    </>
  );
}
