import {useSelector} from "react-redux";
import MatchWinner from "./MatchWinner/MatchWinner";
import styles from './MatchHeader.module.scss';
import DurationMatch from "./DurationMatch/DurationMatch";
import Team from "./Team/Team";
import Score from "./Score/Score";

const MatchHeader = ({matchInfo, teamsData}) => {

  const {dire_team_id, radiant_team_id, dire_score, radiant_score, radiant_win, duration} = matchInfo;

  const direTeam = teamsData?.find(item => item.team_id === dire_team_id) || null;
  const radiantTeam = teamsData?.find(item => item.team_id === radiant_team_id) || null;
  const winnerTeam = radiant_win ? radiantTeam : direTeam;

  return (
    <div className={styles.headerWrapper}>
      <MatchWinner winner={winnerTeam}/>
      <div className={styles.scoreWrapper}>
        <Team teamData={direTeam}/>
        <Score className={styles.direScore} score={dire_score}/>
        <DurationMatch time={duration}/>
        <Score className={styles.radiantScore} score={radiant_score}/>
        <Team teamData={radiantTeam}/>
      </div>
    </div>
  );
};

export default MatchHeader;