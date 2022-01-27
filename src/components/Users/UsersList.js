import React from "react";

import Classes from "./UsersList.module.css";
import Card from "../UI/Card/Card";

const UsersList = (props) => {
  return (
    <Card>
      <ul className={Classes.users}>
        <h3>Username &emsp; Level</h3>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username}
            &emsp;
            {user.level}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
