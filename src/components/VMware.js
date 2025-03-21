import React from "react";

const VmwareIcon = ({ size = "3em", color = "#607D8B" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill={color}
  >
    <path d="M32 0c17.7 0 32 14.3 32 32S49.7 64 32 64 0 49.7 0 32 14.3 0 32 0zm0 3C15.6 3 3 15.6 3 32s12.6 29 29 29 29-12.6 29-29S48.4 3 32 3zm16.6 20.6l-4.2 18.3h-5.3L35 34.5l-4.2 7.4h-5.3L21.4 24.6h4.7l2.2 9.6 3.9-6.9h3.5l3.9 6.9 2.2-9.6h4.7z" />
  </svg>
);

export default VmwareIcon;
