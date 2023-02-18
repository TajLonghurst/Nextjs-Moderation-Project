import React from "react";
import Section from "../Layout/Section";
import classes from "./Trial.module.scss";
import TrialComments from "./TrialComments";
import TrialForm from "./TrialForm";
import TrialAdminComments from "./TrialAdminComments";
import { api } from "../../utils/api";

const Trial = () => {
  const {
    data: commetsData,
    isSuccess: successComment,
    isLoading: isLoadingComment,
    refetch: refetchData,
  } = api.comments.readComments.useQuery();
  const {
    data: adminNotifData,
    isSuccess: successAdminNotif,
    isLoading: isLoadingAdminNotif,
    refetch: refetchNotifData,
  } = api.adminNotif.readAdminNotif.useQuery();

  const refreshApi = () => {
    refetchData();
    refetchNotifData();
  };

  return (
    <Section>
      <div className={classes.trial}>
        <div className={classes.row}>
          <div className={classes.col_left}>
            <div className={classes.trialContent}>
              <TrialForm refreshApi={refreshApi} />
            </div>
            <TrialComments
              commentsData={commetsData}
              isLoading={isLoadingComment}
              isSuccess={successComment}
            />
          </div>
          <div className={classes.col_right}>
            <TrialAdminComments
              adminData={adminNotifData}
              isLoading={isLoadingAdminNotif}
              isSuccess={successAdminNotif}
              refreshApi={refreshApi}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Trial;

/* <H2>Give it a try</H2> */

/* <H1>Give it a try</H1> */

/* <P>
  Preview our monitorization services with the form below. When submitting a comment
  It’ll go through our <span className={classes.textHighlightTwo}>AI</span> content
  validation process. Flagging out any harmful content to then be easily picked off by
  moderators.
</P> */
