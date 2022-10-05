import axios from '../utils/axios';

export const fetchTasks = async ({id}) => {
  let queryString = '/tasks';
  if(id) queryString += `/${id}`
  const response = await axios.get(queryString);
  return response.data;
};

export const createTask = async (data) => {
  const response = await axios.post('/tasks', data);
  return response.data;
};

export const updateTask = async ({id,data}) => {
  const response = await axios.patch(`/tasks/${id}`, data);
  return response.data;
}

export const deleteTask = async (id) => {
  const response = await axios.delete(`/tasks/${id}`);
  return response.data;
};