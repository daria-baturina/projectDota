import notFound from "../../../Series/SeriesItem/Teams/notFound.png";
import styles from './MatchWinner.module.scss';

const MatchWinner = ({winner}) => {

  const winnerPicUrl = winner?.logo_url || notFound;
  const winnerName = winner?.name || 'Unknown';

  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={winnerPicUrl}/>
      <div className={styles.text}> {winnerName} win!</div>
    </div>
  );
};

export default MatchWinner;
