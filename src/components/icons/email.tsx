import * as React from "react";

export const EmailIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
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
      strokeWidth={props.strokeWidth ?? "1.083"}
      d="m5.833 8.092 3.125 2.5a1.666 1.666 0 0 0 2.084 0l3.125-2.5M17.5 14.76V6.425a1.667 1.667 0 0 0-1.667-1.666H4.167A1.667 1.667 0 0 0 2.5 6.425v8.334a1.667 1.667 0 0 0 1.667 1.666h11.666A1.666 1.666 0 0 0 17.5 14.76"
    ></path>
  </svg>
);