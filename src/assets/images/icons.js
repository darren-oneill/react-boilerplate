import React from "react";

// Using Feather icons, see https://feathericons.com/
// Return a React component
export const Zap = (width = 20, height = 22, lineColor = "blue") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 20 22"
  >
    <defs>
      <path
        id="zap-a"
        d="M10.8691289,15.0032382 L3.00191115,15.0032382 C2.1540735,15.0032382 1.69091744,14.0143807 2.23368987,13.3630538 L12.2336899,1.36305379 C12.8729428,0.595950276 14.1180433,1.13643882 13.994189,2.12727293 L13.1346934,9.00323819 L21.0019112,9.00323819 C21.8497488,9.00323819 22.3129049,9.99209567 21.7701324,10.6434226 L11.7701324,22.6434226 C11.1308795,23.4105261 9.88577901,22.8700376 10.0096333,21.8792035 L10.8691289,15.0032382 Z M5.13695277,13.0032382 L12.0019112,13.0032382 C12.6034091,13.0032382 13.0687957,13.5304198 12.994189,14.1272729 L12.4172505,18.742781 L18.8668695,11.0032382 L12.0019112,11.0032382 C11.4004132,11.0032382 10.9350266,10.4760566 11.0096333,9.87920346 L11.5865718,5.26369537 L5.13695277,13.0032382 Z"
      />
    </defs>
    <g fill={lineColor} fillRule="evenodd" transform="translate(-2 -1)">
      <mask id="zap-b" fill="#fff">
        <use href="#zap-a" />
      </mask>
      <use fill="#000" fillRule="nonzero" href="#zap-a" />
      <g fill={lineColor} mask="url(#zap-b)">
        <rect width="24" height="24" />
      </g>
    </g>
  </svg>
);
