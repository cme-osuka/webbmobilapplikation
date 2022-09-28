import axios from "axios";

async function fetchBeerData() {
  
  return axios.get("https://api.punkapi.com/v2/beers");
}

export default fetchBeerData;