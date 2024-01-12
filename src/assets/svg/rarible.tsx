import React, { SVGProps } from "react";

export const Rarible = ({
  width = "48",
  height = "48",
  fill = "#5181B8",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4_38)">
        <rect width="48" height="48" rx="6" fill="#FEDA03" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28.7725 14.6H11V33.068H18.48V26.7994H27.3554C28.7205 26.7994 29.5222 27.3411 29.5222 28.6845V33.068H37V28.4505C37 25.937 35.5829 24.3508 33.6241 23.7701C35.2622 23.3454 36.7161 22.1211 36.7161 19.6574C36.7161 15.5534 33.2362 14.6 28.7725 14.6ZM18.48 21.8243V20.0171H27.4832C28.4626 20.0171 29.0563 20.1471 29.0563 20.9229C29.0563 21.6943 28.4626 21.8243 27.4832 21.8243H18.48Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_38">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
