import * as React from "react";
import { SVGProps } from "react";
const IconBattery = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--battery" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M14.781 6.25h-.875v-.875a1.54 1.54 0 0 0-1.531-1.531H2.75a1.54 1.54 0 0 0-1.531 1.531v5.25a1.54 1.54 0 0 0 1.531 1.531h9.625a1.54 1.54 0 0 0 1.531-1.531V9.75h.875v-3.5Zm-2.187 4.375a.219.219 0 0 1-.219.219H2.75a.219.219 0 0 1-.219-.219v-5.25a.219.219 0 0 1 .219-.219h9.625a.219.219 0 0 1 .219.219v5.25ZM3.844 6.25h1.312v3.5H3.844v-3.5Zm2.625 0H7.78v3.5H6.47v-3.5Z" /></svg>;
};
export default IconBattery;