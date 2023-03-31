import * as React from "react";
import { SVGProps } from "react";
const IconFoodReady = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--food-ready" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M13.941 12.935v-2.923a5.95 5.95 0 0 0-5.25-5.897 1.278 1.278 0 1 0-1.347 0 5.95 5.95 0 0 0-5.25 5.897v2.923h-.656v1.313h13.124v-1.313h-.62Zm-10.57-2.923a4.629 4.629 0 0 1 9.258 0v2.923H3.37v-2.923Z" /><path fill="#242E30" d="M7.151 10.152 5.944 8.937 4.98 9.9l2.17 2.17L11.02 8.2l-.963-.953-2.905 2.904Z" /></svg>;
};
export default IconFoodReady;