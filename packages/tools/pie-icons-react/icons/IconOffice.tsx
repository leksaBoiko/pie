import * as React from "react";
import { SVGProps } from "react";
const IconOffice = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--office" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M12.375 2.094h-8.75a1.54 1.54 0 0 0-1.531 1.531v10.281h11.812V3.625a1.54 1.54 0 0 0-1.531-1.531Zm.219 10.5H8.656v-1.969H7.344v1.969H3.406V3.625a.219.219 0 0 1 .219-.219h8.75a.219.219 0 0 1 .219.219v8.969Zm-3.719-7h1.75v1.312h-1.75V5.594Zm-3.5 0h1.75v1.312h-1.75V5.594Zm3.5 2.625h1.75V9.53h-1.75V8.22Zm-3.5 0h1.75V9.53h-1.75V8.22Z" /></svg>;
};
export default IconOffice;