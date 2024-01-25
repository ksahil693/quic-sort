import React from "react";
import styles from "../css/discoverItem.module.css";
import mapPinLine from "../images/MapPinLine.jpg";
import clock from "../images/Clock.jpg";
import disc from "../images/disc.jpg";
import Link from "../images/link.jpg";
import mail from "../images/mail.jpg";
import person from "../images/user.jpg";
import Linkedin from "../images/linkedin.jpg";
import elipse from "../images/Ellipse.jpg";

function DiscoverItems() {

  return (
    <div className="d-flex justify-content-center">
        <div className={styles.main}>
      <div className="col">
        <div class="card card-cover h-100 w-60 rounded-4 shadow-lg mb-0">
          <div class="d-flex flex-column h-100 px-4 py-4 pb-3 text-shadow-1">
            <ul class="d-flex list-unstyled mt-auto mb-0">
              <li className="me-auto">
                <p className="fs-4">Liner Company</p>
              </li>
              <li className="me-2">
                <div className={"px-2 py-1 card card-cover rounded-5 shadow-sm mb-0 "+ styles.btn}>
                <span className="me-2 mb-1 ">
                  <img src={clock} alt="folder" />
                </span>
                    29 minutes Ago
                </div>
              </li>
            </ul>

            <h3>Software Engineer</h3>

            <ul class="d-flex list-unstyled mt-auto">
              <li className="me-2">
                <span className="me-2 mb-1">
                  <img src={mapPinLine} alt="map" />
                </span>
                New Delhi
              </li>
              <li className="mx-3">
                <span>
                  <img src={elipse} alt="dot" />
                </span>
              </li>


              <li className="me-2">
                <span className="me-2 mb-1">
                  <img src={disc} alt="folder" />
                </span>{" "}
                50 - 55k
              </li>

              <li className="mx-3">
                <span>
                  <img src={elipse} alt="dot" />
                </span>
              </li>

              <li className="me-2">
                <span className="me-2 mb-1">
                  <img src={Link} alt="folder" />
                </span>{" "}
                linkedin
              </li>
            </ul>

            <ul class="d-flex list-unstyled mt-auto">
              <li className="me-2">
                <span className="me-2 mb-1">
                  <img src={mail} alt="map" />
                </span>
                abc@gmail.com
              </li>

              <li className="mx-3">
                <span>
                  <img src={elipse} alt="dot" />
                </span>
              </li>

              <li className="me-2">
                <span className="me-2 mb-1">
                  <img src={person} alt="folder" />
                </span>
                Name
              </li>

              <li className="mx-3">
                <span>
                  <img src={elipse} alt="dot" />
                </span>
              </li>

              <li className="me-2">
                <span className="me-2 mb-1">
                  <img src={Linkedin} alt="folder" />
                </span>{" "}
                linkedin
              </li>
            </ul>

            <p>
              Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad
              sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.
              laborum tempor Lorem incididunt. Mollit in laborum tempor Lorem
              incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do
              incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.
              Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad
              sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.
              laborum tempor Lorem incididunt. Mollit in laborum tempor Lorem
              incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do
              incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.
              Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad
              sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.
              laborum tempor Lorem incididunt.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default DiscoverItems;
