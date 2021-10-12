import styles from './Pickers.module.scss'
import TeamPicker from "./TeamPicker/TeamPicker";
import DatePickerSeries from "./DatePicker/DatePicker";

const Pickers = () => {
  return (
    <div className={styles.wrapper}>
      <TeamPicker/>
      <DatePickerSeries/>
    </div>
  )
}

export default Pickers;