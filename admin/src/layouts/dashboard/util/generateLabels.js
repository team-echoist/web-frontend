const monthlyData = () => {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
};

const dailyData = (month) => {
  const currentYear = new Date().getFullYear();
  const daysInMonth = new Date(currentYear, month, 0).getDate();
  const labels = [];
  for (let i = 1; i <= daysInMonth; i++) {
    labels.push(i);
  }
  return labels
};

export const generateLables = (params, month) => {
  console.log("params",params,month)
  const mapper = {
    "today-essay": dailyData(month),
    "total-essay": monthlyData(),
    "today-users": dailyData(month),
    "all-users": monthlyData(),
    "subscribe-users": dailyData(month),
  };
  return mapper[params];
};
