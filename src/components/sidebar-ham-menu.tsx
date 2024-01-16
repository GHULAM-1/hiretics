import React, { HTMLAttributes } from "react";

type SidebarHamMenuProps = HTMLAttributes<HTMLDivElement>;

export default function SidebarHamMenu(props: SidebarHamMenuProps) {
  return (
    <>
      <div {...props}>SidebarHamMenu</div>
    </>
  );
}
