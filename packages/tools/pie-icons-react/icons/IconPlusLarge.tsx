import * as React from "react";
import { SVGProps } from "react";
const IconPlusLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--plus-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M27.375 16.875v-1.75h-10.5v-10.5h-1.75v10.5h-10.5v1.75h10.5v10.5h1.75v-10.5h10.5Z" /></svg>;
};
export default IconPlusLarge;