import React from "react";

function LoadingIcon(props) {
  return (
    <svg
      width="96"
      height="96"
      viewBox="-32 -32 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="64" height="64" rx="8" fill="url(#paint0_linear)">
        <animateTransform
          attributeName="transform"
          dur="3s"
          type="rotate"
          from="0 32 32"
          to="360 32 32"
          repeatCount="indefinite"
          begin="0"
        ></animateTransform>
      </rect>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="0"
          y1="32"
          x2="64"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#22D3EE" />
          <stop offset="1" stopColor="#0EA5E9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default LoadingIcon;
