const HeaderLogoBox = ({ iconObj }) => {
  console.log("iconObj:", iconObj);
  const { setting, logo } = iconObj;

  return (
    <div className="header_logo_box">
      <HeaderIcon resource={setting.resource} />
      <div
        className="header_logo_img"
        style={{ backgroundImage: `url(${logo.resource})` }}
      />
    </div>
  );
};
