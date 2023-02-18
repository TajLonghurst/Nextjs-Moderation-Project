import React, { useContext, useEffect, useState } from "react";
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
  const { mutateAsync: mutateRemove } = api.adminNotif.removeAdminNotif.useMutation();
  const { mutateAsync: mutatePass } = api.adminNotif.passAdminNotif.useMutation();
  const [viewDetailsIsActive, setViewDetailsIsActive] = useState(false);

  const status = props.status ? "flagged" : "passed";
  const reasonTrim = props.reason.toString();

  const removeCommentHandler = async () => {
    try {
      await mutateRemove({ adminNotifId: props.adminNotifId, postId: props.postId });
      props.refreshApi();
    } catch (error) {
      console.log(error);
    }
  };

  const passCommentHandler = async () => {
    try {
      await mutatePass({ adminNotifId: props.adminNotifId, status: false });
      props.refreshApi();
    } catch (error) {
      console.log(error);
    }
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
            Status:
            <span className={classes.itemDetails}> {status}</span>
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
            passComment={passCommentHandler}
          />
        </div>
        {!props.status && (
          <div className={classes.rightColum}>
            <p className={classes.statusdetails}>Passed</p>
            <Image src={"/assets/icons/tickIcon.svg"} alt="TickIcon" width={23} height={23} />
          </div>
        )}
        {props.status && !viewDetailsIsActive && (
          <div className={classes.rightColum}>
            <p className={classes.statusdetailsFailed}>Flagged</p>
            <Image src={"/assets/icons/crossRightRed.svg"} alt="TickIcon" width={23} height={23} />
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
