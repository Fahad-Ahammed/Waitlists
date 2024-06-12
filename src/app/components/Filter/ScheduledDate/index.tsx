import { useState } from "react";

type Duration = {
  label: string;
  title: string;
  value: string;
};

const ScheduledDate = () => {
  const [selectedDuration, setDuration] = useState<Duration>({
    title: "All time",
    label: "all",
    value: "",
  });
  const [isDropDownOpen, setDropDown] = useState<boolean>(false);

  const duration: Duration[] = [
    {
      label: "all",
      title: "All time",
      value: "",
    },
    {
      label: "custom",
      title: "Custom",
      value: "",
    },
    {
      label: " last30Days",
      title: "Last 30 days",
      value: "",
    },
    {
      label: "thisMonth",
      title: "This month",
      value: "",
    },
    {
      label: "lastMonth",
      title: "Last month",
      value: "",
    },
    {
      label: "thisQuarter",
      title: "This quarter",
      value: "",
    },
    {
      label: "2quarterAgo",
      title: "2 quarter ago",
      value: "",
    },
  ];

  return (
    <>
      <div
        id="tab-scheduled-date"
        role="tabpanel"
        aria-labelledby="tab-button-scheduled-date"
      >
        <div className="relative">
          <button
            onClick={() => setDropDown(!isDropDownOpen)}
            id="schedule-date-button"
            className="mb-[20px] flex w-full items-center justify-between rounded-[8px] border border-[#E4E4E7] bg-transparent px-[12px] py-[8px] text-[14px] font-[400] capitalize leading-[20px] text-[#09090B]"
          >
            <span>{selectedDuration.title}</span>
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
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div
            id="dropdown-states"
            className={`${isDropDownOpen ? "visible translate-y-[5px] opacity-100" : "pointer-events-none invisible translate-y-[-10px] opacity-0"} absolute left-0 top-[100%] z-[6] h-[200px] w-full overflow-scroll rounded-[6px] border border-[#E4E4E7] bg-white p-[4px] shadow-sm duration-[150ms] ease-in-out sm:h-[232px]`}
          >
            <ul aria-labelledby="schedule-date-button">
              {duration.map((duration: Duration, index: number) => {
                return (
                  <li
                    onClick={() => {
                      setDuration(duration);
                      duration.label !== selectedDuration.label &&
                        setDropDown(false);
                    }}
                    key={index}
                  >
                    <button className="flex w-full items-center justify-between px-[8px] py-[6px] text-[14px] font-[400] leading-[20px] text-[#334155] xl:hover:bg-gray-100">
                      {duration.title}
                      <svg
                        className={`${selectedDuration.label === duration.label ? "block" : "hidden"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M13.3334 4L6.00002 11.3333L2.66669 8"
                          stroke="#71717A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {selectedDuration.label == "custom" && (
          <div className="flex gap-4">
            <div>
              <label htmlFor="from-date" className="mb-2 block">
                From
              </label>
              <input
                id="from-date"
                type="date"
                className="w-full rounded border p-2"
              />
            </div>
            <div>
              <label htmlFor="to-date" className="mb-2 block">
                To
              </label>
              <input
                id="to-date"
                type="date"
                className="w-full rounded border p-2"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ScheduledDate;
