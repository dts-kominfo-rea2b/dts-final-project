
// styles
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className="text-muted">
          © {currentYear} Game Ku
        </p>
        <p className={styles.created}>
          Created{" "}
          <span>
          </span>{" "}
          Gusti Adi Putra
        </p>
      </div>
    </footer>
  );
};

export default Footer;
