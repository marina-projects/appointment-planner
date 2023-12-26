import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({array}) => {
  return (
    <div className="div-column">
      
      {array.map((arrayItem) => {
        return (
          <Tile 
            name={arrayItem.name}
            email={arrayItem.email}
            phone={arrayItem.phone}
          />       
        )
      })}
    </div>
  );
};
