import React from "react";

import Classes from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={Classes.backdrop} onClick={props.onReturn2Input} />
      <Card className={Classes.modal}>
        <header className={Classes.header}>
          <h2>{props.errortitle}</h2>
        </header>
        <div className={Classes.content}>
          <p>{props.errorMessage}</p>
        </div>
        <footer className={Classes.actions}>
          <Button onClick={props.onReturn2Input}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
