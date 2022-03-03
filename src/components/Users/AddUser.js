import React, { useState, useRef } from "react";

import addUserClasses from "./AddUser.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [errorInfo, setErrorInfo] = useState();
  const enteredUsernameRef = useRef();
  const enteredLevelRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = enteredUsernameRef.current.value;
    const enteredLevel = enteredLevelRef.current.value;
    if (
      enteredUsername.trim().length === 0 ||
      enteredLevel.trim().length === 0
    ) {
      setErrorInfo({
        errortitle: "Incomplete Input",
        errorMessage: "All fields are mandatory",
      });
      return;
    }
    if (+enteredLevel < 0) {
      setErrorInfo({
        errortitle: "Invalid Level",
        errorMessage: "Level must be no less than 0",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredLevel);
  };

  const errorHandler = () => {
    setErrorInfo(null);
  };

  return (
    <>
      {errorInfo && (
        <ErrorModal
          errortitle={errorInfo.errortitle}
          errorMessage={errorInfo.errorMessage}
          onReturn2Input={errorHandler}
        />
      )}
      <Card className={addUserClasses.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={enteredUsernameRef} />
          <label htmlFor="level">Level</label>
          <input id="level" type="number" ref={enteredLevelRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
