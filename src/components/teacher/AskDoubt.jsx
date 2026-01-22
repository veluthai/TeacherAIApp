import { useState } from "react";
import { getAISuggestion } from "../../services/aiService";
import Suggestions from "./Suggestions";

const AskDoubt = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const result = await getAISuggestion(question);
    setResponse(result);
  };

  return (
    <div>
      <h3>Ask a Classroom Doubt</h3>
      <textarea
        placeholder="Describe your classroom problem..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={handleSubmit}>Get Help</button>

      {response && <Suggestions text={response} />}
    </div>
  );
};

export default AskDoubt;
