import React, { useRef } from "react";
import classes from "./TrialForm.module.scss";
import Button from "../UI/Button/Button";
import { api } from "../../utils/api";

interface TrailFormProps {
  refreshApi: () => void;
}

const TrialForm: React.FC<TrailFormProps> = (props) => {
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const { isLoading, mutateAsync: mutate } = api.comments.addComment.useMutation();

  const formSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const commentInput = commentRef.current?.value;

    if (commentInput && commentInput?.trim() !== "") {
      await mutate({ comment: commentInput });
      props.refreshApi();
      commentRef.current.value = "";
    }
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <label htmlFor="message" className={classes.label}>
        Add Comment
      </label>
      <textarea ref={commentRef} id="message" title="comment" className={classes.input} />
      <div className={classes.btnPostion}>
        <Button style={{ fontSize: "20px" }} type="submit" icon={"arrow"}>
          Sumbit Comment
        </Button>
        {isLoading && <p>Loading</p>}
      </div>
    </form>
  );
};

export default TrialForm;
