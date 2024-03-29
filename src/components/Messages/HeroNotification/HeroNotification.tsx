import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./HeroNotification.module.scss";
import Image from "next/image";

interface HeroNotificationProps {
  postID: string;
  status: boolean;
  reason: string | undefined;
  key: string;
}

const HeroNotification: React.FC<HeroNotificationProps> = (props) => {
  const status = props.status ? "Flagged" : "Passed";

  return (
    <li className={classes.listItem}>
      <div className={classes.blur}></div>
      <div className={classes.notificationBody}>
        <div className={classes.content}>
          <p className={classes.item}>
            Post ID: <span className={classes.itemDetails}>{props.postID}</span>
          </p>
          <p className={classes.item}>
            Status: <span className={classes.itemDetails}>{status}</span>
          </p>
          {props.reason && (
            <p className={classes.item}>
              Reason: <span className={classes.itemDetails}>{props.reason}</span>
            </p>
          )}
          {props.status && (
            <div className={classes.btnPostion}>
              <Button style={{ fontSize: "15px", cursor: "auto" }} type={"button"}>
                View Details
              </Button>
            </div>
          )}
        </div>
        {!props.status && (
          <div className={classes.rightColum}>
            <p className={classes.statusdetails}>Passed</p>
            <Image src={"/assets/icons/tickIcon.svg"} alt="TickIcon" width={23} height={23} />
          </div>
        )}
      </div>
    </li>
  );
};

export default HeroNotification;
