// import "date-fns"
import React, { useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers"

export default function MaterialUIPickers({ setDate, updateDate }) {
  const [selectedDate, setSelectedDate] = React.useState(new Date())
  const [formattedDate, setFormattedDate] = React.useState()

  useEffect(() => {
    if (updateDate) {
      setSelectedDate(updateDate)
    } else {
      setDate(formatDate(selectedDate))
    }
  }, [])

  const handleDateChange = (date) => {
    setSelectedDate(date)
    const newDate = formatDate(date)
    // setFormattedDate(newDate)
    console.log(newDate)
    setDate(newDate)
  }

  const formatDate = (date) => {
    let datestring = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`
    return datestring
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Date Applied"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  )
}
