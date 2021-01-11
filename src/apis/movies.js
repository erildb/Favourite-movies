import axios from "axios";

export default axios.create({
  baseURL: 'https://imdb8.p.rapidapi.com/title',

  headers: {
    'x-rapidapi-key': '0308c707e0msh9e19bf63f1e4163p150807jsn3a854ab93c83',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
  },
});
