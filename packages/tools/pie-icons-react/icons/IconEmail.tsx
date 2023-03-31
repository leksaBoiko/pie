import * as React from "react";
import { SVGProps } from "react";
const IconEmail = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--email" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M13.451 2.802H2.55A1.566 1.566 0 0 0 1 4.36v7.28a1.566 1.566 0 0 0 1.566 1.557h10.885A1.566 1.566 0 0 0 15 11.64V4.36a1.566 1.566 0 0 0-1.549-1.558Zm.254 2.17v6.204L10.354 8.08l3.351-3.107ZM7.58 9.846a.647.647 0 0 0 .884 0l.945-.875 3.15 2.914H3.362l3.22-2.923.998.884Zm5.145-5.731L8 8.472 3.196 4.097l9.529.018ZM5.603 8.079 2.295 11.08V5.069l3.308 3.01Z" /></svg>;
};
export default IconEmail;