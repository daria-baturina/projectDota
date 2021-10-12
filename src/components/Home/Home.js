import styles from './Home.module.scss'
import Wrapper from "../Wrapper/Wrapper";
import {useEffect} from "react";
import {CircularProgress} from "@mui/material";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {getLeagueData} from "../../store/league";
import {getTeamsData} from "../../store/teams";

const Home = () => {

  const dispatch = useDispatch();
  const history = useHistory();


  const redirectToSeries = async () => {
    await Promise.all([
      dispatch(getLeagueData()),
      dispatch(getTeamsData()),
    ]);

    history.push(`/DotaProject/series`);
  };

  useEffect(() => {
    redirectToSeries();
  }, []);

  return (
    <Wrapper>
      <div className={styles.loaderWrapper}>
        <CircularProgress className={styles.loader} color="secondary" size={80} />
      </div>
    </Wrapper>
  );
}

export default Home;