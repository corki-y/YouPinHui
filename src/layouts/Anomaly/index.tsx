import { Button, Result } from "antd";
import styles from "./index.module.less";
import type { ResultProps } from "antd/es/result";
import useRouterHooks from "@/hooks/useRouterHooks";

const Anomaly = (props: ResultProps) => {
  const { status, title, subTitle, extra } = props;
  const { push } = useRouterHooks();

  const onClick = () => {
    push("/home");
  };

  return (
    <div className={styles.wrapper}>
      <Result
        status={status || "404"}
        title={title || "404"}
        subTitle={subTitle || "对不起，您访问的页面不存在。"}
        extra={
          extra || (
            <Button type="primary" onClick={onClick}>
              返回主页
            </Button>
          )
        }
      />
    </div>
  );
};

export default Anomaly;
