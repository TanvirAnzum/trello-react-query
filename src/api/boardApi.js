import axios from '../utils/axios';

export const fetchBoards = async ({id}) => {
  let queryString = '/boards';
  if(id) queryString += `/${id}`
  const response = await axios.get(queryString);
  return response.data;
};

export const createBoard = async (data) => {
  const response = await axios.post('/boards', data);
  return response.data;
};

export const updateBoard = async ({id,data}) => {
  const response = await axios.patch(`/boards/${id}`, data);
  return response.data;
}

export const deleteBoard = async (id) => {
  const response = await axios.delete(`/boards/${id}`);
  return response.data;
};
