import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconRestaurantFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--restaurant-filled", className, iconSize, "IconRestaurantFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M12.795 9.277c-.07.018-.14.018-.201.027-.901.131-1.838.008-2.643-.385-.437.218-.919.35-1.409.411A5.467 5.467 0 0 1 8 9.365a4.587 4.587 0 0 1-1.951-.446c-.805.393-1.742.516-2.643.385-.07-.009-.14-.009-.21-.027-.157-.026-.297-.078-.446-.13a3.576 3.576 0 0 1-.656-.272v5.023h11.812V8.875c-.21.105-.429.193-.656.271-.149.044-.297.096-.455.131Zm-5.618 3.317v-1.216c0-.447.368-.814.814-.814.446 0 .814.367.814.813v1.217H7.177Z" /><path fill="#242E30" d="M14.72 4.885a2.626 2.626 0 0 0-.857-1.4l-1.103-.954-.079-.07c-.07-.061-.157-.096-.236-.14a1.487 1.487 0 0 0-.761-.227H4.35a1.5 1.5 0 0 0-.472.087c-.035.009-.07.026-.114.044-.149.061-.289.14-.411.245L2.146 3.502c-.595.508-.936 1.217-.936 1.952 0 .157.017.306.044.455.105.551.402 1.05.831 1.426a2.706 2.706 0 0 0 .656.438c.21.096.42.183.656.227 0 0 .027.009.044.018.219.043.438.06.656.052.07 0 .14-.009.21-.018.14-.008.29-.026.43-.052.078-.018.165-.044.244-.061.123-.035.245-.079.359-.131.079-.035.166-.07.236-.114.035-.018.079-.035.123-.061h.673l.044.026c.053.035.114.061.175.087.079.044.158.079.245.105.079.027.158.061.236.079.062.018.114.035.175.044.105.026.202.043.307.061h.035c.262.035.533.035.796 0h.035c.105-.018.21-.044.315-.061.061-.018.114-.027.175-.044.079-.026.166-.052.245-.079l.236-.105c.061-.026.123-.052.175-.087.018 0 .026-.018.044-.018h.674l.122.053c.079.043.166.079.245.114.114.052.228.087.35.122.088.026.167.053.254.07.131.026.262.044.402.053.08 0 .158.017.237.017.21 0 .428-.018.647-.053 0 0 .035-.008.044-.017.236-.053.455-.131.656-.228.245-.113.464-.262.657-.437.542-.481.875-1.155.875-1.89a2.17 2.17 0 0 0-.062-.534l.009-.026Z" /></svg>;
};
export default IconRestaurantFilled;