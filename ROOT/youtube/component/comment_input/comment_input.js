const CommentInput = (props) => {
  return (
    <div className="comment_wirte">
      <img className="user_img" src={props.userImg} />
      <input
        type="text"
        placeholder="댓글 추가 ..."
        className="comment_write_input"></input>
    </div>
  );
};
