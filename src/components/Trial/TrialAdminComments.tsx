import React from "react";
import AdminNotification from "../Messages/AdminNotification/AdminNotification";
import classes from "./TrialAdminComments.module.scss";

const FAKE_DATA = [
  {
    id: "c1",
    postId: "A9B-JHD2-533",
    status: true,
    reason: "Hate Speech",
    comment:
      "I don’t like the way how people are always stealing my toes, I will kill all rabbit’s. Your gonna need a lawyer. Cause I will be seeing you in court.",
    userName: "Taj Longhurst",
  },
  {
    id: "c2",
    postId: "CCA-JD52-534",
    status: false,
    reason: undefined,
    comment: "I like plants, They bring grow and spiritual being to this world. GO PLANTS !!!!",
    userName: "Max Silver",
  },
  {
    id: "c3",
    postId: "BVT-JDET-535",
    status: true,
    reason: "Violence",
    comment: "I like plants, They bring grow and spiritual being to this world. GO PLANTS !!!!",
    userName: "Max Silver",
  },
];

const TrialAdminComments = () => {
  return (
    <ul className={classes.list}>
      {FAKE_DATA.map((item) => {
        return (
          <AdminNotification
            key={item.id}
            postId={item.postId}
            status={item.status}
            reason={item.reason}
            userName={item.userName}
            comment={item.comment}
          />
        );
      })}
    </ul>
  );
};

export default TrialAdminComments;
