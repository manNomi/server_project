const HeaderIconList = ({ iconObj }) => {
  const { camera, alert } = iconObj;
  return (
    <nav className="header_icon_list">
      <HeaderIcon resource={camera.resource} />
      <HeaderIcon resource={alert.resource} />
      <Slider />
    </nav>
  );
};
