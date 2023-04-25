export function fetchingImages(name) {
    const BASE_URL = 'https://pixabay.com/api/'
    const API_KEY = '35591917-63dcfa9e69eea21e43d62ef2e';
    
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then(data => {

        if (!data.ok) {
            throw new Error(data.status)
          }
        
    return data.json()})

}