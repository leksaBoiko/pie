import * as React from "react";
import { SVGProps } from "react";
const IconMoonLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--moon-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M15.125 16a8.794 8.794 0 0 1 6.93-8.558 10.612 10.612 0 0 0-.805-.524 10.213 10.213 0 0 0-1.321-.64A10.317 10.317 0 0 0 16 5.5a10.5 10.5 0 1 0 0 21c1.348 0 2.683-.265 3.929-.779.455-.18.897-.394 1.321-.639.28-.166.551-.34.805-.524A8.793 8.793 0 0 1 15.125 16ZM16 24.75a8.75 8.75 0 1 1 1.811-17.308 10.5 10.5 0 0 0 0 17.116A8.834 8.834 0 0 1 16 24.75Z" /></svg>;
};
export default IconMoonLarge;