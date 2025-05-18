import axios from 'axios';

const BASE_URL = 'https://api.coinlore.net/api';

export const fetchCryptos = async () => {
  const response = await axios.get(`${BASE_URL}/tickers/`);
  return response.data.data;
};

export const fetchCryptoDetail = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/ticker/?id=${id}`);
  return response.data[0];
};