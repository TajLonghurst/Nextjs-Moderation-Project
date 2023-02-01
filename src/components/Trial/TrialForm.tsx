import React from "react";
import classes from "./TrialForm.module.scss";
import Button from "../UI/Button/Button";

const TrialForm = () => {
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <label htmlFor="message" className={classes.label}>
        Add Comment
      </label>
      <textarea id="message" title="comment" className={classes.input} />
      <div className={classes.btnPostion}>
        <Button style={{ fontSize: "20px" }} type="submit" icon={true}>
          Sumbit Comment
        </Button>
      </div>
    </form>
  );
};

export default TrialForm;
