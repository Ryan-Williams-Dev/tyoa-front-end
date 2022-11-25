import axios from "axios";

const API_URL = "/api/responses/";

const createResponse = async (responseData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, responseData, config);
  return response.data;
};

const getResponse = async (selectedMoods, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log(config);

  const response = await axios.get(API_URL, selectedMoods, config);
  return response.data;
};

const responsesService = { createResponse, getResponse };

export default responsesService;
