import * as React from "react";
import { SVGProps } from "react";
const IconSocialFacebook = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--facebook" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><g clipPath="url(#prefix__clip0_1595_1545)"><path fill="#1778F2" d="M8 1.455A6.545 6.545 0 0 0 6.96 14.466V9.89H5.296V8H6.96V6.556A2.31 2.31 0 0 1 9.435 4.01c.49.007.978.051 1.461.131v1.61h-.822a.945.945 0 0 0-1.068 1.024V8h1.812l-.289 1.89H9.006v4.576A6.545 6.545 0 0 0 8 1.455Z" /></g><defs><clipPath id="prefix__clip0_1595_1545"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconSocialFacebook;