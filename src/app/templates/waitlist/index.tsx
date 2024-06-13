"use client";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import {
  setCurrentTabList,
  Tab,
  setSearchClient,
} from "@/redux/waitlist/clientSlice";
import Table from "@/app/components/Table";
import Search from "@/app/components/Search";
import { SearchStyle } from "@/app/components/Search";
import dynamic from "next/dynamic";


const Modal = dynamic(() => import("@/app/components/Filter/Modal"));
const ColumnFilter = dynamic(() => import("@/app/components/ColumnFilter"));

const Waitlist = () => {
  const { waitlistTabs, currentTabSlug } = useSelector(
    (state: RootState) => state.waitlist,
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (query: string) => {
    dispatch(setSearchClient(query));
  };
  const [isModalOpen, setModalOpen] = useState(false);
  const [filterColumnDropdown, setFilterColumn] = useState(false);

  // Custom Search componenet style
  const classNames: SearchStyle = {
    form: "relative rounded-sm bg-white px-[35px] py-[5px] shadow-md",
    iconContainer:
      "pointer-events-none absolute inset-y-0 left-[16px] flex items-center pr-3",
    icon: "w-[12px] h-[12px]",
    iconPath: "stroke-[#64748B]",
    input:
      "w-full text-[12px] font-[500] leading-[20px] text-[#374151] outline-none placeholder:text-[#94A3B8]",
  };

  //Table visible columns
  const [visibleColumns, setVisibleColumns] = useState<string[]>([
    "orderCreatedOn",
    "payer",
    "status",
    "email",
    "payerPhone",
    "service",
    "scheduled",
  ]);

  //Set table columns
  const handleApply = (selectedColumns: string[]) => {
    setVisibleColumns(selectedColumns);
    setFilterColumn(false);
  };

  return (
    <div className="overflow-auto bg-[#F8FAFC] max-md:mx-auto max-md:w-[90%] md:h-screen md:px-[8px] md:pb-[24px] md:pt-[8px]">
      <div className="mx-auto w-full rounded-[6px] bg-white pb-[12px] pt-[14px] shadow-md md:px-[16px]">
        <h1 className="mb-[20px] text-[24px] font-[600] leading-[32px] text-[#334155] md:mb-[26px] md:text-[20px] md:leading-[28px]">
          Waitlist
        </h1>

        {/* Tab filter section start */}
        <nav
          aria-label="Filter options"
          className="mb-[30px] sm:w-[90%] lg:max-w-full xl:mb-[16px] xl:w-[1108px]"
        >
          <ul
            role="tablist"
            className="flex w-full gap-x-[5px] md:gap-x-[15px]"
          >
            {waitlistTabs.map((element: Tab, index: number) => (
              <li
                key={index}
                role="tab"
                aria-label={`${element.title} filter, ${element.count} items`}
                aria-selected={
                  currentTabSlug === element.slug ? "true" : "false"
                }
                className="flex-1"
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

        {/* Custom filter section start */}
        <div className="relative mb-[24px]">
          <ColumnFilter
            onApply={handleApply}
            filterColumnDropdown={filterColumnDropdown}
          />
          <div className="relative flex items-center">
            <button
              onClick={() => setModalOpen(!isModalOpen)}
              aria-label="Add filter"
              className="relative mr-[5px] flex items-center gap-x-[6px] rounded-[6px] bg-[#F1F5F9] px-[12px] py-[8px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M14.6667 2H1.33337L6.66671 8.30667V12.6667L9.33337 14V8.30667L14.6667 2Z"
                  stroke="#334155"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="hidden text-[12px] font-[500] capitalize leading-[20px] text-[#334155] md:block">
                add filter
              </span>
            </button>
            <div className="ml-auto">
              <div className="flex items-center gap-x-[10px] sm:gap-x-[26px]">
                <Search
                  onSearch={handleSearch}
                  classNames={classNames}
                  placeholder="Search Clients"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-label="Refresh table"
                  tabIndex={0}
                >
                  <path
                    d="M2 1.33337V5.33337H6"
                    stroke="#334155"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 8.00003C13.9989 6.84224 13.6629 5.70948 13.0325 4.73839C12.4021 3.76729 11.5041 2.99934 10.447 2.52715C9.38987 2.05497 8.2187 1.89873 7.07476 2.07727C5.93082 2.2558 4.86297 2.7615 4 3.53336L2 5.33336"
                    stroke="#334155"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 14.6666V10.6666H10"
                    stroke="#334155"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 8C2.00105 9.15779 2.33707 10.2905 2.9675 11.2616C3.59794 12.2327 4.49588 13.0007 5.55301 13.4729C6.61013 13.9451 7.7813 14.1013 8.92524 13.9228C10.0692 13.7442 11.137 13.2385 12 12.4667L14 10.6667"
                    stroke="#334155"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  className="cursor-pointer"
                  onClick={() => setFilterColumn(!filterColumnDropdown)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-label="Edit table columns"
                  aria-haspopup="true"
                  tabIndex={0}
                >
                  <path
                    d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z"
                    stroke="#334155"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 2V14"
                    stroke="#334155"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-label="Download table"
                  tabIndex={0}
                >
                  <path
                    d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10M4.66667 6.66667L8 10M8 10L11.3333 6.66667M8 10V2"
                    stroke="#334155"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            {<Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />}
          </div>
        </div>
        {/* Custom filter section end */}

        <Table visibleColumns={visibleColumns} />
      </div>
    </div>
  );
};

export default Waitlist;
