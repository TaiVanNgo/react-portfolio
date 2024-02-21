import React from "react";
import { getImageUrl } from "../../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tai</h1>
        <p className={styles.description}>
          I'm a 2nd year student in RMIT, majoring in Software Engineering. I am
          20 years old and passionate about creating innovative software
          solutions. With a strong foundation in Software Engineering, I am
          dedicated to expanding my knowledge and skills in the field to develop
          impactful applications.
        </p>
        <a className={styles.contactBtn} href="mailto:vantaingo.056@gmail.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.avatar}
        src={getImageUrl("hero/heroImage.png")}
        alt="My Avatar"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
