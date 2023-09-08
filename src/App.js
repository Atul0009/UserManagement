// src/App.js
import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import UserForm from "./components/userForm";
import UserList from "./components/userList";



function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = ()=>{
    axios.get("http://localhost:6000/users").then((d) => {
      const data = d.data.results;
      setUsers(data);
    }).catch((err)=>{
      console.log(err)
    })
  }
  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };


  const handleCanceSelected = (user) => {
    setSelectedUser(null);
  };
  const handleUpdateUser = (updatedUser) => {
    const {id} = updatedUser;
      axios.put("http://localhost:6000/users/" + id,updatedUser).then((d) => { 
      getUser();
           
    }).catch((err)=>{
      console.log(err)
    })
    setSelectedUser(null);
  };

  return (
    <div className="App">
      <UserList users={users} onSelectUser={handleSelectUser} />
      {selectedUser && (
        <UserForm
          user={selectedUser}
          onUpdateUser={handleUpdateUser}
          handleCanceSelected={handleCanceSelected}
        />
      )}
    </div>
  );
}

export default App;
