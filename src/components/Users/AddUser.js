import React from "react";

import addUserClasses from "./AddUser.module.css";

import Card from "../UI/Card/Card";

import Button from "../UI/Button/Button";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    /*         if (enteredValue.trim().length === 0) {
          setIsInputValid(false);
          return;
        }
        props.onAddGoal(enteredValue) */
  };

  return (
    <Card className={addUserClasses.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="level">Level</label>
        <input id="level" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
