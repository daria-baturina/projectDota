import styles from './DurationMatch.module.scss';

const DurationMatch = ({time}) => {
  const duration = new Date (time * 1000);
  const durationTime = `${duration.getUTCHours() < 1 ? '' : duration.getUTCHours() + ':'}`+
    `${duration.getUTCMinutes() < 10 ? `0` + `${duration.getUTCMinutes()}` : duration.getUTCMinutes()}:`+
    `${duration.getUTCSeconds() < 10 ? `0` + `${duration.getUTCSeconds()}` : duration.getUTCSeconds()}`;

  return (
    <div className={styles.time}>
      {durationTime}
    </div>
  );
};

export default DurationMatch;