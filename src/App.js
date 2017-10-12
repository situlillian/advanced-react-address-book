import React from "react";
import UserDetail from "./components/UserDetail";
import ListOfUsers from "./components/ListOfUsers";
import logo from "./logo.svg";
import "./App.css";

function App(props) {

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <div>
        <h3>Address Book</h3>
        <ListOfUsers users={props.users} />
      </div>
    </div>
  );
}

export default App;
