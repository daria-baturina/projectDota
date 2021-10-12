import Wrapper from "../Wrapper/Wrapper";
import styles from './Series.module.scss';
import SeriesHeader from "./SeriesHeader/SeriesHeader";
import SeriesList from "./SeriesList/SeriesList";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import Pickers from "./Pickers/Pickers";

const Series = () => {
  const history = useHistory();
  const { data } = useSelector((state) => state.league);

  const redirectToHome = () => {
    if (data === undefined) {
      history.push(`/DotaProject/`);
    }
  };

  useEffect(() => {
    redirectToHome();
  }, []
  );

  return (
    <Wrapper>
      {data &&
      <Pickers/>}
      {data &&
      <SeriesHeader/>}
      {data &&
      <SeriesList/>}
    </Wrapper>
  );
}

export default Series;