import { useEffect, useState } from "react";
import classes from "./ScrollBar.module.scss";

const Scrollbar = () => {
  const [progress, setProgress] = useState<number>(0);

  const onScroll = () => {
    const docHeight = document.documentElement.scrollHeight;
    const windowHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const progress = scrollTop === 0 ? 0 : (scrollTop / (docHeight - windowHeight)) * 100;
    setProgress(Number.isNaN(progress) ? 0 : progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [progress]);

  return (
    <div className={classes.scrollbarContainer}>
      <div className={classes.container}>
        <div className={classes.percent}>
          <div
            className={classes.fill}
            style={{
              height: `${100 - (progress as number)}%`,
            }}
          />
          <div className={classes.counter}>
            <p className={classes.progress}>{Math.round(progress as number)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrollbar;
