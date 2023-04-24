import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconLocationRestaurantLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--location-restaurant-large", className, iconSize, "IconLocationRestaurantLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="m16 14.618 3.596-3.632a5.171 5.171 0 0 0 0-7.236 5.05 5.05 0 0 0-7.192 0 5.171 5.171 0 0 0 0 7.236L16 14.618Zm-2.345-9.625a3.3 3.3 0 0 1 4.69 0 3.404 3.404 0 0 1 0 4.777L16 12.133l-2.345-2.38a3.404 3.404 0 0 1 0-4.778v.018Zm13.3 10.132a3.982 3.982 0 0 0-1.453-3.036l-1.933-1.654a2.46 2.46 0 0 0-.875-.455l-1.112 1.645h.464a.542.542 0 0 1 .376.14l1.943 1.68a2.248 2.248 0 0 1 .875 1.75 2.468 2.468 0 0 1-2.1 2.293 3.028 3.028 0 0 1-3.168-1.173h-1.505A2.904 2.904 0 0 1 16 17.523a2.905 2.905 0 0 1-2.468-1.243h-1.47a3.028 3.028 0 0 1-3.167 1.173 2.467 2.467 0 0 1-2.1-2.328 2.266 2.266 0 0 1 .875-1.75l1.969-1.68a.603.603 0 0 1 .358-.07h.875L9.77 9.875a2.406 2.406 0 0 0-1.278.534l-1.977 1.706a3.998 3.998 0 0 0-1.47 3.01 4.051 4.051 0 0 0 2.205 3.5v10.5h17.5V18.686a4.069 4.069 0 0 0 2.205-3.56Zm-11.83 12.25V24.75a.875.875 0 1 1 1.75 0v2.625h-1.75Zm3.5 0V24.75a2.625 2.625 0 1 0-5.25 0v2.625H9V19.23a4.9 4.9 0 0 0 3.797-1.146 4.9 4.9 0 0 0 6.405 0A4.9 4.9 0 0 0 23 19.229v8.146h-4.375Z" /></svg>;
};
export default IconLocationRestaurantLarge;