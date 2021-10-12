import Wrapper from "../Wrapper/Wrapper";
import {useParams} from "react-router-dom";
import {getMatchData} from "../../store/match";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import styles from "./Match.module.scss";
import {CircularProgress} from "@mui/material";
import MatchHeader from "./MatchHeader/MatchHeader";
import MatchInfo from "./MatchInfo/MatchInfo";
import {getHeroesData} from "../../store/heroes";
import {getItemsData} from "../../store/items";
import {getTeamsData} from "../../store/teams";

const Match = () => {

  const { matchInfo } = useSelector((state) => state.match);
  const { teamsData } = useSelector((state) => state.teams);
  const { heroesData } = useSelector((state) => state.heroes);
  const { itemsData } = useSelector((state) => state.items);
  const {matchId} = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const loadTeams = async () => {
    if (teamsData === undefined) {
      await dispatch(getTeamsData())
  }}

  const loadData = async () => {
    await Promise.all( [
      dispatch(getMatchData(matchId)),
      dispatch(getHeroesData()),
      dispatch(getItemsData()),
    ])
    await loadTeams();

    setIsLoading(false);
  }

  useEffect(() => {
    loadData();
  }, [])


  return (
    <Wrapper>
      {isLoading &&
        <div className={styles.loaderWrapper}>
          <CircularProgress className={styles.loader} color="secondary" size={80}/>
        </div>}
      {isLoading || matchInfo && teamsData && heroesData && itemsData &&
      <div>
        <MatchHeader teamsData={teamsData} matchInfo={matchInfo}/>
        <MatchInfo teamsData={teamsData} matchInfo={matchInfo}/>
      </div>}
    </Wrapper>
  );
}

export default Match;