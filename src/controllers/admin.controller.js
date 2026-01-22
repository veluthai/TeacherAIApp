const { problems } = require("../data/problemstore");

exports.getOverview = (req, res) => {
  res.json({
    success: true,
    totalProblems: problems.length
  });
};

exports.getClusterAnalytics = (req, res) => {
  const clusterCount = {};

  problems.forEach(p => {
    clusterCount[p.cluster] = (clusterCount[p.cluster] || 0) + 1;
  });

  res.json({
    success: true,
    clusterAnalytics: clusterCount
  });
};

exports.getSubjectAnalytics = (req, res) => {
  const subjectCount = {};

  problems.forEach(p => {
    subjectCount[p.subject] = (subjectCount[p.subject] || 0) + 1;
  });

  res.json({
    success: true,
    subjectAnalytics: subjectCount
  });
};
