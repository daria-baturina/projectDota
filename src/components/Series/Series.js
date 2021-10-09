import Wrapper from "../Wrapper/Wrapper";
import styles from './Series.module.scss';
import SeriesHeader from "./SeriesHeader/SeriesHeader";
import SeriesList from "./SeriesList/SeriesList";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import TeamPicker from "./TeamPicker/TeamPicher";

const Series = () => {
  const history = useHistory();
  const { data } = useSelector((state) => state.league);

  const redirectToHome = () => {
    if (data === undefined) {
      history.push(``);
    }
  };

  useEffect(() => {
    redirectToHome();
  }, []
  );

  return (
    <Wrapper>
      <TeamPicker/>
      {data &&
        <SeriesHeader/>}
      {data &&
        <SeriesList/>}
    </Wrapper>
  );
}

export default Series;