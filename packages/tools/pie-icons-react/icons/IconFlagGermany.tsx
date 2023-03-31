import * as React from "react";
import { SVGProps } from "react";
const IconFlagGermany = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--germany" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#FFDA44" d="M1.438 10.435a7.001 7.001 0 0 0 13.127 0L8 9.828l-6.563.607Z" /><path fill="#333" d="M8.001 1a7.001 7.001 0 0 0-6.563 4.567L8 6.174l6.564-.607A7.001 7.001 0 0 0 8 1Z" /><path fill="#D80027" d="M1.438 5.567a6.987 6.987 0 0 0 0 4.868h13.127a6.984 6.984 0 0 0 0-4.868H1.438Z" /></svg>;
};
export default IconFlagGermany;