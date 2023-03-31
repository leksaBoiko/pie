import * as React from "react";
import { SVGProps } from "react";
const IconChartMarkerLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--chart-marker-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M9 22.125h1.75v7H9v-7Zm6.125 7h1.75v-12.25h-1.75v12.25Zm6.125-8.75v8.75H23v-8.75h-1.75ZM21.25 9a2.625 2.625 0 0 1-.989 2.047L16 14.495l-4.261-3.412A2.626 2.626 0 0 1 10.75 9V2.875h10.5V9ZM19.5 4.625h-7V9a.874.874 0 0 0 .332.682L16 12.255l3.168-2.538A.874.874 0 0 0 19.5 9V4.625Z" /></svg>;
};
export default IconChartMarkerLarge;