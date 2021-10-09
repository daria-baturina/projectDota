const MatchDate = ({matches, className} ) => {
  const date = new Date(matches[0].start_time*1000);
  const dateResult = `${date.getUTCDate() < 10 ? `0` + `${date.getUTCDate()}` : date.getUTCDate()}.`
    +`${date.getUTCMonth() + 1 < 10 ? `0` + `${date.getUTCMonth() + 1}` : date.getUTCMonth() + 1}.`
    + `${date.getUTCFullYear()}`;

  return (
    <div className={className}>
      {dateResult}
    </div>
  );
}

export default MatchDate;