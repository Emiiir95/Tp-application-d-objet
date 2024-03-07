import dayjs from 'dayjs';

export const formatDate = (date?: Date): string => {
  if (date) {
    return dayjs(date).format('YYYY-MM-DD');
  }
  return '';
};

export const formatDateMonthAndYear = (date?: Date): string => {
  if (date) {
    return dayjs(date).format('D MMMM YYYY');
  }
  return '';
};

export const getSelectedYears = (value: number): any => {
  const selectedYears = [
    {
      id: 0,
      value: 'Année'
    }
  ];
  const yearOfMoment = dayjs().get('year');
  for (let index = 0; value + index <= yearOfMoment; index++) {
    selectedYears.push({
      id: index + 1,
      value: (yearOfMoment - index).toString()
    });
  }
};
