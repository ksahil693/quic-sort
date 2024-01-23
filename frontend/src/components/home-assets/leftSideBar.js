import React from "react";
import styles from "../css/left.module.css";

function LeftSideBar() {
  return (
    <div className="py-3 ps-2">
      <div className={"rounded-3 py-3 ps-2 "+styles.main}>
      <h4>Filters</h4>
      <div class="form-check">
        <h5>Type</h5>
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="remote"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Remote
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="onsite"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          On-site
        </label>
      </div>

      <div class="form-check mt-4">
        <h5>Apply Site</h5>
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="linkedin"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Linkedin
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="simplyHired"
        />
        <label class="form-check-label" for="flexCheckChecked">
          SimplyHired
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="indeed"
        />
        <label class="form-check-label" for="flexCheckChecked">
          indeed
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="career"
        />
        <label class="form-check-label" for="flexCheckChecked">
          Company career page
        </label>
      </div>

      <div class="form-check mt-4">
        <h5>Date of posting</h5>
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="all"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          All time
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="hrs24"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Last 24 hours
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="days3"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          last 3 Days
        </label>
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="days7"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          last 7 Days
        </label>
      </div>

      <div class="form-check mt-4">
        <h5>Location</h5>
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="banglore"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Bengalore
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="gurugram"
        />
        <label class="form-check-label" for="flexCheckChecked">
          Gurugram
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="mumbai"
        />
        <label class="form-check-label" for="flexCheckChecked">
          Mumbai
        </label>
      </div>
      </div>
      </div>

    
  );
}

export default LeftSideBar;
