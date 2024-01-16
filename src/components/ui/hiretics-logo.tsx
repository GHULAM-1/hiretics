import Link from "next/link";
type HireticsLogoProps = {
  fontSize: string;
  children: React.ReactNode;
};

export default function HireticsLogo({
  fontSize,
  children,
}: HireticsLogoProps) {
  return (
    <>
      <Link
        href="/"
        className={`text-primary flex font-bold tracking-tight justify-center items-center text-[${fontSize}]`}
      >
        {children}
      </Link>
    </>
  );
}
