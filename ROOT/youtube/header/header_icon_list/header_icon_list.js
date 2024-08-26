const makeIconList = (imgObj) => {
  const { camera, alert } = imgObj;
  const iconList = makeTag({ tagName: "div", tagClass: "header_icon_list" });
  iconList.appendChild(makeHeaderIcon(camera.resource));
  iconList.appendChild(makeHeaderIcon(alert.resource));
  iconList.appendChild(makeSlider());
  return iconList;
};
