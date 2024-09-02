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
    arraySrc,
  } = props.iconData;

  const commentList = props.comment;
  console.log(commentList);

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
          <div className="shorts_icon_border" onClick={commentClickEvent}>
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
      <div className="shorts_comment_frame" onClick={commentBackClickEvent}>
        <article className="shorts_content">
          <nav className="shorts_comment_nav">
            <div className="shorts_comment_icon_box">
              <p className="shorts_comment_bold">댓글</p>
              <p className="shorts_comment">{`${setNumber(comment)}개`}</p>
            </div>
            <div className="shorts_comment_icon_box">
              <img className="shorts_comment_icon " src={arraySrc} />
              <p className="shorts_comment_exit">X</p>
            </div>
          </nav>
          <div className="shorts_comment_box">
            {commentList.map((comment) => (
              <Comment {...comment} />
            ))}
          </div>

          <div className="shorts_input_box">
            <CommentInput userImg={userImg} colorDark={true} />
          </div>
        </article>
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
const commentClickEvent = (event) => {
  event.stopPropagation(); // 부모 요소의 클릭 이벤트를 막습니다.
  const commentElement = event.target
    .closest(".shorts_group")
    .querySelector(".shorts_comment_frame");
  if (commentElement) {
    commentElement.querySelectorAll(".svg").forEach((ele) => {
      ele.classList.remove("dark");
      ele.classList.add("dark_svg");
    });
    commentElement.style.display = "flex"; // 댓글 요소를 표시합니다.
  }
  document.body.classList.add("no-scroll");
};

const commentBackClickEvent = (event) => {
  event.stopPropagation();
  const commentFrame = event.target.closest(".shorts_comment_frame");
  console.log(commentFrame);
  if (event.target !== commentFrame) {
    return;
  }
  commentFrame.style.display = "none";
  document.body.classList.remove("no-scroll");
};
