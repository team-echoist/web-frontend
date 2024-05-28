const dailyData = (month) => {
  const monthNumber =
    new Date(Date.parse(`1 ${month}, ${new Date().getFullYear()}`)).getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const daysInMonth = new Date(currentYear, monthNumber, 0).getDate();
  const labels = [];
  for (let i = 1; i <= daysInMonth; i++) {
    labels.push(i);
  }
  const datasets = {
    label: "apps",
    data: [
      50, 20, 10, 22, 50, 50, 20, 10, 22, 50, 50, 20, 10, 22, 50, 50, 20, 10, 22, 50, 50, 20, 10,
      22, 50, 50, 20, 10, 22, 50, 11,
    ],
  };
  //  추후 api 제대로 세팅되면 데이타부분에 각각의 일수에 해당하는 데이터 세팅 예정
  return {
    labels: labels,
    datasets: datasets,
  };
};

const monthlyData = () => {
  return {
    labels: [
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
    ],
    datasets: { label: "detail", data: [50, 20, 10, 22, 50, 10, 40, 50, 20, 10, 22, 50] },
  };
};

export const generateChartTitle = (title) => {
  const mapper = {
    "today-essay": "일별 에세이 추이 차트",
    "total-essay": "달별 에세이 추이 차트",
    "today-users": "일별 유저 추이 차트 세팅",
    "all-users": "총유저 변동폭 차트",
    "subscribe-users": "일별 구독 유저 변동폭 추이 차트",
  };
  return mapper[title];
};

export const settingChartData = (params, month) => {
  const mapper = {
    "today-essay": dailyData(month),
    "total-essay": monthlyData(),
    "today-users": dailyData(month),
    "all-users": monthlyData(),
    "subscribe-users": dailyData(month),
  };
  return mapper[params];
};
