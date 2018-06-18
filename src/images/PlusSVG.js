import React from "react";

const SvgComponent = props => (
  <svg
    width={14}
    height={14}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
	  <path fill="#FFF" fillRule="evenodd"
		  d="M13.417 7.917h-5.5v5.5H6.083v-5.5h-5.5V6.083h5.5v-5.5h1.834v5.5h5.5z"
	  />
  </svg>
);

export default SvgComponent;

