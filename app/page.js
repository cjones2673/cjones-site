"use client";

import Image from "next/image";
import styles from "./page.module.css";
import TypeIt from "typeit";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    new TypeIt("#title", {
      strings: "This is my website!",
      speed: 100
    }).go();
  }, []); // Runs once when the component mounts

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 id="title">
          Hello, my name is Chris Jones.
        </h1>
        <ul>
          <li>
            This website is a work in progress.
          </li>
          <li>Come back later to see what's up!</li>
        </ul>
        </main>
    </div>
  );
}
