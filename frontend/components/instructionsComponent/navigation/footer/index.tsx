import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "240px", height: "53px" }}
          src="https://static.alchemyapi.io/images/marketing/badgeLight.png"
          alt="Alchemy Supercharged"
        />
      </a>
      <div className={styles.icons_container}>
        <div>
          <a
            href="https://github.com/bild96/Snowflake"
            target={"_blank"}
          >
            Leave me a star on Github
          </a>
        </div>
        <div>
          <a href="https://x.com/bild96" target={"_blank"}>
            Follow me on X
          </a>
        </div>
      </div>
    </div>
  );
}
