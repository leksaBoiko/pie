import * as React from "react";
import { SVGProps } from "react";
const IconRss = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--rss" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M5.034 2.96v1.312c.297 0 7.35.088 7.35 7.35h1.312c0-6.85-5.696-8.662-8.662-8.662Z" /><path fill="#242E30" d="M5.034 7.326V8.64A2.984 2.984 0 0 1 8 11.623h1.313a4.296 4.296 0 0 0-4.28-4.297Z" /><path fill="#242E30" d="M3.433 11.964a1.155 1.155 0 1 0 1.627 1.639 1.155 1.155 0 0 0-1.627-1.64Z" /></svg>;
};
export default IconRss;