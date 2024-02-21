import styles from "./App.module.css";
import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Navbar/Hero/HeroComponent";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
