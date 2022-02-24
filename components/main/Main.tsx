import styles from "./Main.module.scss";
import { FC } from "react";
import Logo from "../../assets/img/main_text.png";
import Image from "next/image";

const Main: FC = () => {
  return (
    <div className={styles.Main}>
      <Image src={Logo} alt="Rick and Morty" width={900} height={264} />
    </div>
  );
};

export default Main;
