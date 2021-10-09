const SeriesType = ( {matches, className} ) => {
  const type = matches[0].series_type;
  const seriesType = type === 0
    ? 'Bo1'
    : type === 1
      ? 'Bo3'
      : 'Bo5'
  return (
    <div className={className}>
      {seriesType}
    </div>
  );
};

export default SeriesType;