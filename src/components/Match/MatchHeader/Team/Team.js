import notFound from "../../../Series/SeriesItem/Teams/notFound.png";
import styles from "./Team.module.scss";

const Team = ({teamData}) => {

  const teamPicUrl = teamData?.logo_url || notFound;
  const teamName = teamData?.name || 'Unknown';

  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={teamPicUrl}/>
      <div className={styles.text}>{teamName}</div>
    </div>
  );
};

export default Team;