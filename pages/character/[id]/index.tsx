import Layout from "../../../layouts/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import getCharacter from "../../../controllers/character";
import styles from "./index.module.scss";
import CharacterParams from "../../../models/characters";

const Character = () => {
  const router = useRouter();
  const { id } = router.query;

  const [character, setCharacter] = useState<CharacterParams | null>(null);
  const fetchData = () => {
    getCharacter(id).then((res) => {
      setCharacter(res);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Layout>
        <div className={styles.Characters}>
          {character ? (
            <div className={styles.characterContainer}>
              <div className={styles.imgContainer}>
                <img src={character.image} alt={character.name} />
              </div>
              <div className={styles.textContainer}>
                <a
                  href={`https://rickandmortyapi.com/api/character/${id}`}
                  target="_blank"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  <h2>{character.name}</h2>
                </a>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{ fontSize: "1.8rem", marginRight: "0.2rem" }}
                    className={styles[character.status]}
                  >
                    •
                  </span>
                  {character.status === "unknown"
                    ? character.status[0].toUpperCase() +
                      character.status.slice(1)
                    : character.status}
                  -{character.species}
                </p>
                <p
                  style={{
                    color: "rgb(158, 158, 158)",
                    fontSize: "0.9rem",
                    marginBottom: 0,
                    marginTop: "0.8rem",
                    fontWeight: 500,
                  }}
                >
                  Gender:
                </p>
                <p>{character.gender}</p>
                <p
                  style={{
                    color: "rgb(158, 158, 158)",
                    fontSize: "0.9rem",
                    marginBottom: 0,
                    marginTop: "0.8rem",
                    fontWeight: 500,
                  }}
                >
                  First seen in:
                </p>
                <p>
                  {character.origin.name === "unknown"
                    ? character.origin.name[0].toUpperCase() +
                      character.origin.name.slice(1)
                    : character.origin.name}
                </p>
                <p
                  style={{
                    color: "rgb(158, 158, 158)",
                    fontSize: "0.9rem",
                    marginBottom: 0,
                    marginTop: "0.8rem",
                    fontWeight: 500,
                  }}
                >
                  Last known location:
                </p>
                <p>{character.location.name}</p>
              </div>
            </div>
          ) : (
            <h1>Loading...please wait</h1>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Character;
