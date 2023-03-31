import * as React from "react";
import { SVGProps } from "react";
const IconPatterns = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--patterns" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><g fill="#242E30" clipPath="url(#prefix__clip0_7066_3739)"><path d="M1.551 14.589h5.662V8.936H1.55v5.653Zm1.313-4.34H5.89v3.027H2.864V10.25Z" /><path d="M6.128 7.624a3.085 3.085 0 0 0 3.08-3.08 3.085 3.085 0 0 0-3.08-3.08 3.085 3.085 0 0 0-3.08 3.08 3.085 3.085 0 0 0 3.08 3.08Zm0-4.848c.97 0 1.767.796 1.767 1.768 0 .971-.796 1.767-1.767 1.767A1.774 1.774 0 0 1 4.36 4.544c0-.971.796-1.768 1.768-1.768Z" /><path d="m11.203 4.544-3.334 6.343h6.676l-3.334-6.343h-.008Zm0 2.817 1.163 2.214H10.04l1.164-2.214Z" /></g><defs><clipPath id="prefix__clip0_7066_3739"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconPatterns;