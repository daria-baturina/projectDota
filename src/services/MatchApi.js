export default class MatchApi {
  async get(match) {
    const response = await fetch(`${process.env.REACT_APP_DOTA_API_URL}matches/${match}`);

    const data = await response.json();

    return data;
  };
}