import * as React from "react";

export const UsersIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? "20"}
    height={props.height ?? "21"}
    fill="none"
    viewBox="0 0 20 21"
  >
    <path
      stroke="currentColor"
      strokeWidth={props.strokeWidth ?? "1.3"}
      d="M7.5 8.925a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666Z"
    ></path>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={props.strokeWidth ?? "1.3"}
      d="M12.5 8.092a2.5 2.5 0 0 0 0-5"
    ></path>
    <path
      stroke="currentColor"
      strokeWidth={props.strokeWidth ?? "1.3"}
      d="M7.5 18.092c3.221 0 5.833-1.492 5.833-3.333s-2.612-3.334-5.834-3.334-5.833 1.493-5.833 3.334 2.612 3.333 5.833 3.333Z"
    ></path>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={props.strokeWidth ?? "1.3"}
      d="M15 12.259c1.462.32 2.5 1.132 2.5 2.083 0 .858-.845 1.603-2.083 1.975"
    ></path>
  </svg>
);
