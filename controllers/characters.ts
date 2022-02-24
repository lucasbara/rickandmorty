import axios from "axios";

const getCharacters = async () => {
  return axios
    .get("https://rickandmortyapi.com/api/character")
    .then(({ data }) => {
      return data.results;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

export default getCharacters;
