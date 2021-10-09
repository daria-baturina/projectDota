export default class TeamsApi {
  async get() {
    const response = await fetch(`${process.env.REACT_APP_DOTA_API_URL}teams`);

    const data = await response.json();

    return data;
  };
}