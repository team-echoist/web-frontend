export const generateUrl = (route, month) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = month ? month : new Date().getMonth() + 1;
  const url = {
    "today-essay": {
      url: "/essays/daily",
      params: { year: currentYear, month: currentMonth },
    },
    "total-essay": { url: "/essays/monthly", params: { year: currentYear } },
    "today-users": {
      url: "/users/daily",
      params: { year: currentYear, month: currentMonth },
    },
    "all-users": { url: "/users/monthly", params: { year: currentYear } },
    "subscribe-users": {
      url: "/payments/daily",
      params: { year: currentYear, month: currentMonth },
    },
  };

  return url[route];
};
