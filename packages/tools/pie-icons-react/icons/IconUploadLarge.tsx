import * as React from "react";
import { SVGProps } from "react";
const IconUploadLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--upload-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="m11.546 9.796-1.233-1.234 4.453-4.453a1.75 1.75 0 0 1 2.468 0l4.453 4.453-1.233 1.234-3.579-3.57V19.5h-1.75V6.226l-3.579 3.57ZM23 12.5h-3.5v1.75H23a.875.875 0 0 1 .875.875V26.5a.875.875 0 0 1-.875.875H9a.875.875 0 0 1-.875-.875V15.125A.875.875 0 0 1 9 14.25h3.5V12.5H9a2.625 2.625 0 0 0-2.625 2.625V26.5A2.625 2.625 0 0 0 9 29.125h14a2.625 2.625 0 0 0 2.625-2.625V15.125A2.625 2.625 0 0 0 23 12.5Z" /></svg>;
};
export default IconUploadLarge;