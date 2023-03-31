import * as React from "react";
import { SVGProps } from "react";
const IconPlus = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--plus" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M14.125 7.344H8.656V1.875H7.344v5.469H1.875v1.312h5.469v5.469h1.312V8.656h5.469V7.344Z" /></svg>;
};
export default IconPlus;