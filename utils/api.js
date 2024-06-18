import axios from "axios";

export const getUserData = async () => {
  const { data } = await axios.get("/api/auth/profile");
  return data;
};

export const SupplyCreator = async (payload) => {
  return await axios.post("/api/Supply", payload);
};

export const getPollsData = async () => {
  const { data } = await axios.get("/api/Supply");
  return data;
};

export const proposalacceptor = async (payload) => {
  const { id, owner } = payload;
  const { data } = await axios.post(`/api/Supply/${id}/fulfill`, { owner });
  return data;
};

export const proposalmaker = async (payload) => {
  const { id, description } = payload;
  console.log("pl", payload);
  const { data } = await axios.post(`/api/Supply/${id}/request`, {
    description,
  });
  return data;
};

export const getBusiness = async (id) => {
  console.log(id);
  const { data } = await axios.get(`/api/business/${id}`);
  return data;
};

export const getPollData = async (id) => {
  console.log(id);
  const { data } = await axios.get(`/api/Supply/${id}`);
  return data;
};

export const voteHandler = async (payload) => {
  const { id, response } = payload;
  return await axios.post(`/api/Supply/${id}/response`, {
    response,
  });
};
