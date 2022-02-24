import { useEffect, useState } from "react";
import styles from "./Characters.module.scss";
import { FC } from "react";
import Card from "../card/Card";
import getCharacters from "../../controllers/characters";
import HomeLink from "../link/Link";
import Home from "../../pages";
import CharacterParams from "../../models/characters";

const Characters: FC = () => {
  const [characters, setCharacters] = useState<CharacterParams[] | null>(null);

  const fetchData = () => {
    getCharacters().then((res) => {
      setCharacters(res);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.Characters}>
      {characters ? (
        characters.map(
          ({ id, name, status, species, location, image }: CharacterParams) => {
            return (
              <HomeLink href={`/character/${id}`}>
                <Card
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  location={location.name}
                  image={image}
                  key={id}
                />
              </HomeLink>
            );
          }
        )
      ) : (
        <h1>Loading, please wait..</h1>
      )}
    </div>
  );
};

export default Characters;
