const HeaderLogoBox = (props) => {
  const { setting, logo } = props.iconObj;
  const logoClickEvent = props.clickEvent;

  return (
    <div className="header_logo_box">
      <HeaderIcon resource={setting.resource} />
      <div
        className="header_logo_img"
        onClick={logoClickEvent}
        style={{ backgroundImage: `url(${logo.resource})` }}
      />
    </div>
  );
};
