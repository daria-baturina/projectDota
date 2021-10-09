import {useSelector} from "react-redux";
import notFound from "../Teams/notFound.png";
import styles from './Winner.module.scss';
import clsx from "clsx";
import draw from "./hand.png";

const Winner = ({matches, className}) => {

  const { teamsData }  = useSelector((state) => state.teams);

  const results = matches.map(item => {
    return item.radiant_win ? item.radiant_team_id : item.dire_team_id
  });

  const firstTeam = matches[0].radiant_team_id;
  const secondTeam = matches[0].dire_team_id;

  const firstTeamResult = results.filter(item => item === firstTeam).length
  const secondTeamResult = results.filter(item => item === secondTeam).length

  const winner = firstTeamResult > secondTeamResult ? firstTeam
    : firstTeamResult === secondTeamResult ? null
      : firstTeamResult < secondTeamResult ? secondTeam
        : null;
  const winnerData = teamsData.find(item => item.team_id === winner) || null;
  const winnerName = winner === null ? "Draw" : winnerData?.name || "Unknown";
  const winnerPicUrl = winner === null ? draw : winnerData?.logo_url || notFound;
  const score = firstTeamResult < secondTeamResult ?
    `${secondTeamResult} : ${firstTeamResult}`
    : `${firstTeamResult} : ${secondTeamResult}`

  return (
    <div className={clsx(className, styles.winnerWrapper)}>
      <div className={styles.teamWrapper}>
        <div>
        {score}
        </div>
        <div>
        {winnerName}
        </div>
      </div>
      <div className={styles.img}>
        {winner && <img src={winnerPicUrl} className={styles.teamImg}/>}
      </div>
    </div>
  );
};

export default Winner;