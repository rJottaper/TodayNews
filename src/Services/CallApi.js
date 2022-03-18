import API from './API';

const GetItems = async ({ url }) => {
  const response = await API.get(url)
  return response.data.articles
};

export { GetItems };