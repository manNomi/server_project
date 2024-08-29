const detailVideo = (props) => {
  const { title, thumbImg, userImg, userName, like, dislike, comment } =
    props.detailData;
  const {
    likeSrc,
    commentSrc,
    dislikeSrc,
    shareSrc,
    settingSrc,
    playSrc,
    soundSrc,
    soundnoneSrc,
  } = props.IconData;

  return (
    <article className="detail_group">
      <div className="detail_video">
        <img className="detail_img" src={thumbImg} />
        {/* <div className="detail_video_icon_list">
          <img className="detail_video_icon" src={playSrc}></img>
          <img className="detail_video_icon" src={soundSrc}></img>
        </div> */}
        <div className="detail_title">
          <div className="detail_text">{title}</div>
          <div className="detail_user">
            <img className="detail_user_img" src={userImg} />
            <div className="detail_user_text">
              <p className="detail_text">{userName}</p>
              <p className="detail_text">{`구독자 ${setNumber(userName)}명`}</p>
            </div>

            <button className="detail_subscribe_btn">
              <div
                className="detail_icon  svg"
                style={{ backgroundImage: `url(${commentSrc})` }}></div>
              <p>구독중</p>
              <div
                className="detail_icon  svg"
                style={{ backgroundImage: `url(${commentSrc})` }}></div>
            </button>

            <button className="detail_like_btn">
              <div className="detail_like">
                <div
                  className="detail_icon  svg"
                  style={{ backgroundImage: `url(${commentSrc})` }}></div>
                <p className="detail_text">{`${setNumber(userName)}천`}</p>
              </div>
              <div className="detail_dislike">
                <div
                  className="detail_icon  svg"
                  style={{ backgroundImage: `url(${commentSrc})` }}></div>
              </div>
            </button>

            <button className="detail_share_btn">
              <div
                className="detail_icon  svg"
                style={{ backgroundImage: `url(${commentSrc})` }}></div>
              <p>공유</p>
            </button>

            <button className="detail_setting_btn">
              <div
                className="detail_icon  svg"
                style={{ backgroundImage: `url(${commentSrc})` }}></div>
            </button>
          </div>
        </div>
        <div className="detail_introduce">
          {`조회수${setNumber(userName)}회 ${setDate(userName)}\n${userImg}`}
        </div>
        <div className="detail_comment_count">
          <p className="detail_comment_count_text">{`댓글 ${setNumber(
            userImg
          )}개`}</p>
          <div className="detail_comment_array">
            <div className="detail_comment_array_icon svg"></div>
            <p className="detail_comment_array_text">정렬 기준</p>
          </div>
        </div>

        <div className="detail_comment_wirte">
          <img className="detail_user_img" src={userImg} />
          <input
            type="text"
            placeholder="댓글 추가 ..."
            className="detail_comment_write_input"></input>
        </div>
      </div>
    </article>
  );
};
const setNumber = (num) => {
  if (num > 10000) {
    return `${Math.round(num / 10000)}만`;
  } else if (num > 1000) {
    return `${Math.round(num / 1000)}천`;
  } else {
    return `${num}`;
  }
};
const setDate = (num) => {
  if (num > 365) {
    return `${Math.round(num / 365)}년전`;
  } else if (num > 3) {
    return `${Math.round(num / 30)}달전`;
  } else if (num > 7) {
    return `${Math.round(num / 7)}주전`;
  } else {
    return `${num} 일전`;
  }
};
