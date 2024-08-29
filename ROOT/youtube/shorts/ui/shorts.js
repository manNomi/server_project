const Shorts = () => {
  const shortsList = getShortsData();
  const commentDataList = getShortsCommentData();
  return (
    <main className="shorts_frame">
      {shortsList.map((shortsData) => (
        <ShortsVideo
          shortsData={shortsData}
          IconData={IconData}
          Comment={commentDataList}
        />
      ))}
    </main>
  );
};

const getShortsData = () => {
  const thumb_index = 15;
  const Shorts = {
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 돌아가고 싶은 그때 그 시절 2010년 감성힙합 I 다이나믹듀오, 프라이머리, 긱스, 개리, 빈지노",
    thumbImg: "./image/shorts/shorts_img.jpeg",
    userImg: "./image/main/user_img.jpg",
    userName: "올끌 (All of MBClassic)",
    like: 441231,
    dislike: 124,
    comment: 123,
  };
  const shortsList = [];
  for (let i = 0; i < thumb_index; i++) {
    shortsList.push(Shorts);
  }
  return shortsList;
};

const getShortsCommentData = () => {
  const index = 15;
  const content = {
    userImg: "./image/main/user_img.jpg",
    userName: "괴루무루쥐",
    content: "내용이 이쓸까요 업쓸까요 ? ",
    like: 441231,
    dislike: 124,
    date: 123123,
  };
  const contentList = [];
  for (let i = 0; i < index; i++) {
    contentList.push(content);
  }
  return contentList;
};

const IconData = {
  likeSrc: "./image/shorts/like.svg",
  commentSrc: "./image/shorts/comment.svg",
  dislikeSrc: "./image/shorts/dislike.svg",
  shareSrc: "./image/shorts/share.svg",
  settingSrc: "./image/shorts/setting.svg",
  soundSrc: "./image/shorts/sound.svg",
  soundnoneSrc: "./image/shorts/sound_none.svg",
  playSrc: "./image/shorts/play.svg",
  arraySrc: "./image/shorts/array.svg",
};
