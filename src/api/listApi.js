import axios from '../utils/axios';

export const fetchLists = async ({id, boardId}) => {
  let queryString = '/lists';
  if(id) queryString += `/${id}`
  if(boardId) queryString += `?boardId=${boardId}`
  const response = await axios.get(queryString);
  return response.data;
};

export const createList = async (data) => {
  const response = await axios.post('/lists', data);
  return response.data;
};

export const updateList = async ({id,data}) => {
  const response = await axios.patch(`/lists/${id}`, data);
  return response.data;
}

export const deleteList = async (id) => {
  const response = await axios.delete(`/lists/${id}`);
  return response.data;
};