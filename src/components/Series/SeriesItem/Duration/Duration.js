const Duration = ({matches, className}) => {
  const sum = matches.reduce((sum, item) => sum + item.duration,0);
  const duration = new Date (sum * 1000);
  const durationTime = `${duration.getUTCHours()}:`+
    `${duration.getUTCMinutes() < 10 ? `0` + `${duration.getUTCMinutes()}` : duration.getUTCMinutes()}:`+
      `${duration.getUTCSeconds() < 10 ? `0` + `${duration.getUTCSeconds()}` : duration.getUTCSeconds()}`;

  return (
    <div className={className}>
      {durationTime}
    </div>
  )
}

export default Duration;