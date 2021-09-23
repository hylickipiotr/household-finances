import dayjs from "dayjs";

type GetLastDayMonth = (year: number, month: number) => number;

const getLastDayMonth: GetLastDayMonth = (year, month) =>
  dayjs(new Date(year, month + 1))
    .subtract(1, "date")
    .date();

export { getLastDayMonth };
