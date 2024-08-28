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
    content: "구독",
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

const Aside = (props) => {
  const getFunc = (content) => {
    switch (content) {
      case "숏츠":
        return props.onShortsClick;
      case "홈":
        return props.onMainClick;
      default:
        return undefined;
    }
  };
  return (
    <aside className="aside">
      {iconData.map((icon) => (
        <AsideIcon
          content={icon.content}
          resource={icon.resource}
          onClick={getFunc(icon.content)}
        />
      ))}
    </aside>
  );
};
