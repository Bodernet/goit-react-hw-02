import css from "./Feedback.module.css";
const Feedback = ({ values, totalFeedback, positivFeedback }) => {
  return (
    <div>
      <ul>
        <li className={css.list}>
          Good: <span className={css.valueList}>{values.good}</span>
        </li>
        <li className={css.list}>
          Neutral: <span className={css.valueList}>{values.neutral}</span>
        </li>
        <li className={css.list}>
          Bad: <span className={css.valueList}>{values.bad}</span>
        </li>
        <li className={css.list}>
          Total: <span className={css.valueList}>{totalFeedback}</span>
        </li>
        <li className={css.list}>
          Positiv: <span className={css.valueList}>{positivFeedback} %</span>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
