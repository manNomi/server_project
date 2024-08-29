const Comment = (props) => {
  const { userImg, content } = props.userData;
  const { likeSrc, disLikeSrc, settingSrc } = props.iconData;
  return (
    <div className="comment_container">
      <div className="comment_user_img_box">
        <img className="comment_user_img" src={userImg} />
      </div>
      <div className="comment_box">
        <div className="comment_user_text">
          <p className="comment_text_bold"></p>
          <p className="comment_text"></p>
        </div>
        <p className="comment_content">{content}</p>
        <div className="comment_icon_box">
          <div
            className="comment_icon svg"
            style={{ backgroundImage: `url(${likeSrc})` }}></div>
          <p className="comment_text"></p>
          <div
            className="comment_icon svg"
            style={{ backgroundImage: `url(${disLikeSrc})` }}></div>
          <div className="comment_icon_text">답글</div>
        </div>
      </div>
      <div className="comment_setting_box">
        <div
          className="comment_setting_icon svg"
          style={{ backgroundImage: `url(${settingSrc})` }}></div>
      </div>
    </div>
  );
};
