import { makeAsideIcon } from "../aside_icon/aside_icon.js";
import { asideResizeEvent } from "../../component/resizeEvent/resizeEvent.js";
const iconData = [
  {
    content: "홈",
    resource: `./image/aside/home.svg`,
  },
  {
    content: "숏츠",
    resource: "./image/aside/shorts.svg",
  },
  {
    content: "구독123123",
    resource: "./image/aside/subscribe.svg",
  },
  {
    content: "유튜브 뮤직",
    resource: "./image/aside/youtube_music.svg",
  },
  { content: "나", resource: "./image/aside/user.svg" },
  {
    content: "오프라인 저장",
    resource: "./image/aside/download.svg",
  },
];

export const makeAside = () => {
  const aside = makeTag({ tagName: "aside", tagClass: "aside" });
  iconData.forEach((icon) => {
    aside.appendChild(makeAsideIcon({ ...icon }));
  });
  asideResizeEvent(aside);
  window.addEventListener("resize", () => asideResizeEvent(aside));
  return aside;
};
