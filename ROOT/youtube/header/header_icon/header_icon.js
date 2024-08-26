export const makeHeaderIcon = (src) => {
  const newContainer = makeTag({
    tagName: "div",
    tagClass: "header_icon_container",
  });
  const newBox = makeTag({
    tagName: "div",
    tagClass: "header_icon_box",
  });
  const newIcon = makeTag({ tagName: "div", tagClass: "header_icon" });
  newIcon.classList.add("svg");
  newIcon.style.backgroundImage = `url(${src})`;
  newBox.appendChild(newIcon);
  newContainer.appendChild(newBox);
  return newContainer;
};
