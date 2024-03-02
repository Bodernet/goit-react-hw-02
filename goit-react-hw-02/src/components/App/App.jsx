import { useState } from "react";
// import "./App.modules.css";
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
    const savedValues = window.localStorage.getItem("saved-values");
    return savedValues !== null ? JSON.parse(savedValues) : feedbackValues;
  }, []);

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

  // useEffect(() => {
  //   window.localStorage.setItem("values-states", JSON.stringify(values));
  // }, [values]);

  return (
    <div>
      <div>
        <Description />
        <Options
          totalFeedback={totalFeedback}
          updateFeedback={updateFeedback}
          resetFeedback={resetFeedback}
        />

        <Feedback
          values={values}
          totalFeedback={totalFeedback}
          positivFeedback={positivFeedback}
        />
        {!totalFeedback && <Notification />}
      </div>
    </div>
  );
}

export default App;
