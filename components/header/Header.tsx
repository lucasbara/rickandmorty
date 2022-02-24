import styles from "./Header.module.scss";
import { FC } from "react";
import Head from "next/head";
import { NextPage } from "next";
import Logo from "../../assets/img/logo.png";
import Link from "next/link";
import HomeLink from "../link/Link";
import Image from "next/image";

const Header: FC = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.imgContainer}>
        <HomeLink href="/">
          <Image src={Logo} alt="Logo" width={50} height={50} />
        </HomeLink>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <a
              href="https://rickandmortyapi.com/documentation/#introduction"
              className={styles.Api}
            >
              API
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
