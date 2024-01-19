import { DateCalendar } from "@mui/x-date-pickers";
import './datePicker.css'

export const DatePickerForm = ( {date, setDate, handleDateChange} ) => {
    return (
        <DateCalendar 
            label="Choose date"
            sx={{ width: 450 }}
            size={'small'}
            defaultValue={date || null}
            disablePast={true}
            value={date || null}
            onChange={handleDateChange}
        />
    )
}