import { DatePicker } from "@mui/x-date-pickers";
import '../DatePicker/datePicker.css'

export const DatePickerForm = ( {date, setDate} ) => {
    return (
        <DatePicker 
            label="Choose date"
            sx={{ width: 450 }}
            size={'small'}
            defaultValue={'Choose date'}
            disablePast={true}
            value={date}
            onChange={(e) => setDate(e.target.value)}
        />
    )
}