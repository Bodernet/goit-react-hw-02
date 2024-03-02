import { useState, useEffect } from "react";
import css from "./App.module.css";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";

import Notification from "../Notification/Notification.jsx";

function App() {
  const feedbackValues = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [values, setValues] = useState(() => {
    const savValues = window.localStorage.getItem("sav-values");
    return savValues !== null ? JSON.parse(savValues) : feedbackValues;
  });

  const updateFeedback = (feedbackType) => {
    setValues((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };
  const resetFeedback = () => {
    setValues(feedbackValues);
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  const positivFeedback = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );

  useEffect(() => {
    window.localStorage.setItem("sav-values", JSON.stringify(values));
  }, [values]);

  return (
    <div className={css.firstBlock}>
      <div>
        <Description />
        <Options
          totalFeedback={totalFeedback}
          updateFeedback={updateFeedback}
          resetFeedback={resetFeedback}
        />

        {totalFeedback ? (
          <Feedback
            values={values}
            totalFeedback={totalFeedback}
            positivFeedback={positivFeedback}
          />
        ) : (
          <Notification />
        )}
      </div>
    </div>
  );
}

export default App;
