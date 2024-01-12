import React, { SVGProps } from "react";

export const Twitter = ({
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
      <g clip-path="url(#clip0_4_40)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 0C2.68629 0 0 2.68629 0 6V42C0 45.3137 2.68629 48 6 48H42C45.3137 48 48 45.3137 48 42V6C48 2.68629 45.3137 0 42 0H6ZM34.5816 13H30.9014L24.8372 19.932L19.5939 13H12L21.0736 24.8648L12.4739 34.6938H16.1563L22.7935 27.1099L28.5941 34.6938H36L26.5415 22.1893L34.5816 13ZM31.649 32.491H29.6098L16.2976 15.0871H18.4859L31.649 32.491Z"
          fill="gray"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_40">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
