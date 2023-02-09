import React, { Fragment } from "react";
import UserComment from "../Messages/UserMessage/UserComment";
import classes from "./TrialComments.module.scss";

const FAKE_DATA = [
  {
    id: "1",
    profilePicture: "#aa9cff, #aa9cff, #70a5ff, #37d2f3, #37d2f3",
    comment:
      "I don’t like the way how people are always stealing my toes, I will kill all rabbit’s. Your gonna need a lawyer. Cause I will be seeing you in court.",
    userName: "Taj Longhurst",
  },
  {
    id: "2",
    profilePicture: "#ff15cc, #ff4750ce, #ffcb57",
    comment: "I like plants, They bring grow and spiritual being to this world. GO PLANTS !!!!",
    userName: "Max Silver",
  },
  {
    id: "3",
    profilePicture: "#ff15cc, #ff4750ce, #ffcb57",
    comment: "I like plants, They bring grow and spiritual being to this world. GO PLANTS !!!!",
    userName: "Max Silver",
  },
];

const TrialComments = () => {
  return (
    <Fragment>
      <ul className={classes.commentList}>
        {FAKE_DATA.map((comment) => {
          return (
            <UserComment
              key={comment.id}
              profilePicture={comment.profilePicture}
              comment={comment.comment}
              userName={comment.userName}
            />
          );
        })}
      </ul>
      <div className={classes.bottomFade}></div>
    </Fragment>
  );
};

export default TrialComments;
