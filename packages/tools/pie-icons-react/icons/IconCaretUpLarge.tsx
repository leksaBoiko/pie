import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconCaretUpLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--caret-up-large", className, iconSize, "IconCaretUpLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="m26.229 22.125-8.96-14a1.68 1.68 0 0 0-2.844 0l-8.671 14a1.68 1.68 0 0 0 1.426 2.564h17.64a1.68 1.68 0 0 0 1.409-2.564ZM7.31 23 15.86 9.131l8.829 13.808L7.31 23Z" /></svg>;
};
export default IconCaretUpLarge;