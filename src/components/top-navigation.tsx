import TopbarCompact from "./topbar-compact";
import TopbarSpaced from "./topbar-spaced";

export default function TopNavigation() {
  return (
    <>
      <TopbarCompact className="flex justify-between SMALL_LAPTOP:hidden mx-6 TABLET:mx-8" />
      <TopbarSpaced className="hidden SMALL_LAPTOP:flex flex-col  mt-5 mr-5 ml-5 w-full" />
    </>
  );
}
