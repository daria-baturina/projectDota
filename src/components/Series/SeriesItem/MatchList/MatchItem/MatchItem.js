import {Button, Fab, Tooltip} from "@mui/material";
import {useHistory} from "react-router-dom";
import styles from './MatchItem.module.scss';


const MatchItem = ({match, index} ) => {
  const matchId = match.match_id;
  const history = useHistory();

  const handleOnClick = () => {
    history.push(`/series/${matchId}`);
  }

  return (
    <Tooltip title={matchId}>
      <div className={styles.item}>
        <Fab size="small" color="secondary" onClick={handleOnClick} >
          {index + 1}
        </Fab>
      </div>
    </Tooltip>
  );
}

export default MatchItem;