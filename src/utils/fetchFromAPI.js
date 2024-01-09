import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  // console.log('fetchFromAPI called...');
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // console.log(data);
    return data;
  } catch (error) {
    console.log("Error occured during the fetch from API");
    console.log(error);
    return [];
  }
};
