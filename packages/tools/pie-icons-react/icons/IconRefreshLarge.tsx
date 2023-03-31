import * as React from "react";
import { SVGProps } from "react";
const IconRefreshLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--refresh-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M18.406 12.797h6.414a1.68 1.68 0 0 0 1.68-1.68V4.774h-1.75v5.433l-.333-.55-.052-.07a10.5 10.5 0 1 0 2.047 7.717l-1.75-.228a8.75 8.75 0 1 1-1.75-6.466l.263.438h-4.769v1.75Z" /></svg>;
};
export default IconRefreshLarge;