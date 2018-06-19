import React from "react";

const SvgComponent = props => (
  <svg
    width={14}
    height={14}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
	  <path
		  fill="#000"
		  xlinkHref="#a"
		  transform="translate(-4 -4)"
		  fillRule="evenodd"
		  d="M17.417 5.876l-1.293-1.293L11 9.707 5.876 4.583 4.583 5.876 9.707 11l-5.124 5.124 1.293 1.293L11 12.292l5.124 5.125 1.293-1.293L12.292 11z"
	  />
  </svg>
);

export default SvgComponent;

