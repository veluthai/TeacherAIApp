export const getAISuggestion = async (question) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        "Try grouping students. Use stones or chalk pieces to explain zero in tens place. Give fast finishers a peer-teaching role."
      );
    }, 1000);
  });
};
