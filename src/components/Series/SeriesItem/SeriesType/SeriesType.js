const SeriesType = ( {matches, className} ) => {
  const type = matches[0].series_type;
  const date = new Date(matches[0].start_time*1000);
  date.setHours(0,0,0,0);
  const pointDate = new Date(1633520096000);
  const pointDate2 = new Date(1633966546000);
  const seriesType = type === 0
    ? 'Bo1'
    : type === 2
      ? 'Bo5'
      : date.valueOf() > pointDate.valueOf() && date.valueOf() < pointDate2.valueOf()
        ? 'Bo2'
        : 'Bo3'
  return (
    <div className={className}>
      {seriesType}
    </div>
  );
};

export default SeriesType;