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
    content: "구독123123",
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

const Aside = () => {
  return (
    <aside className="aside">
      {iconData.map((icon) => (
        <AsideIcon content={icon.content} resource={icon.resource} />
      ))}
    </aside>
  );
};
