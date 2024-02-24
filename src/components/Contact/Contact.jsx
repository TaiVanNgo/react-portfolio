import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.rowLeft}>
        <h1>Contact</h1>
        <h2>Feel free to reach out!</h2>
      </div>

      <div className={styles.rowRight}>
        <div>
          <div className={styles.information}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
            <p>vantaingo.056@gmail.com</p>
          </div>
          <div className={styles.information}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="Linkedin Icon"
            />
            <p>linkedin.com/tai-ngo</p>
          </div>
          <div className={styles.information}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="" />
            <p>github.com/TaiVanNgo</p>
          </div>
        </div>
      </div>
    </section>
  );
};
