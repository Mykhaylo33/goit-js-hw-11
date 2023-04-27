const axios = require('axios').default;

const apiURL =
  'https://pixabay.com/api/?key=35591917-63dcfa9e69eea21e43d62ef2e';

export default async function fetchPictures(name, page = 1) {
  const URL = `${apiURL}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;
  const { data } = await axios.get(URL);
  return data;
}

