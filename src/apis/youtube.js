import axios from "axios";
const KEY = "AIzaSyABWZU2n13ja5ypcg2-K4Uwtn-veYdc0rc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
