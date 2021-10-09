export default class HeroesApi {
  async get() {
    const response = await fetch(`${process.env.REACT_APP_DOTA_API_URL}constants/heroes`);

    const data = await response.json();

    return data;
  };
}