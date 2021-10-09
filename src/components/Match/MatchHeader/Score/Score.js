import clsx from "clsx";
import styles from './Score.module.scss';

const Score = ({score, className}) => {

  return (
    <div className={clsx(className, styles.score)}>
      {score}
    </div>
  );
};

export default Score;