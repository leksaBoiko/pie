import * as React from "react";
import { SVGProps } from "react";
const IconNotification = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--notification" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="m13.906 10.354-.402-.403a4.577 4.577 0 0 1-1.348-3.255V6.25a4.165 4.165 0 0 0-1.365-3.08 4.208 4.208 0 0 0-2.135-1.006V1H7.344v1.164a4.287 4.287 0 0 0-3.5 4.252v.28a4.576 4.576 0 0 1-1.348 3.255l-.402.403v1.802h3.089a2.827 2.827 0 0 0 5.635 0h3.088v-1.802ZM8 13.469a1.532 1.532 0 0 1-1.514-1.313h3.028A1.531 1.531 0 0 1 8 13.47Zm2.686-2.625H3.46a5.871 5.871 0 0 0 1.697-4.148v-.28a2.958 2.958 0 0 1 2.555-2.992 2.844 2.844 0 0 1 3.133 2.826v.446a5.872 5.872 0 0 0 1.697 4.148h-1.855Z" /></svg>;
};
export default IconNotification;