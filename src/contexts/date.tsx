import dayjs, { Dayjs } from "dayjs";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

type DateContextValue = {
  date: Dayjs;
  firstDay: Dayjs;
  lastDay: Dayjs;
  setDate: Dispatch<SetStateAction<Dayjs>>;
  nextMonth: () => void;
  prevMonth: () => void;
  now: () => void;
};

const DateContext = createContext<DateContextValue | null>(null);

const DateProvider = DateContext.Provider;

const useDate = (): DateContextValue => {
  const [date, setDate] = useState(dayjs());

  const firstDay = useMemo(() => {
    let tempDate = dayjs(date);
    tempDate = tempDate.set("date", 1);
    tempDate = tempDate.set("hour", 0);
    tempDate = tempDate.set("minute", 0);
    tempDate = tempDate.set("second", 0);
    tempDate = tempDate.set("millisecond", 0);
    return tempDate;
  }, [date]);

  const lastDay = useMemo(() => {
    let tempDate = dayjs(date);
    tempDate = tempDate.add(1, "month");
    tempDate = tempDate.set("date", 1);
    tempDate = tempDate.subtract(1, "date");
    tempDate = tempDate.set("hour", 0);
    tempDate = tempDate.set("minute", 0);
    tempDate = tempDate.set("second", 0);
    tempDate = tempDate.set("millisecond", 0);

    return tempDate;
  }, [date]);

  const nextMonth = () => {
    setDate((date) => date.add(1, "months"));
  };

  const prevMonth = () => {
    setDate((date) => date.subtract(1, "months"));
  };

  const now = () => {
    setDate(dayjs());
  };

  return {
    date,
    firstDay,
    lastDay,
    setDate,
    nextMonth,
    prevMonth,
    now,
  };
};

const useDateContext = () => {
  const context = useContext(DateContext);

  if (!context) {
    throw Error("useDateContext can be used inside DateProvider");
  }

  return context;
};

export { DateContext, DateProvider, useDate, useDateContext };
export type { DateContextValue };
