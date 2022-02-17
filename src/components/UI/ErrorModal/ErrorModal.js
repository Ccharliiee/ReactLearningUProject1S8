import React from "react";

import Classes from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={Classes.backdrop} onClick={props.onReturn2Input} />;
};

const OverLay = (props) => {
  return (
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
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onReturn2Input={props.onReturn2Input} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <OverLay
          errortitle={props.errortitle}
          errorMessage={props.errorMessage}
          onReturn2Input={props.onReturn2Input}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
