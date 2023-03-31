import * as React from "react";
import { SVGProps } from "react";
const IconResizeLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--resize-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#000" d="M22.726 2.243V1L1 22.735h1.243L22.726 2.243Z" /><path fill="#000" d="M2.243 22.735h1.233l19.25-19.259V2.243L2.243 22.735Z" /><path fill="#000" d="M14.099 22.735h1.233l7.394-7.402v-1.234L14.1 22.735Z" /><path fill="#000" d="m14.099 22.735 8.627-8.636v-1.234l-9.861 9.87h1.234Z" /></svg>;
};
export default IconResizeLarge;