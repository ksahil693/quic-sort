import React from "react";
import styles from "./css/home.module.css";
import LeftSideBar from "./home-assets/leftSideBar";
import RightSideBar from "./home-assets/rightSideBar";
import Jobitems from "./home-assets/jobitems";
const Home = () => {
  return (
    <div>
      <div class={"px-4 py-5 my-5 "}>
        <div class="col-lg-6 mx-4">
          <p className={styles.heading}>
            Find your <span className={styles.center}>new job</span> today
          </p>
        </div>
        <div class="mx-4">
          <p class="fw-4 lead mb-4">
            Thousand's of jobs in the computer, engineering and technology
            sectors are waiting for you.
          </p>
        </div>
      </div>
      <div className={"px-2 py-4 " + styles.main}>
        <div className={styles.c1}>
          <LeftSideBar />
        </div>
        <div className={styles.c2}>
          <Jobitems />
        </div>
        <div className={styles.c3}>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
