import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconSocialBlogger = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--blogger", className, iconSize, "IconSocialBlogger");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#F06A35" d="M3.371 13.953a1.891 1.891 0 0 1-.597-.268 2.18 2.18 0 0 1-.455-.44 2.29 2.29 0 0 1-.268-.589C2 12.473 2 12.4 2 8.01c-.002-4.369 0-4.465.047-4.653a1.81 1.81 0 0 1 1.373-1.32c.194-.043 8.895-.05 9.105-.007a1.79 1.79 0 0 1 1.275.975c.206.41.187-.041.197 4.837.006 3.103 0 4.406-.02 4.569-.092.76-.615 1.348-1.368 1.541-.192.05-.26.05-4.63.049-4.227-.002-4.444-.004-4.609-.047Z" /><path fill="#fff" d="M9.698 11.698c.539-.073.961-.29 1.358-.695.286-.294.466-.611.583-1.033.049-.175.053-.26.062-1.288.007-.776.001-1.14-.02-1.231a.477.477 0 0 0-.206-.308c-.029-.016-.215-.036-.414-.045-.333-.015-.37-.021-.476-.083-.166-.098-.212-.204-.213-.49 0-.55-.228-1.058-.678-1.518a2.529 2.529 0 0 0-1.087-.673c-.098-.03-.317-.04-1.05-.048-1.15-.014-1.405.01-1.797.166-.722.288-1.24.895-1.43 1.673-.035.146-.042.38-.05 1.726-.011 1.686 0 1.934.106 2.268.087.276.174.445.355.685.344.458.86.788 1.375.881.245.045 3.272.056 3.582.013Z" /><path fill="#F06A35" d="M6.517 7.07c-.275-.076-.378-.472-.176-.677.13-.13.165-.136.976-.136.727 0 .752.002.859.056.154.078.221.188.221.364 0 .158-.063.27-.203.358-.076.048-.121.051-.834.055-.44.003-.79-.005-.843-.02Zm-.034 2.666a.465.465 0 0 1-.248-.322.469.469 0 0 1 .136-.373c.117-.106.169-.11 1.613-.11 1.486-.002 1.478-.002 1.62.13a.41.41 0 0 1-.084.653l-.246.04-1.284.015c-1.129.013-1.449-.007-1.507-.033Z" /></svg>;
};
export default IconSocialBlogger;