const Detail = () => {
  const detailList = getDetailData();
  return (
    <main className="detail_frame">
      {detailList.map((detailData) => (
        <DetailVideo detailData={detailData} IconData={DetailIconData} />
      ))}
    </main>
  );
};

const getDetailData = () => {
  const thumb_index = 1; // 생성할 데이터 개수
  const detail = {
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 돌아가고 싶은 그때 그 시절 2010년 감성힙합 I 다이나믹듀오, 프라이머리, 긱스, 개리, 빈지노",
    thumbImg: "./image/detail/play_img.png",
    userImg: "./image/main/user_img.jpg",
    userName: "올끌 (All of MBClassic)",
    like: 441231,
    dislike: 124,
    comment: 123,
    view: 123123123,
    date: 1233,
    subscriber: 12312313,
    content: `▷치지직 생방송 - https://naver.me/IFIAjKrC
      ▶MONSRAT굿즈 - https://www.charonstore.com/
      ▷괴물쥐 공식 카페 - https://cafe.naver.com/tmxk9999`,
  };

  const detailList = [];
  for (let i = 0; i < thumb_index; i++) {
    detailList.push({ ...detail });
  }

  return detailList;
};

// 아이콘 데이터
const DetailIconData = {
  likeSrc: "./image/detail/like.svg",
  dislikeSrc: "./image/detail/dislike.svg",
  shareSrc: "./image/detail/share.svg",
  settingSrc: "./image/detail/setting.svg",
  alertSrc: "./image/detail/alert.svg",
  arrowSrc: "./image/detail/arrow.svg",
  arraySrc: "./image/detail/array.sng",
};
