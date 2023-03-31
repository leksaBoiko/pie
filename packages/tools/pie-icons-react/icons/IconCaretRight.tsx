import * as React from "react";
import { SVGProps } from "react";
const IconCaretRight = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--caret-right" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M11.675 6.749 5.734 2.978a1.304 1.304 0 0 0-.709-.228 1.304 1.304 0 0 0-1.313 1.313v7.822a1.321 1.321 0 0 0 .7 1.164c.189.1.4.151.613.149.265.002.525-.077.744-.228l5.941-4.06a1.286 1.286 0 0 0 .577-1.102 1.313 1.313 0 0 0-.612-1.06Zm-6.65 5.162V4.09l5.95 3.771-5.95 4.051Z" /></svg>;
};
export default IconCaretRight;