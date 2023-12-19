import React from "react";

export const Tile = ({name, phone, email}) => {
  return (
    <div className="tile-container">
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>     
    </div>
  );
};
