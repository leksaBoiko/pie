import * as React from "react";
import { SVGProps } from "react";
const IconDrag = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--drag" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M15 9.531H1v1.313h14V9.53Z" /><path fill="#242E30" d="M15 5.156H1V6.47h14V5.156Z" /></svg>;
};
export default IconDrag;