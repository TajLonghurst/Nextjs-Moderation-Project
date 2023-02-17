import React from "react";
import AdminNotification from "../Messages/AdminNotification/AdminNotification";
import classes from "./TrialAdminComments.module.scss";
import { User } from "@prisma/client";

// const FAKE_DATA = [
//   {
//     id: "c1",
//     postId: "A9B-JHD2-533",
//     status: true,
//     reason: "Hate Speech",
//     comment:
//       "I don’t like the way how people are always stealing my toes, I will kill all rabbit’s. Your gonna need a lawyer. Cause I will be seeing you in court.",
//     userName: "Taj Longhurst",
//   },
//   {
//     id: "c2",
//     postId: "CCA-JD52-534",
//     status: false,
//     reason: undefined,
//     comment: "I like plants, They bring grow and spiritual being to this world. GO PLANTS !!!!",
//     userName: "Max Silver",
//   },
//   {
//     id: "c3",
//     postId: "BVT-JDET-535",
//     status: true,
//     reason: "Violence",
//     comment: "I like plants, They bring grow and spiritual being to this world. GO PLANTS !!!!",
//     userName: "Max Silver",
//   },
// ];

interface TrialAdminCommentsProps {
  adminData:
    | {
        id: string;
        status: boolean;
        Comment: { id: string; comment: string; User: { name: string | null } | null } | null;
        createdAt: Date;
        reason: string[];
      }[]
    | undefined;

  isLoading: boolean;
  isSuccess: boolean;
  refreshApi: () => void;
}

const TrialAdminComments: React.FC<TrialAdminCommentsProps> = (props) => {
  const adminNotifList = props.adminData?.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );

  return (
    <ul className={classes.list}>
      {adminNotifList?.map((item) => {
        return (
          <AdminNotification
            key={item.id}
            adminNotifId={item.id}
            postId={item.Comment?.id}
            status={item.status}
            reason={item.reason}
            name={item.Comment?.User?.name}
            comment={item.Comment?.comment}
            refreshApi={props.refreshApi}
          />
        );
      })}
    </ul>
  );
};

export default TrialAdminComments;
