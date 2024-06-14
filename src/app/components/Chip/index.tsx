import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import {
  applyFilter,
  removeScheduledDuration,
  removePeople,
  removeService,
  removeStatusType,
  removeServiceType,
} from "@/redux/waitlist/clientSlice";

const Chip = () => {
  const { chip, duration } = useSelector((state: RootState) => state.waitlist);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <ul className="mx-[16px] hidden max-w-[40%] items-center overflow-x-scroll lg:flex xl:max-w-[50%]">
      {chip.durationChip && duration.selectedLabel !== "all" && (
        <li className="flex max-h-[36px] max-w-[142px] items-center gap-x-[10px] rounded-[6px] bg-[#F8FAFC] py-[8px] pl-[16px] pr-[8px]">
          <span className="truncate text-[14px] font-[500] capitalize leading-[20px] text-[#64748B]">
            {duration.selectedTitle || "Name Missing"}
          </span>
          <button
            onClick={() => {
              dispatch(removeScheduledDuration());
              dispatch(applyFilter());
            }}
            className="cursor-pointer bg-[#F1F5F9] p-[6px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                stroke="#71717A"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </li>
      )}
      {chip.peopleChip.length > 0 &&
        chip.peopleChip.map((people: string, index: number) => {
          return (
            <li
              key={index}
              className="flex max-h-[36px] max-w-[142px] items-center gap-x-[10px] rounded-[6px] bg-[#F8FAFC] py-[8px] pl-[16px] pr-[8px]"
            >
              <span className="truncate text-[14px] font-[500] capitalize leading-[20px] text-[#64748B]">
                {people || "Name Missing"}
              </span>
              <button
                onClick={() => {
                  dispatch(
                    removePeople({
                      value: people,
                      removeType: "people",
                    }),
                  );
                  dispatch(applyFilter());
                }}
                className="cursor-pointer bg-[#F1F5F9] p-[6px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                    stroke="#71717A"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </li>
          );
        })}
      {chip.seviceByNameChip.length > 0 &&
        chip.seviceByNameChip.map((service: string, index: number) => {
          return (
            <li
              key={index}
              className="flex max-h-[36px] max-w-[142px] items-center gap-x-[10px] rounded-[6px] bg-[#F8FAFC] py-[8px] pl-[16px] pr-[8px]"
            >
              <span className="truncate text-[14px] font-[500] capitalize leading-[20px] text-[#64748B]">
                {service || "Name Missing"}
              </span>
              <button
                onClick={() => {
                  dispatch(
                    removeService({
                      value: service,
                      removeType: "service",
                    }),
                  );
                  dispatch(applyFilter());
                }}
                className="cursor-pointer bg-[#F1F5F9] p-[6px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                    stroke="#71717A"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </li>
          );
        })}
      {chip.serviceType && (
        <li className="flex max-h-[36px] max-w-[142px] items-center gap-x-[10px] rounded-[6px] bg-[#F8FAFC] py-[8px] pl-[16px] pr-[8px]">
          <span className="truncate text-[14px] font-[500] capitalize leading-[20px] text-[#64748B]">
            {chip.serviceType || "Name Missing"}
          </span>
          <button
            onClick={() => {
              dispatch(removeServiceType());
              dispatch(applyFilter());
            }}
            className="cursor-pointer bg-[#F1F5F9] p-[6px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                stroke="#71717A"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </li>
      )}
      {chip.statusType && (
        <li className="flex max-h-[36px] max-w-[142px] items-center gap-x-[10px] rounded-[6px] bg-[#F8FAFC] py-[8px] pl-[16px] pr-[8px]">
          <span className="truncate text-[14px] font-[500] capitalize leading-[20px] text-[#64748B]">
            {chip.statusType || "Name Missing"}
          </span>
          <button
            onClick={() => {
              dispatch(removeStatusType());
              dispatch(applyFilter());
            }}
            className="cursor-pointer bg-[#F1F5F9] p-[6px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                stroke="#71717A"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </li>
      )}
    </ul>
  );
};

export default Chip;
