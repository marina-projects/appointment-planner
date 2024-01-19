import React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../timePicker/timePicker.css';

export const ColorToggleButton = ( {time, setTime, handleTimeChange} ) => {
    const [alignment, setAlignment] = React.useState({time});
  
    const handleChange = (e, newAlignment) => {
      setAlignment(newAlignment);
      handleTimeChange(e);
    };
  
    return (
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Choose time"
      >
        <ToggleButton value="10:00">10:00</ToggleButton>
        <ToggleButton value="11:00">11:00</ToggleButton>
        <ToggleButton value="12:00">12:00</ToggleButton>
        <ToggleButton value="13:00">13:00</ToggleButton>
        <ToggleButton value="14:00">14:00</ToggleButton>
        <ToggleButton value="15:00">15:00</ToggleButton>
        <ToggleButton value="16:00">16:00</ToggleButton>
        <ToggleButton value="17:00">17:00</ToggleButton>
        <ToggleButton value="18:00">18:00</ToggleButton>
        <ToggleButton value="19:00">19:00</ToggleButton>
        <ToggleButton value="20:00">20:00</ToggleButton>
        <ToggleButton value="21:00">21:00</ToggleButton>
      </ToggleButtonGroup>
    );
  }