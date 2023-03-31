import * as React from "react";
import { SVGProps } from "react";
const IconSocialMicrosoftCircleLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--microsoft-circle-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M16 28.25a12.25 12.25 0 1 1 0-24.5 12.25 12.25 0 0 1 0 24.5ZM16 5.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Z" /><path fill="#262626" d="M10 10h5.5v5.5H10V10Z" /><path fill="#262626" d="M10 16.5h5.5V22H10v-5.5Z" /><path fill="#262626" d="M16.5 10H22v5.5h-5.5V10Z" /><path fill="#262626" d="M16.5 16.5H22V22h-5.5v-5.5Z" /></svg>;
};
export default IconSocialMicrosoftCircleLarge;