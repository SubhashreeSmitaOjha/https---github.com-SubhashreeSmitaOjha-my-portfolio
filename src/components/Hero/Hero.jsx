import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Subhashree</h1>
        <p className={styles.description}>
        I'm a MCA student with a strong foundation in problem-solving, critical thinking, analytical skills and programming language.I believe my ability to quickly learn new technologies and adapt to changing requirements will be invaluable in a fast-paced environment. I'm eager to join a company where I can apply my knowledge and skills to create impactful solutions.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
