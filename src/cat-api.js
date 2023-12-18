import axios from 'axios';

const api_key =
  'live_I0ULZh8Io7BHofB8jY65gLfm92pP8zb2r5aZMLig7TBMFzWPab3GfI6fjt5T99M7';
axios.defaults.headers.common['x-api-key'] = api_key;

export const fetchBreeds = async () => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data.map(breed => ({ id: breed.id, name: breed.name }));
  } catch (err) {
    throw new Error('Error loading breeds');
  }
};

export const fetchCatByBreed = async breedId => {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    );
    return response.data[0];
  } catch (err) {
    throw new Error('Error loading cat info');
  }
};
