import React from "react";

const UserCard = ({ name, email, city }) => {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px"
    }}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>City: {city}</p>
    </div>
  );
};

export default UserCard;
