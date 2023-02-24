import React from "react";
import classes from "./QuestionsBlur.module.scss";

const QuestionsBlur = () => {
  return (
    <svg
      className={classes.svg}
      viewBox="0 0 407 271"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_53_303)">
        <path
          d="M303.437 159.015C297.98 183.123 244.778 161.22 215.36 154.561C185.942 147.903 94.9868 152.33 100.444 128.221C105.901 104.113 249.904 95.5915 279.323 102.25C308.741 108.909 308.894 134.907 303.437 159.015Z"
          fill="url(#paint0_linear_53_303)"
          fillOpacity="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_53_303"
          x="0.20842"
          y="0.0639648"
          width="405.987"
          height="269.992"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_53_303" />
        </filter>
        <linearGradient
          id="paint0_linear_53_303"
          x1="331.083"
          y1="174.185"
          x2="214.266"
          y2="232.239"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0208333" stopColor="#AA9CFF" />
          <stop offset="0.520833" stopColor="#6390FF" />
          <stop offset="0.958333" stopColor="#37D2F3" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default QuestionsBlur;
