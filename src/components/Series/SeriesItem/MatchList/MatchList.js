import MatchItem from "./MatchItem/MatchItem";
import styles from './MatchList.module.scss';
import clsx from "clsx";

const MatchList = ({matches, className}) => {

  const sortMatches = matches.sort((a,b) => a.start_time*1000 - b.start_time*1000);
  const matchList = sortMatches.map((item, index) => {
    return (
    <MatchItem match={item} index={index} />
    )
  });

  return (
    <div className={clsx(styles.matchList, className)}>
      {matchList}
    </div>
  );
};

export default MatchList;