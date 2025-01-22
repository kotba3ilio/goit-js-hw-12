import iziToast from 'izitoast';

export const searchImages = text => {
  const options = {
    method: 'get',
  };
  const params = new URLSearchParams({
    key: '48321806-d480a24496502db5d22ba5dda',
    image_type: 'photo',
    orientation: 'hotizontal',
    safesearch: true,
    q: text,
  });
  return fetch(`https://pixabay.com/api/?${params.toString()}`, options)
    .then(response => {
      if (!response.ok) {
        throw response.status;
      }
      return response.json();
    })
    .catch(error => {
      iziToast.error({ title: 'Error', message: error });
    });
};
