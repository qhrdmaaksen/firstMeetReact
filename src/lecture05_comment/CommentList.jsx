import React from "react";
import Comment from "./Comment";

const CommentList = (props) => {
  const comments = [
    { name: "김철수", comment: "안녕하세요" },
    { name: "박영희", comment: "반갑습니다" },
    { name: "이영수", comment: "반가워요" },
  ];

  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
    </div>
  );
};
export default CommentList;
