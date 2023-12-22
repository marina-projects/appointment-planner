import React from "react";
import '../tile/tile.css';

export const Tile = ({name, phone, email}) => {
  return (
    <div className="tile-container">
      <h3>Contact card</h3>
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>     
    </div>
  );
};
