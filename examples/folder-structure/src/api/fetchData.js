import axios from "axios";

async function fetchData() {
  
  return axios.get("http://localhost:3000/quotes");
}

export default fetchData;