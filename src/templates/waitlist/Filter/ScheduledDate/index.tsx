import { useState } from "react";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { CaptionProps, DayPicker, useNavigation } from "react-day-picker";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import {
  setSelectedDuration,
  setCustomDuration,
} from "@/redux/waitlist/clientSlice";

const ScheduledDate = () => {
  const { duration } = useSelector((state: RootState) => state.waitlist);
  const [isDropDownOpen, setDropDown] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div
        id="tab-scheduled-date"
        role="tabpanel"
        aria-labelledby="tab-button-scheduled-date"
      >
        <div className="relative z-[6]">
          <button
            onClick={() => setDropDown(!isDropDownOpen)}
            id="schedule-date-button"
            className="mb-[20px] flex w-full items-center justify-between rounded-[8px] border border-[#E4E4E7] bg-transparent px-[12px] py-[8px] text-[14px] font-[400] capitalize leading-[20px] text-[#09090B]"
          >
            <span>{duration.selectedTitle}</span>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#71717A"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            id="dropdown-states"
            className={`${isDropDownOpen ? "visible translate-y-[5px] opacity-100" : "pointer-events-none invisible translate-y-[-10px] opacity-0"} absolute left-0 top-[100%] h-[200px] w-full overflow-scroll rounded-[6px] border border-[#E4E4E7] bg-white p-[4px] shadow-sm duration-[150ms] ease-in-out sm:h-[232px]`}
          >
            <ul aria-labelledby="schedule-date-button">
              {duration.dropDown.map(
                (item: { label: string; title: string }, index: number) => {
                  return (
                    <li
                      onClick={() => {
                        item.label !== duration.selectedLabel &&
                          dispatch(setSelectedDuration(item));
                        item.label !== duration.selectedLabel &&
                          setDropDown(false);
                      }}
                      key={index}
                    >
                      <button className="flex w-full items-center justify-between px-[8px] py-[6px] text-[14px] font-[400] leading-[20px] text-[#334155] xl:hover:bg-gray-100">
                        {item.title}
                        <svg
                          className={`${duration.selectedLabel === item.label ? "block" : "hidden"}`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M13.3334 4L6.00002 11.3333L2.66669 8"
                            stroke="#71717A"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </li>
                  );
                },
              )}
            </ul>
          </div>
        </div>
        {duration.selectedLabel == "custom" && <Calendar />}
      </div>
    </>
  );
};

