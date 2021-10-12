import {Fab, Tooltip, useMediaQuery} from "@mui/material";
import {useHistory} from "react-router-dom";
import styles from './MatchItem.module.scss';


const MatchItem = ({match, index} ) => {
  const matchId = match.match_id;
  const history = useHistory();

  const handleOnClick = () => {
    history.push(`/DotaProject/series/${matchId}`);
  }
  const view = useMediaQuery('(max-width: 425px)');

  return (
    <Tooltip title={matchId}>
      <div className={styles.item}>
        <Fab sx={{ height: view === false ? 40 : 14, width: view === false ? 40 : 36}}
             color="secondary"
             onClick={handleOnClick} >
          {index + 1}
        </Fab>
      </div>
    </Tooltip>
  );
}

export default MatchItem;