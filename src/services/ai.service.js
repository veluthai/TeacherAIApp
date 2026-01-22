const generateSolution = (problem, subject, grade, cluster) => {
  const text = problem.toLowerCase();

  // Classroom management
  if (text.includes("absent")) {
    return {
      strategy: "Introduce attendance tracking and positive reinforcement.",
      activity: "Weekly attendance chart with rewards.",
      note: "Conduct parent awareness meetings."
    };
  }

  // Math – FLN concepts
  if (subject === "Math" && text.includes("zero")) {
    return {
      strategy: "Use number lines and real-life objects to explain zero.",
      activity: "Hands-on subtraction using stones and sticks.",
      note: "Ensure conceptual clarity before symbolic operations."
    };
  }

  // Science – lack of TLM
  if (subject === "Science" && text.includes("material")) {
    return {
      strategy: "Use low-cost, locally available teaching aids.",
      activity: "Demonstrate experiments using household items.",
      note: "Encourage student participation."
    };
  }

  // Tribal / Language context
  if (cluster === "Tribal" || text.includes("language")) {
    return {
      strategy: "Contextualize lessons using local language and culture.",
      activity: "Storytelling using local folklore.",
      note: "Bridge textbook language with mother tongue."
    };
  }

  // Default response
  return {
    strategy: "Use activity-based and peer learning methods.",
    activity: "Group discussions and collaborative tasks.",
    note: "Monitor student engagement."
  };
};

module.exports = { generateSolution };
