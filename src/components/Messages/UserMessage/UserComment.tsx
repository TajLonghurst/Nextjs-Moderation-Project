import React from "react";
import classes from "./UserComment.module.scss";

interface UserCommentProps {
  profilePicture: string;
  comment: string;
  userName: string;
}

const UserComment: React.FC<UserCommentProps> = (props) => {
  return (
    <li className={classes.commentItem}>
      <div className={classes.comment}>
        <div
          style={{
            backgroundImage: `linear-gradient(280deg, ${props.profilePicture})`,
          }}
          className={classes.profileImge}
        ></div>
        <div className={classes.commentContent}>
          <h3 className={classes.userName}>{props.userName}</h3>
          <p className={classes.text}>{props.comment}</p>
        </div>
      </div>
    </li>
  );
};

export default UserComment;
