// import React from "react";
import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div>
      <ul className={css.container}>
        <li>
          <button
            className={css.btnOption}
            type="button"
            onClick={() => updateFeedback("good")}
          >
            Good
          </button>
        </li>
        <li>
          <button
            className={css.btnOption}
            type="button"
            onClick={() => updateFeedback("neutral")}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            className={css.btnOption}
            type="button"
            onClick={() => updateFeedback("bad")}
          >
            Bad
          </button>
        </li>
        {totalFeedback > 0 && (
          <li>
            <button
              className={css.btnOption}
              type="button"
              onClick={resetFeedback}
            >
              Reset
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Options;
