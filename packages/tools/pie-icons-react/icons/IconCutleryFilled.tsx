import * as React from "react";
import { SVGProps } from "react";
const IconCutleryFilled = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--cutlery-filled" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><g fill="#242E30" clipPath="url(#prefix__clip0_6127_3639)"><path d="m4.719 7.134 1.312-.018-.07-5.591-1.303.63.06 4.979Z" /><path d="m11.133 11.701 2.135.333c-.018 1.216-.123 2.196-.184 2.966h1.321a91.89 91.89 0 0 0 .166-12.031c-.087-.963-.323-1.479-.778-1.672a1.137 1.137 0 0 0-1.357.43 13.869 13.869 0 0 0-2.24 8.75 1.217 1.217 0 0 0 .937 1.224Z" /><path d="m3.336 1.525-1.312.63v4.821a3.08 3.08 0 0 0 2.695 2.888V15H6.03V9.82a3.045 3.045 0 0 0 2.555-2.844V1.525l-1.312.63v4.821c0 1.164-1.391 1.636-1.969 1.636-.577 0-1.969-.472-1.969-1.636V1.525Z" /></g><defs><clipPath id="prefix__clip0_6127_3639"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconCutleryFilled;