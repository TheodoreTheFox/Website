import React from "react";
import styles from '../../styles/footer.module.scss'

export default function Footer() {
  return (
    <div> 
      <footer className={styles.foot}>
      {"©"} 2022 Theodore
      </footer>
    </div>
  );
}