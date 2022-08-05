import Footer from "./Footer";
import BottomBar from "./BottomBar";

// styles
import styles from "./Layout.module.css";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <BottomBar />
      <main className={`${styles.main_content} container`}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
