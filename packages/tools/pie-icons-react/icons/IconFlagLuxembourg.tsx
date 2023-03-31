import * as React from "react";
import { SVGProps } from "react";
const IconFlagLuxembourg = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--luxembourg" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#EEE" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" /><path fill="#D80027" d="M8 1a7 7 0 0 0-6.563 4.566h13.126A7 7 0 0 0 8 1Z" /><path fill="#338AF3" d="M8 15a7 7 0 0 0 6.563-4.566H1.437A7 7 0 0 0 8 15Z" /></svg>;
};
export default IconFlagLuxembourg;