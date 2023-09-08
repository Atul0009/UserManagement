// src/UserList.js
import React from "react";

const UserList = ({ users, onSelectUser }) => {
  return (
    <div>
      <h2 className="center">User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user?.id}>
            <button onClick={() => onSelectUser(user)}>
              {user?.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
