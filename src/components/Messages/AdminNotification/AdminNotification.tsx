import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import classes from "./AdminNotification.module.scss";
import Image from "next/image";
import AdminViewDetails from "./AdminViewDetails";

interface AdminNotificationProps {
  postId: string;
  status: boolean;
  reason: string;
  name: string | null | undefined;
  comment: string | undefined;
}

const AdminNotification: React.FC<AdminNotificationProps> = (props) => {
  const [viewDetailsIsActive, setViewDetailsIsActive] = useState(false);
  const status = props.status ? "Flagged" : "Passed";
  const reasonTrim = props.reason.toString();

  return (
    <li className={classes.listItem}>
      <div className={classes.blur}></div>
      <div className={classes.notificationBody}>
        <div className={classes.content}>
          <p className={classes.item}>
            Post ID: <span className={classes.itemDetails}>{props.postId}</span>
          </p>
          <p className={classes.item}>
            Status: <span className={classes.itemDetails}>{status}</span>
          </p>
          {props.status && props.reason && (
            <p className={classes.item}>
              Reason: <span className={classes.itemDetails}>{reasonTrim}</span>
            </p>
          )}
          <AdminViewDetails
            name={props.name}
            comment={props.comment}
            status={props.status}
            IsActive={viewDetailsIsActive}
            setViewDetailsIsActive={setViewDetailsIsActive}
          />
          {/* {viewDetailsIsActive && props.name && <p className={classes.userName}>{props.name}</p>}
          {viewDetailsIsActive && props.comment && (
            <p className={classes.item}>
              <span className={classes.itemDetails}>{props.comment}</span>
            </p>
          )}

          {props.status && !viewDetailsIsActive && (
            <div className={classes.btnPostion}>
              <Button
                onClick={() => setViewDetailsIsActive((prevState) => !prevState)}
                style={{ fontSize: "15px" }}
                type={"button"}
              >
                View Details
              </Button>
            </div>
          )}
          {props.status && viewDetailsIsActive && (
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
          )} */}
        </div>
        {!props.status && (
          <div className={classes.rightColum}>
            <p className={classes.statusdetails}>Passed</p>
            <Image src={"/assets/icons/tickIcon.svg"} alt="TickIcon" width={23} height={23} />
          </div>
        )}
        {props.status && viewDetailsIsActive && (
          <div className={classes.rightColum}>
            <Image
              onClick={() => setViewDetailsIsActive((prevState) => !prevState)}
              src={"/assets/icons/crossRightBlue.svg"}
              alt={"Icon"}
              width={23}
              height={23}
            />
          </div>
        )}
      </div>
    </li>
  );
};

export default AdminNotification;
