const HeaderIcon = ({ resource }) => {
  return (
    <div className="header_icon_container">
      <div className="header_icon_box">
        <div
          className="header_icon svg"
          style={{ backgroundImage: `url(${resource})` }}
        />
      </div>
    </div>
  );
};
