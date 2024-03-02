const Feedback = ({ values, totalFeedback, positivFeedback }) => {
  return (
    <div>
      <ul>
        <li>Good: {values.good}</li>
        <li>Neutral: {values.neutral}</li>
        <li>Bad: {values.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positiv: {positivFeedback} %</li>
      </ul>
    </div>
  );
};

export default Feedback;
