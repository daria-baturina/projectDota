import styles from './Teams.module.scss';
import {useSelector} from "react-redux";
import notFound from "./notFound.png";
import clsx from "clsx";

const Teams = ({matches, className}) => {

  const { teamsData }  = useSelector((state) => state.teams);

  const results = matches.map(item => {
    return item.radiant_win ? item.radiant_team_id : item.dire_team_id
  });

  const firstTeam = matches[0].radiant_team_id;
  const secondTeam = matches[0].dire_team_id;

  const firstTeamData = teamsData.find(item => item.team_id === firstTeam) || null;
  const secondTeamData = teamsData.find(item => item.team_id === secondTeam) || null;

  const firstTeamName = firstTeamData?.name || "Unknown";
  const secondTeamName = secondTeamData?.name || "Unknown";

  const firstTeamPicUrl = firstTeamData?.logo_url || notFound;
  const secondTeamPicUrl = secondTeamData?.logo_url || notFound;

  const firstTeamResult = results.filter(item => item === firstTeam).length
  const secondTeamResult = results.filter(item => item === secondTeam).length

  return (
    <div className={clsx(styles.teamsWrapper, className)}>
      <div className={styles.teamWrapper}>
        <div className={styles.wrapper}>
          <div className={styles.imgSize}><img src={firstTeamPicUrl} className={styles.teamPic}/></div>
          <span className={styles.span}>{firstTeamName}</span>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.imgSize}><img src={secondTeamPicUrl} className={styles.teamPic}/></div>
          <span className={styles.span}>{secondTeamName}</span>
        </div>
      </div>
    </div>
  );
};

export default Teams;