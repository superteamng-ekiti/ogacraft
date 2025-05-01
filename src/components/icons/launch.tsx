import * as React from "react";

export const LaunchIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? "20"}
    height={props.height ?? "21"}
    fill="none"
    viewBox="0 0 20 21"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props.strokeWidth ?? "1.3"}
      d="m12.5 12.26 1.705-1.278c2.02-1.516 2.914-4.573 2.462-7.056-2.484-.452-5.54.442-7.056 2.462L8.334 8.092m4.167 4.167-2.917 2.083-3.333-3.333 2.083-2.917m4.167 4.167v2.223c0 .72-.234 1.423-.667 2l-.583.777-.834-.833M8.334 8.092H6.111c-.72 0-1.423.234-2 .667l-.777.583.833.834m2.917 5.416-2.917.834.972-2.917m7.778-5a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667"
    ></path>
  </svg>
);
