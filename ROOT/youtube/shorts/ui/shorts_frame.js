const ShortsFrame = () => {
  const shortsList = getDShortsData();
  return (
    <main className="shorts_frame">
      {shortsList.map((shortsData) => (
        <ShortsVideo {...shortsData} />
      ))}
    </main>
  );
};

const getDShortsData = () => {
  const thumb_index = 15;
  const Shorts = {
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 돌아가고 싶은 그때 그 시절 2010년 감성힙합 I 다이나믹듀오, 프라이머리, 긱스, 개리, 빈지노",
    thumbImg: "https://img.youtube.com/vi/iFs8AfODM74/mqdefault.jpg",
    userImg: "./image/main/user_img.jpg",
    userName: "올끌 (All of MBClassic)",
    like: 441231,
    dislike: 124,
  };
  const shortsList = [];
  for (let i = 0; i < thumb_index; i++) {
    shortsList.push(Shorts);
  }
  return shortsList;
};
