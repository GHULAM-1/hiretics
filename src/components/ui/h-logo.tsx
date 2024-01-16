type HLogoProps = {
  fontSize: string;
};

export default function HLogo({ fontSize }: HLogoProps) {
  return (
    <>
      <div className={`bg-primary font-black text-${fontSize}`}>H</div>
    </>
  );
}
