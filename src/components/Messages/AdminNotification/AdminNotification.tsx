import React, { useContext, useState } from "react";
import classes from "./AdminNotification.module.scss";
import Image from "next/image";
import AdminViewDetails from "./AdminViewDetails";
import { api } from "../../../utils/api";

interface AdminNotificationProps {
  postId: string | undefined;
  adminNotifId: string;
  status: boolean;
  reason: string[];
  name: string | null | undefined;
  comment: string | undefined;
  refreshApi: () => void;
}

const AdminNotification: React.FC<AdminNotificationProps> = (props) => {
  const [viewDetailsIsActive, setViewDetailsIsActive] = useState(false);
  const { mutateAsync: mutate } = api.adminNotif.removeAdminNotif.useMutation();
  const status = props.status ? "Flagged" : "Passed";
  const reasonTrim = props.reason.toString();

  const removeCommentHandler = async () => {
    await mutate({ adminNotifId: props.adminNotifId, postId: props.postId })
      .then(() => {
        props.refreshApi();
      })
      .catch((error: any) => {
        error.message;
      });
  };

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
            postId={props.postId}
            comment={props.comment}
            status={props.status}
            IsActive={viewDetailsIsActive}
            setViewDetailsIsActive={setViewDetailsIsActive}
            removeComment={removeCommentHandler}
          />
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
