export const makeVideo = (VideoData) => {
  const { title, thumbImg, userImg, userName, thumbView, thumbDate } =
    VideoData;

  // 비디오 카드 생성
  var newVideoGroup = makeTag({ tagName: "article", tagClass: "video_group" });

  // 비디오 이미지 생성 및 추가
  const newVideoImg = makeTag({ tagName: "img", tagClass: "video_img" });
  newVideoImg.src = thumbImg;

  // 비디오 텍스트 추가
  var videoText = makeTag({ tagName: "div", tagClass: "video_title" });

  var newThumb = makeTag({ tagName: "div" });

  var userImgTag = makeTag({ tagName: "img", tagClass: "video_user_img" });
  userImgTag.src = userImg;
  videoText.appendChild(userImgTag);

  var titleTag = makeTag({ tagName: "p", tagClass: "video_text" });
  titleTag.innerHTML = title;
  newThumb.appendChild(titleTag);

  var userNameTag = makeTag({ tagName: "p", tagClass: "video_text_name" });
  userNameTag.innerHTML = userName;
  newThumb.appendChild(userNameTag);

  var smallTextBox = makeTag({
    tagName: "div",
    tagClass: "video_text_small_box",
  });
  newThumb.appendChild(smallTextBox);

  var thumbViewTag = makeTag({ tagNameL: "p", tagClass: "video_text_small" });
  thumbViewTag.innerHTML = setView(thumbView);

  var pointText = makeTag({ tagName: "p", tagClass: "video_text_small" });
  pointText.innerHTML = "•";

  var thumbDateTag = makeTag({ tagName: "p", tagClass: "video_text_small" });
  thumbDateTag.innerHTML = setDate(thumbDate);

  smallTextBox.appendChild(thumbViewTag);
  smallTextBox.appendChild(pointText);
  smallTextBox.appendChild(thumbDateTag);

  videoText.appendChild(newThumb);

  newVideoGroup.appendChild(newVideoImg);
  newVideoGroup.appendChild(videoText);

  return newVideoGroup;
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

const setView = (num) => {
  if (num > 10000) {
    return `${Math.round(num / 10000)}만회`;
  } else if (num > 1000) {
    return `${Math.round(num / 1000)}천회`;
  } else {
    return `${num}회`;
  }
};
