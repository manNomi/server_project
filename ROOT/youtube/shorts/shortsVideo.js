const ShortsVideo = (props) => {
  const { title, thumbImg, userImg, userName, like, dislike, comment } =
    props.shortsData;
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
  props.shortsData;
  return (
    <article className="shorts_group">
      <div className="shorts_video">
        <img className="shorts_img" src={thumbImg} />
        <div className="shorts_video_icon_list">
          <img className="shorts_video_icon" src={playSrc}></img>
          <img className="shorts_video_icon" src={soundSrc}></img>
        </div>
        <div className="shorts_title">
          <div className="shorts_user">
            <img className="shorts_user_img" src={userImg} />
            <p className="shorts_text">{"@" + userName}</p>
            <div className="shorts_subscribe_icon">구독</div>
          </div>
          <div className="shorts_text">{title}</div>
        </div>
      </div>
      <div className="shorts_icon_container">
        <div className="shorts_icon_box">
          <div className="shorts_icon_border">
            <img className="shorts_icon svg" src={likeSrc} />
          </div>
          <p className="shorts_text_icon_list">{setNumber(like)}</p>
        </div>
        <div className="shorts_icon_box">
          <div className="shorts_icon_border">
            <img className="shorts_icon svg" src={dislikeSrc} />
          </div>
        </div>
        <div className="shorts_icon_box">
          <div className="shorts_icon_border">
            <div
              className="shorts_icon svg"
              style={{ backgroundImage: `url(${commentSrc})` }}
            />
          </div>
          <p className="shorts_text_icon_list">{setNumber(comment)}</p>
        </div>
        <div className="shorts_icon_box">
          <div className="shorts_icon_border">
            <img className="shorts_icon svg" src={shareSrc} />
          </div>
          <p className="shorts_text_icon_list">공유</p>
        </div>
        <div className="shorts_icon_box">
          <div className="shorts_icon_border">
            <img className="shorts_icon svg" src={settingSrc} />
          </div>
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
