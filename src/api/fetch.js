import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '29413713-a123049087085ca77c45184ac';

export const addImages = async (imageName, page) => {
  const response = await axios.get(
    `/?key=${KEY}&q=${imageName}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
