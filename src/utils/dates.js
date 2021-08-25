export const getBirtDay = (years = 0, month = 0, days = 0) => {
  years = Number(years);
  month = Number(month);
  days = Number(days);
  const now = new Date();
  const totalMonth = years * 12 + month;
  now.setMonth(now.getMonth() - totalMonth);
  const getYear = now.getFullYear();
  const getMonth = now.getMonth() + 1;
  const getDay = now.getDate();
  if (years <= 0 && month <= 0 && days > 0 && days < getDay) {
    const newDate =
      now.getMonth() < 9
        ? `${now.getFullYear()}-0${now.getMonth() + 1}-${getDay - days}`
        : `${now.getFullYear()}-${now.getMonth() + 1}-${getDay - days}`;
    return newDate;
  }
  const newDate =
    getMonth < 10
      ? `${getYear}-0${getMonth}-${getDay}`
      : `${getYear}-${getMonth}-${getDay}`;
  return newDate;
};

export const getAge = (date) => {
  const fulldate = new Date(date);
  const now = new Date();
  var months;
  months = (now.getFullYear() - fulldate.getFullYear()) * 12;
  months -= fulldate.getMonth();
  months += now.getMonth();
  const yearsOp = months / 12;
  const years = yearsOp > 0 ? Math.trunc(yearsOp) : 0;
  const exactMonths = months - 12 * years;
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffDays = Math.round(Math.abs((now - fulldate) / oneDay));
  if (exactMonths === 0) {
    return {
      months: exactMonths,
      years,
      days: diffDays,
    };
  }
  return {
    months: exactMonths,
    years,
    days: 0,
  };
};

export const formatAge = (y, m, d) => {
  y = Number(y);
  m = Number(m);
  d = Number(d);
  if (y <= 0 && m <= 0 && d > 0) {
    return d > 1 ? `${d} dias` : `${d} dia`;
  }
  if (y > 0 && m > 0) {
    if (y > 1 && m > 1) {
      return `${y} años ${m} meses`;
    }
    if (y === 1 && m === 1) {
      return `${y} año ${m} mes`;
    } else if (y === 1 && m > 1) {
      return `${y} año ${m} meses`;
    } else if (y > 1 && m === 1) {
      return `${y} años ${m} mes`;
    }
  } else if (y > 0 && m === 0) {
    return y > 1 ? y + " años" : y + " año";
  } else if (y === 0 && m > 0) {
    return m > 1 ? m + " meses" : m + " mes";
  }
};

export const validateDate = (date) => {
  const now = new Date();
  const nowDay = now.getDate();
  const nowMonth = now.getMonth();
  const nowYear = now.getFullYear();
  const theDate = new Date(date);
  const oDay = theDate.getDate() + 1;
  const oMonth = theDate.getMonth();
  const oYear = theDate.getFullYear();
  if (oDay < nowDay && oMonth === nowMonth) {
    return false;
  } else if (oMonth < nowMonth) {
    return false;
  } else if (oYear < nowYear) {
    return false;
  }
  return true;
};
