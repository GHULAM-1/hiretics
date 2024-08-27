import TopbarCompact from "./topbar-compact";
import TopbarSpaced from "./topbar-spaced";
type TopSectionProps = {
  mainHeading: string;
  subHeading: string;
};
export default function TopNavigation({
  mainHeading,
  subHeading,
}: TopSectionProps) {
  return (
    <>
      <TopbarCompact mainHeading={mainHeading} subHeading={subHeading} />
      <TopbarSpaced
        subHeading={subHeading}
        mainHeading={mainHeading}
        
      />
    </>
  );
}
