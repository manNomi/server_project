const makeSlider = () => {
  const slider = makeTag({ tagName: "input" });
  slider.role = "switch";
  slider.type = "checkbox";
  slider.addEventListener("change", setDark);
  return slider;
};
