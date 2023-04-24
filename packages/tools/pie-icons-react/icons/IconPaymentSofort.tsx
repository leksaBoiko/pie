import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconPaymentSofort = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--sofort", className, iconSize, "IconPaymentSofort");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#EF809F" d="M13.889 12.375H2.11a.676.676 0 0 1-.674-.682V4.308c0-.377.307-.683.683-.683h11.76c.376 0 .682.306.682.683v7.385a.682.682 0 0 1-.673.682Z" /><path fill="#fff" d="M5.375 11.447c.298 0 .525-.2.525-.49 0-.27-.193-.385-.429-.455-.149-.043-.245-.078-.245-.183 0-.088.061-.158.167-.158.087 0 .148.053.2.132l.246-.158a.47.47 0 0 0-.438-.254c-.297 0-.49.21-.49.464 0 .201.123.35.412.438.157.043.262.078.262.2 0 .123-.088.193-.21.193-.131 0-.236-.087-.298-.166l-.2.201a.617.617 0 0 0 .498.245m1.199 0a.566.566 0 0 1-.569-.56c0-.306.254-.56.569-.56.315 0 .569.254.569.56 0 .306-.254.56-.57.56Zm0-.28a.275.275 0 0 0 .271-.28.275.275 0 0 0-.271-.28.275.275 0 0 0-.271.28c0 .158.122.28.27.28Zm1.304-.997v-.28h-.044c-.359 0-.543.245-.543.525v1.006h.298v-.438c0-.148.113-.253.28-.253v-.28a.383.383 0 0 0-.28.105v-.114c0-.184.122-.271.288-.262m.648 1.277a.566.566 0 0 1-.569-.56c0-.306.254-.56.569-.56.315 0 .569.254.569.56 0 .306-.254.56-.569.56Zm0-.28a.27.27 0 0 0 .271-.28.275.275 0 0 0-.271-.28.275.275 0 0 0-.271.28c0 .158.122.28.271.28Zm1.024-.683v-.122H9.26v1.059h.297v-.482c0-.175.105-.27.28-.27v-.316c-.13 0-.227.044-.288.14m.761.394v-.262a.37.37 0 0 0 .28.104v-.28c-.158 0-.28-.113-.28-.253v-.167h-.298v.875c0 .28.175.525.543.525h.044v-.28c-.167 0-.289-.078-.289-.262Zm.639.56a.204.204 0 0 0 .201-.201.198.198 0 0 0-.201-.201.198.198 0 0 0-.201.2c0 .114.087.202.2.202Z" /><path fill="#fff" d="M7.527 7.694a.227.227 0 0 1 0 .332l-.017.018a.227.227 0 0 1-.332 0l-.526-.517c-.148-.148-.166-.323-.07-.42L6.6 7.09a.215.215 0 0 1 .289-.018c.043.035.096.027.131-.017s.026-.096-.017-.131a.404.404 0 0 0-.543.035l-.018.017c-.166.175-.14.473.08.683l.524.525a.436.436 0 0 0 .604 0l.018-.018a.434.434 0 0 0 0-.595.095.095 0 0 0-.132 0 .095.095 0 0 0 0 .131m-.315-2.817.219 1.768c0 .052.052.087.105.078.053 0 .088-.052.079-.105L7.405 4.85c-.035-.157.052-.324.175-.35.07-.018.14 0 .201.035a.253.253 0 0 1 .114.166l.376 1.602c.009.052.061.078.114.07.053-.01.079-.062.07-.114l-.376-1.593a.502.502 0 0 0-.193-.288.428.428 0 0 0-.341-.062c-.228.053-.385.315-.324.56" /><path fill="#fff" d="m9.19 6.95.429-2.118a.45.45 0 0 0-.315-.524.468.468 0 0 0-.569.332l-.473 1.61c-.017.053.018.105.062.114.043.008.105-.018.114-.061l.472-1.61a.287.287 0 0 1 .341-.202c.123.035.202.167.175.307l-.428 2.117c-.01.053.026.105.07.114.052 0 .104-.026.113-.079M8.114 8.989c-.674 0-1.234-.49-1.234-1.199a.097.097 0 0 0-.096-.096.097.097 0 0 0-.096.096c0 .814.656 1.382 1.426 1.382a.097.097 0 0 0 .096-.096.097.097 0 0 0-.096-.096M7.78 7.326a.236.236 0 0 1-.096.131h-.017c-.106.088-.254.062-.333-.052l-.411-.612c-.114-.176-.097-.35.008-.43l.018-.017c.14-.079.254-.017.376.158l.342.516s.087.053.13.026c.045-.026.053-.087.027-.131l-.341-.516c-.175-.245-.385-.359-.639-.21l-.026.017c-.202.14-.228.438-.061.683l.41.612a.423.423 0 0 0 .587.114l.018-.018a.421.421 0 0 0 .166-.236.088.088 0 0 0-.07-.114c-.053-.017-.096.018-.114.07" /><path fill="#fff" d="M8.411 7.65c-.192.114-.315.315-.332.63 0 .053.035.096.087.096.053 0 .096-.035.096-.087.018-.28.123-.438.298-.499a.673.673 0 0 1 .289-.035h.026c.123.026.158-.157.035-.184l-.726-.166c-.341-.096-.394-.219-.333-.429.027-.087.079-.14.167-.157a.586.586 0 0 1 .175 0h.034l1.103.253h.018s.034.027.052.044c.07.079.114.228.096.473-.07.857-.472 1.391-1.417 1.382a.097.097 0 0 0-.097.097c0 .052.044.096.097.096 1.067 0 1.531-.613 1.61-1.558.026-.297-.027-.498-.14-.612a.31.31 0 0 0-.184-.105l-1.094-.254s-.026 0-.052-.009a.62.62 0 0 0-.254 0 .384.384 0 0 0-.306.289c-.088.306 0 .542.464.665l.262.061.026.009Z" /></svg>;
};
export default IconPaymentSofort;