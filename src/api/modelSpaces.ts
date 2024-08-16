import axios from 'axios';

const API_BASE_URL = 'https://frontend-assignment-api.misc.simplismart.ai';

export const getModelSpaces = async () => {
  return axios.get(`${API_BASE_URL}/model-spaces`);
};

export const getModelSpacesDetails = async (id: string) => {
  return axios.get(`${API_BASE_URL}/model-spaces/${id}`);
};

export const predictModalSpace = async (id: string, data: any) => {
  return axios.post(`${API_BASE_URL}/model-spaces/${id}/predict`, data);
};
