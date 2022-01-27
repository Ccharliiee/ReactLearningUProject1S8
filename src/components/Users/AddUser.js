import React, { useState } from "react";

import addUserClasses from "./AddUser.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsernam] = useState("");
  const [enteredLevel, setEnteredLevel] = useState("0");
  const [errorInfo, setErrorInfo] = useState();

  const usernameInputChangeHandler = (event) => {
    setEnteredUsernam(event.target.value);
  };

  const levelInputChangeHandler = (event) => {
    setEnteredLevel(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
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
    setEnteredUsernam("");
    setEnteredLevel("0");
  };

  const errorHandler = () => {
    setErrorInfo(null);
  };

  return (
    <div>
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
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameInputChangeHandler}
          />
          <label htmlFor="level">Level</label>
          <input
            id="level"
            type="number"
            value={enteredLevel}
            onChange={levelInputChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
