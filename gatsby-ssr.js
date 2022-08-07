import React from "react";
export function onRenderBody(
  { setHeadComponents, setPostBodyComponents }) {
setHeadComponents([
     <script
        type="text/javascript"
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      />,
]);
 
setPostBodyComponents([
  <script
  type="text/javascript"
  src="netlifyIdentityWidget.js"
/>,
]);

}