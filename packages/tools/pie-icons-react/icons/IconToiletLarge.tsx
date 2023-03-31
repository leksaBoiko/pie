import * as React from "react";
import { SVGProps } from "react";
const IconToiletLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--toilet-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M12.308 19.01a2.135 2.135 0 0 1-.753 2.319l-.752.612V26.5h-1.75v-5.399l1.4-1.128a.43.43 0 0 0 .183-.473l-1.198-3.894a.937.937 0 0 0-.875-.481h-2.6a.937.937 0 0 0-.874.481L3.864 19.5a.429.429 0 0 0 .184.446l1.4 1.129V26.5h-1.75v-4.559l-.753-.612a2.136 2.136 0 0 1-.752-2.319l1.198-3.885a2.625 2.625 0 0 1 2.573-1.75h2.572a2.625 2.625 0 0 1 2.573 1.75l1.199 3.885ZM3.75 9a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM5.5 9A1.75 1.75 0 1 0 9 9a1.75 1.75 0 0 0-3.5 0Zm22.418 6.125a2.713 2.713 0 0 0-2.625-1.803h-2.765a2.721 2.721 0 0 0-2.678 1.882l-1.75 8.338h2.074V26.5h1.75v-4.655H20.26l1.278-6.125a1.024 1.024 0 0 1 .989-.595h2.695c.463 0 .875.236.962.49l1.304 6.23h-1.671V26.5h1.75v-2.905h2.073l-1.723-8.47ZM20.375 9a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm1.75 0a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0Zm-7 18.375h1.75V4.625h-1.75v22.75Z" /></svg>;
};
export default IconToiletLarge;