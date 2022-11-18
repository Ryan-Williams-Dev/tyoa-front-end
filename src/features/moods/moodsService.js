import axios from "axios";

const API_URL = "/api/moods";

const get = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

export default moodsService = {
  get,
};
