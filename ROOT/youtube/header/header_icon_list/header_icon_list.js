import { makeHeaderIcon } from "../header_icon/header_icon.js";
import { makeSlider } from "../../component/slider/slider.js";
export const makeIconList = (imgObj) => {
  const { camera, alert } = imgObj;
  const iconList = makeTag({ tagName: "div", tagClass: "header_icon_list" });
  iconList.appendChild(makeHeaderIcon(camera.resource));
  iconList.appendChild(makeHeaderIcon(alert.resource));
  iconList.appendChild(makeSlider());
  return iconList;
};
