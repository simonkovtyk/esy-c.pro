const getAge = (): number => {
  const currentDate: Date = new Date();
  const startDate: Date = new Date("2005-03-15");
  let offset: number = 1;

  if (currentDate.getMonth() > startDate.getMonth())
    offset = 0;

  return currentDate.getFullYear() - startDate.getFullYear() - offset;
};

export {
  getAge
};

