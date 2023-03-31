import * as React from "react";
import { SVGProps } from "react";
const IconChevronSplit = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--chevron-split" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M11.307 6.25 8 2.864 4.693 6.25l-.902-.936 3.5-3.597a1.068 1.068 0 0 1 1.444 0l3.509 3.658-.937.875Z" /><path fill="#242E30" d="M4.693 9.75 8 13.049l3.307-3.378.893.919-3.5 3.596a1.068 1.068 0 0 1-1.444 0l-3.5-3.561.937-.875Z" /></svg>;
};
export default IconChevronSplit;