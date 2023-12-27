import { Outlet } from "react-router-dom";
import styles from "./index.module.less";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
};

export default Layout;
