import axios from "axios";

const KEY = "AIzaSyC_AcF_aoIUZ4ktY30LcVopLfuy1ciPVKU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
