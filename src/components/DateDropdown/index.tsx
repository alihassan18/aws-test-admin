import { useEffect, useState } from "react";
// import 'react-datepicker/dist/react-datepicker.css';
import OutSideClick from "react-outside-click-handler";

interface DateDropdownProps {
  onSelectDate: Function;
  selectedDateProp?: Date;
}

const DateDropdown: React.FC<DateDropdownProps> = ({
  onSelectDate,
  selectedDateProp,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    if (selectedDateProp) {
      setSelectedDate(selectedDateProp);
    }
  }, [selectedDateProp]);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    onSelectDate(date);
    setDropdownOpen(false);

    const today = new Date();
    if (date.toDateString() === today.toDateString()) {
      setSelectedDate(null);
    }
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const today = new Date();
  let next30Days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return date;
  });

  if (next30Days.some((day) => day.toDateString() === today.toDateString())) {
    next30Days = next30Days.filter(
      (day) => day.toDateString() !== today.toDateString()
    );
  }

  return (
    <div className="relative ">
      <button
        type="button"
        className="
          focus:shadow-outline  flex w-full items-center justify-between rounded-md border  p-2 text-sm  focus:outline-none focus:ring-0 border-borderColor text-secondary  focus:border-primary
        "
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {selectedDate === null || isToday(selectedDate)
          ? "Today"
          : selectedDate.toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
        <i className="icon-calender  text-secondary"></i>
      </button>
      <OutSideClick
        onOutsideClick={() => {
          setDropdownOpen(false);
        }}
      >
        {dropdownOpen && (
          <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg">
            <div className="AtShadowEffect cursor-pointer overflow-hidden rounded-md bg-bgColor">
              <div className="AtScrollHide h-[18.8rem] overflow-y-auto py-1 ">
                <div
                  className={`flex cursor-pointer justify-center p-3 font-normal text-white hover:bg-darkColor ${
                    selectedDate === null || isToday(selectedDate)
                      ? "bg-darkColor text-white"
                      : ""
                  }`}
                  onClick={() => handleDateChange(today)}
                >
                  Today
                </div>
                {next30Days.map((day) => (
                  <div
                    key={day.toDateString()}
                    className={`flex cursor-pointer justify-center p-3 font-normal text-white hover:bg-darkColor ${
                      selectedDate !== null &&
                      !isToday(selectedDate) &&
                      selectedDate.toDateString() === day.toDateString()
                        ? "bg-darkColor text-white"
                        : ""
                    }`}
                    onClick={() => handleDateChange(day)}
                  >
                    {day.toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </OutSideClick>
    </div>
  );
};

export default DateDropdown;
