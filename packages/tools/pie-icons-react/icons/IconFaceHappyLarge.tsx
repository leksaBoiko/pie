import * as React from "react";
import { SVGProps } from "react";
const IconFaceHappyLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--face-happy-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 22.75a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21Zm-4.375-11.813a1.313 1.313 0 1 1-2.626 0 1.313 1.313 0 0 1 2.626 0Zm11.375 0a1.313 1.313 0 1 1-2.626 0 1.313 1.313 0 0 1 2.626 0Zm-4.288 3.938h1.847a4.717 4.717 0 0 1-9.118 0h1.846a2.975 2.975 0 0 0 5.425 0Z" /></svg>;
};
export default IconFaceHappyLarge;