const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div>
      <ul>
        <li>
          <button type="button" onClick={() => updateFeedback("good")}>
            Good
          </button>
        </li>
        <li>
          <button type="button" onClick={() => updateFeedback("neutral")}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={() => updateFeedback("bad")}>
            Bad
          </button>
        </li>
        {totalFeedback > 0 && (
          <li>
            <button type="button" onClick={resetFeedback}>
              Reset
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Options;
