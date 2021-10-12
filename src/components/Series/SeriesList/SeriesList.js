import {useSelector} from "react-redux";
import SeriesItem from "../SeriesItem/SeriesItem";

const SeriesList = () => {
  const { data }  = useSelector((state) => state.league);
  const { teamsPick } = useSelector((state) => state.teamsPick);
  const { datePick } = useSelector((state) => state.datePick);

  let allSeriesID = data.map((series) => {
    const date = new Date(series.start_time*1000);
    date.setHours(0,0,0,0);
      return {
        series_id: series.series_id,
        date: date,
        radiant_team_id: series.radiant_team_id,
        dire_team_id: series.dire_team_id,
      }
  });

  console.log (allSeriesID);
  console.log (teamsPick.team);
  console.log (datePick.date);
  allSeriesID.sort(( a, b ) =>  b.date - a.date);
  let uniqueSeries = [];
  allSeriesID.forEach(series => {
    if (!uniqueSeries.find(item => item.series_id === series.series_id)) {
      uniqueSeries.push(series)
    }
  })

  if (teamsPick.team) {
    uniqueSeries = uniqueSeries.filter((series) =>
      series.radiant_team_id === teamsPick.team.team_id ||
      series.dire_team_id === teamsPick.team.team_id
    )
  }

  if (datePick.date) {
    const roundDate = new Date(datePick.date);
    roundDate.setHours(0,0,0,0);
    console.log(roundDate);
    uniqueSeries = uniqueSeries.filter((series) =>
      series.date.valueOf() === roundDate.valueOf()
    )
  }

  console.log(uniqueSeries);

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