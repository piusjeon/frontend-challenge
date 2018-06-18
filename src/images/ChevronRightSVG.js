import React from "react";

const SvgComponent = props => (
  <svg
    width={8}
    height={13}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
	  <path
		  fill="#000"
		  transform="rotate(-90 5 13.68)"
		  xlinkHref="#a"
		  fillRule="evenodd"
		  id="a"
		  d="M17.108 8.858l-4.733 4.724-4.733-4.724-1.455 1.454 6.188 6.188 6.188-6.188z"
	  />
  </svg>
);

export default SvgComponent;

