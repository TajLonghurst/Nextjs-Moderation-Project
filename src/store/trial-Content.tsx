import React, { createContext, useState } from "react";

const TrialContentContext = createContext({
  deleteAdminNotif: (adminNotifId: string) => {},
  adminNotifList: [],
  addData: (data: any) => {},
});

export const TrialContentContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [adminNotifList, setAdminNotifList] = useState([]);

  const addData = (data: any) => {
    setAdminNotifList(data);
  };

  const deleteNotif = (adminNotifId: string) => {
    const newCommentArry = adminNotifList.filter((comment: any) => comment.id !== adminNotifId);
    setAdminNotifList(newCommentArry);
  };

  const context = {
    addData: addData,
    deleteAdminNotif: deleteNotif,
    adminNotifList: adminNotifList,
  };
  return (
    <TrialContentContext.Provider value={context}>{props.children}</TrialContentContext.Provider>
  );
};

export default TrialContentContext;
