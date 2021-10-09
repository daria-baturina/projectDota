import styles from './SeriesHeader.module.scss';

const SeriesHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.seriesWrapper}>
        <div className={styles.series}>Series</div>
        <div className={styles.date}>Date</div>
      </div>
      <div className={styles.seriesType}>Series type</div>
      <div className={styles.duration}>Duration</div>
      <div className={styles.winner}>Winner</div>
      <div className={styles.teams}>Teams</div>
      <div className={styles.matches}>Matches</div>
    </div>
  );
};

export default SeriesHeader;