import styles from './Wrapper.module.scss'
import logo from "./logo (1).png";

const Wrapper = ({children}) => {
  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <img src={logo} alt='logo' className={styles.logo}/>
      </div>
      {children}
    </div>
  );
}

export default Wrapper;