// src/UserForm.js
import React, { useState } from "react";

const UserForm = ({ user, onUpdateUser, handleCanceSelected }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, name, email };
    onUpdateUser(updatedUser);
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <button type="submit">Save</button>

        <button type="submit" onClick={handleCanceSelected}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UserForm;
