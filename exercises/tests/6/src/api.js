import axios from "axios";
import { USERNAME, API_URL } from "./config";


export async function fetchUserData() {
  const { data } = await axios.get(`${API_URL}/users/${USERNAME}`);
  return data;
}

export async function fetchMyRepositories() { 
  const { data } = await axios.get(`${API_URL}/users/${USERNAME}/repos`);
  return data;
}

export async function fetchMyLatestRepositories() {
  const { data } = await axios.get(`${API_URL}/users/${USERNAME}/repos?sort=updated&per_page=3`)
  return data;
}
