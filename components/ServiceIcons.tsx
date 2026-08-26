import type { ReactElement } from "react";

const shared = {
  width: 34,
  height: 34,
  viewBox: "0 0 34 34",
  fill: "none",
} as const;

export const serviceIcons: Record<string, ReactElement> = {
  web: (
    <svg {...shared}>
      <rect
        x="3"
        y="6"
        width="28"
        height="20"
        rx="2"
        stroke="#EDEFF5"
        strokeWidth="1.6"
      />
      <path d="M3 11H31" stroke="#EDEFF5" strokeWidth="1.6" />
      <circle cx="7" cy="8.5" r="0.8" fill="#EDEFF5" />
      <path
        d="M10 30H24"
        stroke="var(--amber)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  mobile: (
    <svg {...shared}>
      <rect
        x="9"
        y="3"
        width="16"
        height="28"
        rx="3"
        stroke="#EDEFF5"
        strokeWidth="1.6"
      />
      <line
        x1="9"
        y1="25"
        x2="25"
        y2="25"
        stroke="#EDEFF5"
        strokeWidth="1.6"
      />
      <circle cx="17" cy="28" r="1" fill="var(--amber)" />
    </svg>
  ),
  ai: (
    <svg {...shared}>
      <circle cx="17" cy="17" r="6" stroke="#EDEFF5" strokeWidth="1.6" />
      <path
        d="M17 3V8M17 26V31M3 17H8M26 17H31M7 7L10.5 10.5M23.5 23.5L27 27M27 7L23.5 10.5M10.5 23.5L7 27"
        stroke="#EDEFF5"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="17" cy="17" r="2" fill="var(--amber)" />
    </svg>
  ),
  automation: (
    <svg {...shared}>
      <circle cx="7" cy="9" r="3.5" stroke="#EDEFF5" strokeWidth="1.6" />
      <circle cx="27" cy="9" r="3.5" stroke="#EDEFF5" strokeWidth="1.6" />
      <circle cx="17" cy="27" r="3.5" stroke="#EDEFF5" strokeWidth="1.6" />
      <path d="M10 10.5L17 24M24 10.5L17 24" stroke="var(--amber)" strokeWidth="1.6" />
    </svg>
  ),
};