const Calendar = () => {
  type DatePicker = {
    label: string;
    date: Date | null | undefined;
    toggle: boolean;
  };
  const dispatch = useDispatch<AppDispatch>();
  function CustomCaptionComponent(props: CaptionProps) {
    const { goToMonth, nextMonth, previousMonth } = useNavigation();
    return (
      <div className="flex items-center justify-between">
        <button
          aria-label="Previous month"
          disabled={!previousMonth}
          onClick={() => previousMonth && goToMonth(previousMonth)}
          className="rounded-[6px] border border-[#E4E4E7] bg-white p-[10px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="#18181B"
              strokeWidth="1.33"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className="text-[14px] font-[500] leading-[20p] text-[#09090B]">
          {format(props.displayMonth, "MMMM")}
        </span>
        <button
          aria-label="Next month"
          disabled={!nextMonth}
          onClick={() => nextMonth && goToMonth(nextMonth)}
          className="rounded-[6px] border border-[#E4E4E7] bg-white p-[10px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeWidth="1.33"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    );
  }

  const { customDuration } = useSelector(
    (state: RootState) => state.waitlist.duration,
  );

  const [calendarToggle, setToggle] = useState<string | null>(null);

  const handleDateSelect = (date: Date | null, label: string) => {
    if (label === "from") {
      const toDate = null;
      dispatch(setCustomDuration({ from: date, to: toDate }));
    } else {
      const fromDate: Date | null = customDuration?.from ?? null;
      dispatch(setCustomDuration({ from: fromDate, to: date }));
    }
  };

  const datePicker: DatePicker[] = [
    {
      label: "from",
      date: customDuration?.from ?? null,
      toggle: calendarToggle === "from",
    },
    {
      label: "to",
      date: customDuration?.to ?? null,
      toggle: calendarToggle === "to",
    },
  ];

  const modifiersStyles = {
    selected: {
      color: "white",
      backgroundColor: "#18181B",
    },
    today: {
      backgroundColor: "#E2E8F0",
    },
  };

  return (
    <>
      <div>
        <ul className="flex gap-x-[20px]">
          {datePicker.map((item: DatePicker, index: number) => {
            const isDisabled = item.label === "to" && !customDuration?.from;
            return (
              <li
                key={index}
                className={`relative flex-1 ${isDisabled ? "cursor-not-allowed opacity-50" : ""}`}
              >
                <div className="mb-[6px] text-[12px] font-[500] capitalize leading-[20px] text-[#334155]">
                  {item.label}
                </div>
                <button
                  aria-expanded={item.toggle}
                  aria-controls={`${item.label}-calendar`}
                  onClick={() => {
                    if (!isDisabled) {
                      setToggle((prevState) =>
                        prevState === item.label ? null : item.label,
                      );
                    }
                    if (item.label === "to" && customDuration?.from) {
                      dispatch(
                        setSelectedDuration({
                          label: "custom",
                          title: "Custom",
                          customDuration: {
                            from: customDuration?.from,
                            to: customDuration?.to,
                          },
                        }),
                      );
                    }
                  }}
                  className="flex w-full items-center gap-x-[6px] rounded-[6px] border border-[#E2E8F0] px-[16px] py-[8px] shadow-sm"
                  disabled={isDisabled}
                >
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 1 16 16"
                    fill="none"
                  >
                    <path
                      d="M10.6667 1.33325V3.99992M5.33333 1.33325V3.99992M2 6.66659H14M3.33333 2.66659H12.6667C13.403 2.66659 14 3.26354 14 3.99992V13.3333C14 14.0696 13.403 14.6666 12.6667 14.6666H3.33333C2.59695 14.6666 2 14.0696 2 13.3333V3.99992C2 3.26354 2.59695 2.66659 3.33333 2.66659Z"
                      stroke="#475569"
                      strokeWidth="1.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className={`${item.date ? "text-[#475569]" : "text-[#71717A]"} text-[14px] font-[400] leading-[20px]`}
                  >
                    {item.date
                      ? format(item.date, "dd MMM yyyy")
                      : "Pick a Day"}
                  </span>
                </button>
                <div
                  id={`${item.label}-calendar`}
                  role="dialog"
                  aria-modal="true"
                  className={`${item.toggle ? "visible translate-y-[0px] opacity-100" : "invisible translate-y-[-10px] opacity-0"} ${item.label === "to" ? "right-0" : ""} absolute w-[248px] overflow-scroll rounded-[6px] border border-[#E4E4E7] bg-white shadow-md duration-[150ms] ease-in-out lg:w-fit`}
                >
                  <DayPicker
                    components={{
                      Caption: CustomCaptionComponent,
                    }}
                    mode="single"
                    selected={item.date ?? undefined}
                    onSelect={(date: any) => handleDateSelect(date, item.label)}
                    showOutsideDays
                    disabled={
                      item.label === "to" && customDuration?.from
                        ? { before: customDuration.from }
                        : undefined
                    }
                    modifiersStyles={modifiersStyles}
                    className={`max-h-[300px] text-[14px] leading-[20px] text-[#09090B] lg:max-h-[unset]`}
                    classNames={{
                      head_row: "flex mt-[10px]",
                      head_cell:
                        "w-[32px] h-[32px] text-center text-[14px] leading-[20px] text-[#71717A] font-[400]",
                      row: "flex w-full ",
                      cell: " w-[32px] rounded-[6px] hover:bg-gray-100 h-[32px] text-center text-[14px] leading-[20px] text-[#09090B] relative ",
                      day: "w-full h-full font-normal bg-blue-300",
                      day_range_end: "day-range-end",
                      day_selected: "rounded-[6px] text-white bg-[#18181B]",
                      day_today: "rounded-[6px]",
                      day_outside:
                        "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                      root: "p-[12px]",
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ScheduledDate;
