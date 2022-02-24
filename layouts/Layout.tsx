import { ReactNode } from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import styles from "./Layout.module.scss";
import { AiFillHeart } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { DiReact } from "react-icons/di";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <Main />
      <div>{children}</div>
      <div className={styles.footerContainer}>
        <p className={styles.footer}>
          <BiCodeAlt />
          &ensp;with&ensp;
          <AiFillHeart /> by{" "}
          <a
            href="https://github.com/lucasbara"
            target="_blank"
            style={{ textDecoration: "none", color: "#FFFFFF" }}
          >
            Lucas Barallobre
          </a>
          {"  "}
          using <DiReact />
        </p>
      </div>
    </div>
  );
};

export default Layout;
