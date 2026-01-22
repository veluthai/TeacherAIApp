const Suggestions = ({ text }) => {
  return (
    <div className="card">
      <h4>AI Suggested Solution</h4>
      <p>{text}</p>
    </div>
  );
};

export default Suggestions;
