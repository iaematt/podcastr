import axios from "axios";

export const api = axios.create({
  baseURL: "https://apipodcastr.vercel.app/api",
});
