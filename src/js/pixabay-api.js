import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

export const searchImages = async (text, page) => {
  const response = await axios.get('api/', {
    params: {
      key: '48321806-d480a24496502db5d22ba5dda',
      image_type: 'photo',
      orientation: 'hotizontal',
      safesearch: true,
      q: text,
      page: page,
      per_page: 15,
    },
  });
  return response;
};
