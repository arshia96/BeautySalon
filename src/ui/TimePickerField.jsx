import DatePicker from "react-multi-date-picker"
import persian_fa from "react-date-object/locales/persian_fa"
import TimePicker from "react-multi-date-picker/plugins/time_picker"

function TimePickerField({ label, time, setTime, required }) {
  return (
    <div>
        <span className="mb-2 block text-secondary-700">{label} {required && <span className="text-error">*</span>}</span>
        <DatePicker
          disableDayPicker
          format="hh:mm A"
          plugins={[
            <TimePicker hideSeconds />
          ]} 
          containerClassName="w-full"
          inputClass="textField__input"
          calendarPosition="bottom-center"
          value={time}
          onChange={(time) => setTime(time)}
          locale={persian_fa}
        />
    </div>
  )
}

export default TimePickerField