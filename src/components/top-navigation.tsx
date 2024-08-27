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
<<<<<<< HEAD
      <TopbarSpaced
        subHeading={subHeading}
        mainHeading={mainHeading}
        
      />
=======
      <TopbarSpaced subHeading={subHeading} mainHeading={mainHeading} />
>>>>>>> f8a5ab65a7f7654d04355130d860e93c58fee6f8
    </>
  );
}
