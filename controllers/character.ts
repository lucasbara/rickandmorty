import axios from "axios";

const getCharacter = async (id: string | string[] | undefined) => {
  return axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

export default getCharacter;
