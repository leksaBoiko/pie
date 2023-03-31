import * as React from "react";
import { SVGProps } from "react";
const IconEdit = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--edit" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M14.44 3.502 12.498 1.56a1.54 1.54 0 0 0-2.17 0L2.033 9.855a1.61 1.61 0 0 0-.455.945l-.447 4.069 4.07-.447c.356-.043.688-.203.944-.455l8.295-8.295a1.54 1.54 0 0 0 0-2.17ZM5.218 13.04a.236.236 0 0 1-.167.07l-2.432.271.262-2.432a.297.297 0 0 1 .08-.166l6.124-6.126 2.249 2.25-6.116 6.133Zm8.295-8.295-1.217 1.207-2.248-2.248 1.207-1.217c.043-.04.1-.061.158-.06a.21.21 0 0 1 .157.06l1.943 1.943a.236.236 0 0 1 0 .315Z" /></svg>;
};
export default IconEdit;