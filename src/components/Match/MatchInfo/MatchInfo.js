import TeamMatchTable from "./TeamMatchTable/TeamMatchTable";
import styles from './MatchInfo.module.scss';

const MatchInfo = ({matchInfo, teamsData}) => {

  const {dire_team_id, radiant_team_id, radiant_win} = matchInfo;

  const radiantTeam = teamsData.find(item => item.team_id === radiant_team_id) || null;
  const direTeam = teamsData.find(item => item.team_id === dire_team_id) || null;

  const radiant_players = matchInfo.players.filter(item => item.isRadiant === true);
  const dire_players = matchInfo.players.filter(item => item.isRadiant === false);

  return (
    <div>
      <div className={styles.teamWrapper}>
        <div className={styles.teamRadiant}>Radiant - {radiantTeam?.name || 'Unknown'}</div>
        {radiant_win &&
        <div className={styles.winner}>
          Winner
        </div>}
      </div>
      <TeamMatchTable players={radiant_players}/>
      <div className={styles.teamWrapper}>
        <div className={styles.teamDire}>Dire - {direTeam?.name || 'Unknown'}</div>
        {radiant_win ||
        <div className={styles.winner}>
          Winner
        </div>}
      </div>
      <TeamMatchTable players={dire_players}/>
    </div>
  );
};

export default MatchInfo;