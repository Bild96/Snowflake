
'use client'

import { ConnectKitButton } from "connectkit";
import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="https://github.com/bild96/Snowflake" target={"_blank"}>
        <p><b>❄️ Snowflake</b></p>
      </a>
      <ConnectKitButton />
    </nav>
  );
}
