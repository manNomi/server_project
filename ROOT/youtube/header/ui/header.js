import { makeHeaderLogoBox } from "../header_logo/header_logo.js";
import { makeSearchContainer } from "../search_container/search_container.js";
import { makeIconList } from "../header_icon_list/header_icon_list.js";

const iconData = {
  setting: {
    resource: "./image/header/setting.svg",
  },
  alert: {
    resource: "./image/header/alert.svg",
  },
  camera: {
    resource: "./image/header/camera.svg",
  },
  mic: {
    resource: "./image/header/mic.svg",
  },
  search: { resource: "./image/header/search.svg" },
  logo: { resource: "./image/header/logo.svg" },
};

export const makeHeader = () => {
  const header = makeTag({ tagName: "header", tagClass: "header" });
  header.classList.add("white");

  header.appendChild(makeHeaderLogoBox({ ...iconData }));
  header.appendChild(makeSearchContainer({ ...iconData }));
  header.appendChild(makeIconList({ ...iconData }));

  return header;
};
