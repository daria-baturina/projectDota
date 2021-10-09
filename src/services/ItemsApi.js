export default class ItemsApi {
  async get() {
    const response = await fetch(`${process.env.REACT_APP_DOTA_API_URL}constants/items`);

    const data = await response.json();

    return data;
  };
}