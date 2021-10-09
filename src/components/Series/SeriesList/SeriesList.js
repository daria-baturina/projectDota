import {useSelector} from "react-redux";
import SeriesItem from "../SeriesItem/SeriesItem";

const SeriesList = () => {
  const { data }  = useSelector((state) => state.league);

  let allSeriesID = data.map((series) => {
      return {
        series_id: series.series_id,
        date: series.start_time
      }
  });

  allSeriesID.sort(( a, b ) =>  b.date - a.date);
  const uniqueSeries = [];
  allSeriesID.forEach(series => {
    if (!uniqueSeries.find(item => item.series_id === series.series_id)) {
      uniqueSeries.push(series)
    }
  })

  let seriesItems = uniqueSeries.map(item => {
    return (
      <SeriesItem key={item.series_id} seriesId={item.series_id}/>
    );
  });

  return (
    <div>
      {seriesItems}
    </div>
  );
};

export default SeriesList;