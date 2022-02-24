import styles from "./Card.module.scss";
import { FC } from "react";

interface Props {
  id: number;
  name: string;
  status: string;
  species: string;
  origin?: string;
  location: string;
  image?: string;
}

const Card: FC<Props> = ({
  id,
  name,
  status,
  species,
  origin,
  location,
  image,
}) => {
  return (
    <div className={styles.Card}>
      <div className={styles.imgContainer}>
        {image && <img src={image} alt={name} />}
      </div>
      <div className={styles.textContainer}>
        <h2>{name}</h2>
        <p
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <span
            style={{ fontSize: "1.8rem", marginRight: "0.2rem" }}
            className={styles[status]}
          >
            •
          </span>
          {status === "unknown"
            ? status[0].toUpperCase() + status.slice(1)
            : status}
          -{species}
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
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Card;
