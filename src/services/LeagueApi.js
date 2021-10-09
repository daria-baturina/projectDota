export default class LeagueApi {
  async get() {
    const response = await fetch(`${process.env.REACT_APP_DOTA_API_URL}leagues/13256/matches`);

    const data = await response.json();

    return data;
  };
}