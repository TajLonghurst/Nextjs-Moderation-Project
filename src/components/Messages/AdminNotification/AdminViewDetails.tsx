import React, { Fragment, useContext } from "react";
import Button from "../../UI/Button/Button";
import classes from "./AdminViewDetail.module.scss";

interface AdminViewDetailsProps {
  postId: string | undefined;
  name: string | null | undefined;
  comment: string | undefined;
  status: boolean;
  IsActive: boolean;
  setViewDetailsIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  removeComment: () => void;
  passComment: () => void;
}

const AdminViewDetails: React.FC<AdminViewDetailsProps> = (props) => {
  const removeBtnClickHandler = () => {
    props.removeComment();
    props.setViewDetailsIsActive((prevState: boolean) => !prevState);
  };

  const passBtnClickHandler = () => {
    props.passComment();
    props.setViewDetailsIsActive((prevState: boolean) => !prevState);
  };

  return (
    <Fragment>
      {props.IsActive && props.name && <p className={classes.userName}>{props.name}</p>}
      {props.IsActive && props.comment && (
        <p className={classes.item}>
          <span className={classes.itemDetails}>{props.comment}</span>
        </p>
      )}

      {props.status && !props.IsActive && (
        <div className={classes.btnPostion}>
          <Button
            onClick={() => props.setViewDetailsIsActive((prevState: boolean) => !prevState)}
            style={{ fontSize: "15px" }}
            type={"button"}
          >
            View Details
            {/* Decision required */}
          </Button>
        </div>
      )}
      {props.status && props.IsActive && (
        <div className={classes.btnPostionChooses}>
          <div className={classes.btn}>
            <Button
              onClick={passBtnClickHandler}
              style={{ fontSize: "15px" }}
              type={"button"}
              icon={"tick"}
            >
              Pass
            </Button>
          </div>
          <div className={classes.btn}>
            <Button
              onClick={removeBtnClickHandler}
              style={{ fontSize: "15px" }}
              type={"button"}
              icon={"cross"}
            >
              Remove
            </Button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AdminViewDetails;
