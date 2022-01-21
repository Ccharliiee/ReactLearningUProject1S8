import React from "react";

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
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="level">Level</label>
      <input id="level" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
