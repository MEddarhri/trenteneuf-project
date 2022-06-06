//get the day that the month begin with
export const getIndexOfFirstDayInMonth = (dateValue) => {
  let date = new Date(dateValue.getFullYear(), dateValue.getMonth(), 1);

  if (date.getDay() === 0) {
    return 6;
  } else {
    return date.getDay() - 1;
  }
};

//get the day that the month end with
export const getIndexOfLastDayInMonth = (dateValue) => {
  var lastDayOfMonth = new Date(
    dateValue.getFullYear(),
    dateValue.getMonth() + 1,
    0
  );
  if (lastDayOfMonth.getDay() === 0) {
    return 6;
  } else {
    return lastDayOfMonth.getDay() - 1;
  }
};

// get remaining days in the last month
export const getDaysRemainingFromLastMonth = (dateValue) => {
  let arrayDays = [];
  let date = new Date(dateValue.getFullYear(), dateValue.getMonth(), 1);

  let days = 86400000; //number of milliseconds in a day

  for (let index = getIndexOfFirstDayInMonth(dateValue); index > 0; index--) {
    let finalDate = new Date(date - index * days);
    arrayDays.push({
      year: finalDate.getFullYear(),
      month: finalDate.getMonth() + 1,
      monthString: finalDate.toLocaleString('default', { month: 'long' }),
      day: finalDate.getDate(),
      targeted: false,
    });
  }
  return arrayDays;
};

//get All days in month
export const getAllDaysInMonth = (dateValue) => {
  const lastDay = new Date(
    dateValue.getFullYear(),
    dateValue.getMonth() + 1,
    0
  );

  let arrayAllDays = [];
  for (let index = 1; index <= lastDay.getDate(); index++) {
    arrayAllDays.push({
      year: dateValue.getFullYear(),
      month: dateValue.getMonth() + 1,
      monthString: dateValue.toLocaleString('default', { month: 'long' }),
      day: index,
      targeted: true,
    });
  }
  return arrayAllDays;
};

// get remaining days in the next month
export const getDaysRemainingFromNextMonth = (dateValue) => {
  let arrayDays = [];
  let date = new Date(dateValue.getFullYear(), dateValue.getMonth() + 1, 1);
  let count = 1;

  for (
    let index = getIndexOfLastDayInMonth(dateValue) + 1;
    index <= 6;
    index++
  ) {
    arrayDays.push({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      monthString: date.toLocaleString('default', { month: 'long' }),
      day: count,
      targeted: false,
    });
    count++;
  }

  return arrayDays;
};
