import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";
import classes from "./AdminViewDetail.module.scss";

interface AdminViewDetailsProps {
  name: string | null | undefined;
  comment: string | undefined;
  status: boolean;
  IsActive: boolean;
  setViewDetailsIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminViewDetails: React.FC<AdminViewDetailsProps> = (props) => {
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
          </Button>
        </div>
      )}
      {props.status && props.IsActive && (
        <div className={classes.btnPostionChooses}>
          <div className={classes.btn}>
            <Button style={{ fontSize: "15px" }} type={"button"} icon={"tick"}>
              Pass
            </Button>
          </div>
          <div className={classes.btn}>
            <Button style={{ fontSize: "15px" }} type={"button"} icon={"cross"}>
              Remove
            </Button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AdminViewDetails;
