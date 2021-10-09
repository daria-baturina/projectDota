import styles from './SeriesItem.module.scss';
import MatchDate from "./MatchDate/MatchDate";
import {useSelector} from "react-redux";
import SeriesType from "./SeriesType/SeriesType";
import Duration from "./Duration/Duration";
import MatchList from "./MatchList/MatchList";
import Teams from "./Teams/Teams";
import Winner from "./Winner/Winner";

const SeriesItem = ({seriesId, key}) => {

  const { data } = useSelector((state) => state.league);

  const matches = data.filter(item => item.series_id === seriesId).length === 0 ? data.filter(item => item.match_id === seriesId) : data.filter(item => item.series_id === seriesId);

  return (
    <div className={styles.seriesItemWrapper}>
      <div className={styles.idWrapper}>
        <div className={styles.id}>{seriesId}</div>
        <MatchDate matches={matches} className={styles.matchDate}/>
      </div>
      <SeriesType matches={matches} className={styles.seriesType}/>
      <Duration matches={matches} className={styles.duration}/>
      <Winner matches={matches} className={styles.winner}/>
      <Teams matches={matches} className={styles.teams}/>
      <MatchList matches={matches} className={styles.matchList}/>
    </div>
  );
};

export default SeriesItem;
