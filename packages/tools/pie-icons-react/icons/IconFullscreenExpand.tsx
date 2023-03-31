import * as React from "react";
import { SVGProps } from "react";
const IconFullscreenExpand = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--fullscreen-expand" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="m5.99 3.406.737-1.312H2.094v4.633l1.312-.738V3.406H5.99Z" /><path fill="#242E30" d="M10.01 3.406h2.584V5.99l1.312.738V2.094H9.273l.738 1.312Z" /><path fill="#242E30" d="M12.594 10.01v2.584H10.01l-.738 1.312h4.633V9.273l-1.312.738Z" /><path fill="#242E30" d="m3.406 10.01-1.312-.737v4.633h4.633l-.738-1.312H3.406V10.01Z" /></svg>;
};
export default IconFullscreenExpand;