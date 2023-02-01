import React from "react";
import UserComment from "../Messages/UserMessage/UserComment";
import classes from "./TrialComments.module.scss";

const FAKE_DATA = [
  {
    id: "1",
    profilePicture: "#000000",
    comment:
      "I don’t like the way how people are always stealing my toes, I will kill all rabbit’s. Your gonna need a lawyer. Cause I will be seeing you in court.",
    userName: "Taj Longhurst",
  },
  {
    id: "2",
    profilePicture: "#010101",
    comment: "I like plants, They bring grow and spiritual being to this world. GO PLANTS !!!!",
    userName: "Max Silver",
  },
  {
    id: "3",
    profilePicture: "#010101",
    comment: "I like plants, They bring grow and spiritual being to this world. GO PLANTS !!!!",
    userName: "Max Silver",
  },
];

const TrialComments = () => {
  return (
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
  );
};

export default TrialComments;
