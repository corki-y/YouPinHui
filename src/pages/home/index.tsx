import { useState } from "react";
import { Button } from "antd";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./index.module.less";
import classNames from "classnames";
import { useGlobalStore } from "@/store";

const Home = () => {
  const [count, setCount] = useState<number>(0);
  const loading = useGlobalStore((state) => state.loading);
  console.log(loading);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className={classNames(styles.logo, styles.react)}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default Home;
