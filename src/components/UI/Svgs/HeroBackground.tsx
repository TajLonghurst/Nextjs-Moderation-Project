import React from "react";
import classes from "./HeroBackground.module.scss";

const HeroBackground = () => {
  return (
    <svg
      viewBox="0 0 852 944"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.Svgs}
    >
      <g filter="url(#filter0_f_19_41)">
        <path
          d="M752 440.394C752 585.196 348.165 844 171.261 844C-5.64214 844 202.535 615.79 202.535 470.988C202.535 326.185 157.581 100 334.485 100C511.388 100 752 295.591 752 440.394Z"
          fill="url(#paint0_linear_19_41)"
          fillOpacity="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_19_41"
          x="0"
          y="0"
          width="852"
          height="944"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_19_41" />
        </filter>
        <linearGradient
          id="paint0_linear_19_41"
          x1="688.5"
          y1="217"
          x2="95.9941"
          y2="700.455"
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

export default HeroBackground;
