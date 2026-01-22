const { generateSolution } = require("../services/ai.service");
const { problems } = require("../data/problemstore");

exports.submitProblem = (req, res) => {
  const { problem, subject, grade, cluster } = req.body;

  if (!problem || !subject || !grade || !cluster) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  const solution = generateSolution(problem, subject, grade, cluster);

  // Store problem for analytics
  problems.push({
    problem,
    subject,
    grade,
    cluster,
    createdAt: new Date()
  });

  res.json({
    success: true,
    solution
  });
};
