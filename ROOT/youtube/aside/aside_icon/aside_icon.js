const AsideIcon = (props) => {
  const { content, resource } = props;
  return (
    <button className="aside_icon">
      <div
        className="svg"
        style={{ backgroundImage: `url(${resource})` }}></div>
      {content && <p className="icon_text">{content}</p>}
    </button>
  );
};
