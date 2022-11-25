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

const responsesService = { createResponse };

export default responsesService;
