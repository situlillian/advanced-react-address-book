import React from "react";

export default function UserDetail(props) {

  return (
    <div>
      <img src={props.users.avatar} />
      <h2>Name: {props.users.first_name} {props.users.last_name}</h2>
      <p>Address: {props.users.address}</p>
      <p>Phone: {props.users.phone}</p>
      <p>Occupation: {props.users.occupation}</p>
    </div>
  );
}
