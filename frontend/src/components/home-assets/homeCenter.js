import React from "react";
import styles from "../css/center.module.css";
import JobItems from "./jobItems";

function HomeCenter() {

  const symbol1 = "<";
  const symbol2 = ">";
  const jobs = [];
  for(let i=0;i<10;i++){
    jobs.push(<JobItems/>);
  }
  return (
    <div className="px-3 py-3 mt-3">
      <div className={"mb-3 " + styles.top}>
        <h3>3177 Jobs</h3>
        <select
          className={"form-select " + styles.drop}
          aria-label="Default select example"
        >
          <option selected> Sort by</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className={" " + styles.items}>
        <JobItems />
        <JobItems />
        {jobs}
      </div>
      <div className="mt-3">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled me-3">
              <a class="page-link" href="/"> {symbol1} </a>
            </li>
            <li class="page-item me-3">
              <a class="page-link" href="/">
                1
              </a>
            </li>
            <li class="page-item me-3">
              <a class="page-link" href="/">
                2
              </a>
            </li>
            <li class="page-item me-3">
              <a class="page-link" href="/">
                3
              </a>
            </li>
            <li class="page-item me-3">
              <a class="page-link" href="/">
                4
              </a>
            </li>
            <li class="page-item me-3">
              <a class="page-link" href="/">
                5
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                {symbol2}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HomeCenter;
