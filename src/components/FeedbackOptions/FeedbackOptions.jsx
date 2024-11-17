export const FeedbackOptions = ({ options, onleaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button key={option} onClick={() => onleaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};
