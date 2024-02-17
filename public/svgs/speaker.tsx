import * as React from "react";

function Speaker(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 16"
      fill="current"
      {...props}
    >
      <path
        d="M16.003 9V7h4v2h-4zm1.2 7l-3.2-2.4 1.2-1.6 3.2 2.4-1.2 1.6zm-2-12l-1.2-1.6 3.2-2.4 1.2 1.6-3.2 2.4zm-12.2 11v-4h-1c-.55 0-1.02-.196-1.413-.588A1.926 1.926 0 01.003 9V7c0-.55.196-1.02.587-1.412A1.926 1.926 0 012.003 5h4l5-3v12l-5-3h-1v4h-2zm9-3.65v-6.7c.45.4.812.887 1.087 1.462.275.575.413 1.205.413 1.888 0 .683-.138 1.313-.413 1.887a4.567 4.567 0 01-1.087 1.463z"
        fill="current"
      />
    </svg>
  );
}

export default Speaker;
