import * as React from "react";
import { SVGProps } from "react";
const IconNavigationExpandLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--navigation-expand-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M4.48 4.48v23.03h18.602a4.429 4.429 0 0 0 4.429-4.428V4.48H4.48Zm7.086 21.26H6.252V6.251h5.314v19.487Zm14.173-2.658a2.657 2.657 0 0 1-2.657 2.657h-9.744V6.252h12.401v16.83Z" /><path fill="#242E30" d="m19.468 16.952 1.7 1.701H15.11v1.771h6.058l-1.7 1.701 1.249 1.258 2.905-2.905a1.338 1.338 0 0 0 0-1.878l-2.905-2.897-1.25 1.25Z" /></svg>;
};
export default IconNavigationExpandLarge;