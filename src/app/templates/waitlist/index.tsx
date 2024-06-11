"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setCurrentTabList, Tab } from "@/redux/waitlist/clientSlice";
import Table from "@/app/components/Table";

const Waitlist = () => {
  const { waitlistTabs, currentTabSlug } = useSelector(
    (state: RootState) => state.waitlist,
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="overflow-auto bg-[#F8FAFC] max-md:mx-auto max-md:w-[90%] md:flex md:h-screen md:flex-col md:px-[8px] md:pb-[24px] md:pt-[8px]">
      <div className="mx-auto w-full grow rounded-[6px] bg-white pb-[12px] pt-[14px] shadow-md md:px-[16px]">
        <h1 className="mb-[20px] text-[24px] font-[500] leading-[32px] text-[#334155] md:mb-[26px] md:text-[20px] md:leading-[28px]">
          Waitlist
        </h1>
        {/* Tab filter section start */}
        <nav
          aria-label="Filter options"
          className="mb-[16px] sm:w-[90%] xl:w-[1108px]"
        >
          <ul
            role="tablist"
            className="flex w-full gap-x-[5px] md:gap-x-[15px]"
          >
            {waitlistTabs.map((element: Tab, index: number) => (
              <li
                className="flex-1"
                key={index}
                role="tab"
                aria-label={`${element.title} filter, ${element.count} items`}
                aria-selected={
                  currentTabSlug === element.slug ? "true" : "false"
                }
                aria-controls={`filter-panel-${element.title}`}
              >
                <button
                  onClick={() => {
                    dispatch(setCurrentTabList(element.slug));
                  }}
                  disabled={currentTabSlug === element.slug}
                  className={`${currentTabSlug === element.slug ? "border-[#64748B]" : "border-[#E2E8F0]"} flex w-full items-center gap-x-[6px] rounded-[6px] border px-[12px] py-[10px]`}
                >
                  <span className="text-[10px] font-[600] capitalize text-[#334155] md:text-[12px] md:leading-[20px]">
                    {element.title}
                  </span>
                  <span className="text-[8px] font-[500] leading-[12px] text-[#64748B] md:text-[10px] md:leading-[16px]">
                    {element.count}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {/* Tab filter seciton End */}
        <Table />
      </div>
    </div>
  );
};

export default Waitlist;
