import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_MODEL_SPACE_API_BASE_URL;

export const getModelSpaces = async () => {
  console.log('API_BASE_URL', API_BASE_URL);
  return axios.get(`${API_BASE_URL}/model-spaces`);
};

export const getModelSpacesDetails = async (id: string) => {
  return axios.get(`${API_BASE_URL}/model-spaces/${id}`);
};

export const predictModalSpace = async (id: string, data: any) => {
  return axios.post(`${API_BASE_URL}/model-spaces/${id}/predict`, data);
};
