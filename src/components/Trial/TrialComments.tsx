import React, { Fragment } from "react";
import UserComment from "../Messages/UserMessage/UserComment";
import classes from "./TrialComments.module.scss";
import { User } from "@prisma/client";

interface commentsData {
  comment: string;
  User: User | null;
  id: string;
  createdAt: Date;
}

interface TrialCommentsProps {
  commentsData: commentsData[] | undefined;
  isLoading: boolean;
  isSuccess: boolean;
}

const TrialComments: React.FC<TrialCommentsProps> = (props) => {
  const commentList = props.commentsData?.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );

  return (
    <Fragment>
      {props.isLoading && <p>Loading Comments</p>}
      <ul className={classes.commentList}>
        {props.isSuccess &&
          commentList?.map((comment) => {
            return (
              <UserComment
                key={comment.id}
                comment={comment.comment}
                name={comment.User?.name}
                // profilePicture={comment.profilePicture}
              />
            );
          })}
      </ul>
      <div className={classes.bottomFade}></div>
    </Fragment>
  );
};

export default TrialComments;
