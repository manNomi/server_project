import { makeHeaderIcon } from "../header_icon/header_icon.js";

export const makeHeaderLogoBox = (imgOBJ) => {
  const { setting, logo } = imgOBJ;
  // 로고 영역
  const searchLogo = makeTag({ tagName: "div", tagClass: "header_logo_box" });
  const newLogo = makeTag({ tagName: "div", tagClass: "header_logo_img" });
  newLogo.style.backgroundImage = `url(${logo.resource})`;
  const newSettingBtn = makeHeaderIcon(setting.resource);
  searchLogo.appendChild(newSettingBtn);
  searchLogo.appendChild(newLogo);
  return searchLogo;
};
