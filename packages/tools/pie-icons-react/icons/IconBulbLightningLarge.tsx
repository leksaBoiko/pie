import * as React from "react";
import { SVGProps } from "react";
const IconBulbLightningLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--bulb-lightning-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="m10.96 20.891.665 3.859h8.75l.639-3.867a4.489 4.489 0 0 1 1.33-2.407 9.083 9.083 0 0 0-.63-13.562 9.17 9.17 0 0 0-7.692-1.838 9.1 9.1 0 0 0-4.427 15.365 4.655 4.655 0 0 1 1.365 2.45ZM8.746 10.75a7.359 7.359 0 1 1 14.041 4.085 7.271 7.271 0 0 1-1.642 2.399 6.196 6.196 0 0 0-1.829 3.368L18.914 23h-5.828l-.402-2.398A6.247 6.247 0 0 0 10.82 17.2a7.324 7.324 0 0 1-2.074-6.449Z" /><path fill="#242E30" d="m16 17.75 3.027-5.758H16V8.125l-3.028 5.801H16v3.824Z" /><path fill="#242E30" d="M20.2 26.5h-8.4l.463 1.75h7.473l.464-1.75Z" /></svg>;
};
export default IconBulbLightningLarge;