import dayjs from "dayjs";
import * as React from "react";
import { createContext } from "src/helpers/createContext";

type Date = { month: number; year: number };
type DateContextValue = {
  month: number;
  monthName: string;
  year: number;
  isoDate: string;
  previousMonth: () => void;
  nextMonth: () => void;
  goToCurrentMonth: () => void;
};

const getMonthName = (month: number) =>
  [
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
  ][month];

const useDate = (): DateContextValue => {
  const now = dayjs();
  const [date, setDate] = React.useState<Date>({
    month: now.month(),
    year: now.year(),
  });
  const monthName = React.useMemo(() => getMonthName(date.month), [date.month]);
  const isoDate = React.useMemo(
    () => dayjs.utc(new Date(date.year, date.month)).toISOString(),
    [date]
  );

  const previousMonth = () => {
    setDate(({ month, year }) => {
      if (date.month === 0) {
        return {
          month: 11,
          year: year - 1,
        };
      }

      return {
        month: month - 1,
        year,
      };
    });
  };

  const nextMonth = () => {
    setDate(({ month, year }) => {
      if (date.month === 11) {
        return {
          month: 0,
          year: year + 1,
        };
      }

      return {
        month: month + 1,
        year,
      };
    });
  };

  const goToCurrentMonth = () => {
    setDate(() => {
      return {
        month: now.month(),
        year: now.year(),
      };
    });
  };

  return {
    month: date.month,
    monthName,
    year: date.year,
    isoDate,
    nextMonth,
    previousMonth,
    goToCurrentMonth,
  };
};

const [DateContext, useDateContext] = createContext<DateContextValue>("Date");

const DateProvider: React.FC = ({ children }) => {
  const monthContext = useDate();

  return (
    <DateContext.Provider value={monthContext}>{children}</DateContext.Provider>
  );
};

export { DateContext, DateProvider, useDateContext };
