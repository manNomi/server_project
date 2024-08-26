const makeAsideIcon = (data) => {
  const iconBox = makeTag({
    tagName: "button",
    tagClass: "aside_icon",
  });
  const { content, resource } = data;
  const iconImg = makeTag({ tagName: "div", tagClass: "svg" });
  iconImg.style.backgroundImage = `url(${resource})`;
  const iconText = makeTag({ tagName: "p", tagClass: "icon_text" });
  iconBox.appendChild(iconImg);
  if (content != null) {
    iconText.innerHTML = content;
    iconBox.appendChild(iconText);
  }
  return iconBox;
};
