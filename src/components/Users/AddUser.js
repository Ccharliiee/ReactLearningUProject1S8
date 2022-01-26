import React, { useState } from "react";

import addUserClasses from "./AddUser.module.css";

import Card from "../UI/Card/Card";

import Button from "../UI/Button/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsernam] = useState("");
  const [enteredLevel, setEnteredLevel] = useState(0);

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
      console.log("Incomplete Input");
      return;
    }
    if (+enteredLevel < 1) {
      console.log("Invalid Level");
      return;
    }
    console.log(enteredUsername, enteredLevel);
    setEnteredUsernam("");
    setEnteredLevel(0);
  };

  return (
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
  );
};

export default AddUser;
