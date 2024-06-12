"use client";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { ClientType } from "@/lib/data";
import { setCurrentPage } from "@/redux/waitlist/clientSlice";
import { format } from "date-fns";

const Table = () => {
  const { filteredWaitlist, currentPage } = useSelector(
    (state: RootState) => state.waitlist,
  );
  const dispatch = useDispatch<AppDispatch>();
  const [tableLimit, setLimit] = useState<number>(10);
  const [limitedTableData, setTableData] = useState<ClientType[]>([]);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3]);

  // Generates paginated data and updates the current table-page and table data.
  const dataGenerator = (page: number, limit: number) => {
    const totalEntries = filteredWaitlist.length;
    const totalPages = Math.ceil(totalEntries / limit);

    if (page > totalPages) {
      dispatch(setCurrentPage(totalPages));
      page = totalPages;
    }

    const tempData: ClientType[] = filteredWaitlist.slice(
      (page - 1) * limit,
      page * limit,
    );
    setTableData(tempData);
  };

  useEffect(() => {
    const updatePageNumbers = () => {
      const totalEntries = filteredWaitlist.length;
      const totalPages = Math.ceil(totalEntries / tableLimit);
      if (totalPages <= 3) {
        setPageNumbers(Array.from({ length: totalPages }, (_, i) => i + 1));
      } else if (currentPage === 1) {
        setPageNumbers([1, 2, 3]);
      } else if (currentPage === totalPages) {
        setPageNumbers([totalPages - 2, totalPages - 1, totalPages]);
      } else {
        setPageNumbers([currentPage - 1, currentPage, currentPage + 1]);
      }
    };
    updatePageNumbers();
    dataGenerator(currentPage, tableLimit);
  }, [currentPage, tableLimit, filteredWaitlist.length]);

  const incrementPage = () => {
    dispatch(setCurrentPage(1));
    setLimit(Math.min(filteredWaitlist.length, limitedTableData.length + 1));
  };

  const decrementPage = () => {
    dispatch(setCurrentPage(1));
    setLimit(Math.max(1, limitedTableData.length - 1));
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    if (event.key === "ArrowUp") {
      incrementPage();
      event.preventDefault();
    } else if (event.key === "ArrowDown") {
      decrementPage();
      event.preventDefault();
    }
  };
  {
    return limitedTableData.length > 0 ? (
      <>
        {/* table start */}
        <div className="md:mx-auo relative mb-[12px] max-h-[400px] overflow-auto rounded-lg border md:max-w-[1350px] lg:max-h-[500px]">
          <table className="relative w-[900px] table-fixed text-left xl:w-full">
            <thead className="sticky top-0 z-[4] border-b bg-[#F8FAFC] py-[8px] text-[12px] capitalize leading-[20px] text-[#64748B]">
              <tr role="row">
                <th
                  scope="col"
                  className="w-[14px] py-[12px] pl-[16px] pr-[30px]"
                  role="column header"
                >
                  <div className="flex w-[14px] items-center">
                    <input
                      id="checkbox-all"
                      type="checkbox"
                      className="relative h-[14px] w-[14px] shrink-0 cursor-pointer appearance-none rounded-[4px] border border-[#E5E7EB] shadow-sm checked:border-0 checked:bg-green-800"
                      aria-label="Select all rows"
                    />
                    <label htmlFor="checkbox-all" className="sr-only">
                      Select all rows
                    </label>
                  </div>
                </th>
                <th
                  scope="col"
                  className="w-[182px] pr-[16px] font-[500]"
                  role="column header"
                >
                  <div className="flex w-fit items-center gap-x-[4px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 1 12 12"
                      fill="none"
                    >
                      <path
                        d="M9.5 2H2.5C1.94772 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V3C10.5 2.44772 10.0523 2 9.5 2Z"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 1V3"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 1V3"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.5 5H10.5"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>created on</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="w-[152px] pr-[16px] font-[500]"
                  role="column header"
                >
                  <div className="flex items-center gap-x-[4px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 1 12 12"
                      fill="none"
                    >
                      <path
                        d="M9.5 10.5V9.5C9.5 8.96957 9.28929 8.46086 8.91421 8.08579C8.53914 7.71071 8.03043 7.5 7.5 7.5H4.5C3.96957 7.5 3.46086 7.71071 3.08579 8.08579C2.71071 8.46086 2.5 8.96957 2.5 9.5V10.5"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 5.5C7.10457 5.5 8 4.60457 8 3.5C8 2.39543 7.10457 1.5 6 1.5C4.89543 1.5 4 2.39543 4 3.5C4 4.60457 4.89543 5.5 6 5.5Z"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>payer</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="w-[136px] pr-[16px] font-[500]"
                  role="column header"
                >
                  <div className="flex items-center gap-x-[4px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_18317)">
                        <path
                          d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 6.5C6.27614 6.5 6.5 6.27614 6.5 6C6.5 5.72386 6.27614 5.5 6 5.5C5.72386 5.5 5.5 5.72386 5.5 6C5.5 6.27614 5.72386 6.5 6 6.5Z"
                          stroke="#64748B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_18317">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>status</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="w-[200px] pr-[16px] font-[500]"
                  role="column header"
                >
                  <div className="flex items-center gap-x-[4px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 4.5H10"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 7.5H10"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 1.5L4 10.5"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 1.5L7 10.5"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>email</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="w-[146px] pr-[16px] font-[500]"
                  role="column header"
                >
                  <div className="flex items-center gap-x-[4px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 4.5H10"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 7.5H10"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 1.5L4 10.5"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 1.5L7 10.5"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>payer phone</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="w-[200px] pr-[16px] font-[500]"
                  role="column header"
                >
                  <div className="flex items-center gap-x-[4px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 4.5H10"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 7.5H10"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 1.5L4 10.5"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 1.5L7 10.5"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>services</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="w-[180px] pr-[16px] font-[500]"
                  role="column header"
                >
                  <div className="flex items-center gap-x-[4px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 1 12 12"
                      fill="none"
                    >
                      <path
                        d="M9.5 2H2.5C1.94772 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V3C10.5 2.44772 10.0523 2 9.5 2Z"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 1V3"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 1V3"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.5 5H10.5"
                        stroke="#64748B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>scheduled</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {limitedTableData.map((item: ClientType, index: number) => {
                return (
                  <React.Fragment key={index}>
                    <tr className="border-b bg-white">
                      <td className="w-fit px-[16px]">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-1"
                            type="checkbox"
                            className="relative h-[14px] w-[14px] shrink-0 cursor-pointer appearance-none rounded-[4px] border border-[#E5E7EB] shadow-sm checked:border-0 checked:bg-green-800"
                          />
                          <label htmlFor="checkbox-table-1" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="py-[10px] pr-[16px] text-[12px] font-[500] leading-[20px] text-[#374151]">
                        {format(
                          new Date(item.entryDate),
                          "EEE, dd MMM yyyy h:mm a",
                        )}
                      </td>
                      <td className="py-[10px] pr-[16px] text-[12px] font-[500] leading-[20px] text-[#374151]">
                        {item.payer}
                      </td>
                      <td className="py-[10px] pr-[16px]">
                        <div
                          className={`flex w-fit items-center gap-x-[5px] rounded-[16px] bg-[#EFF6FF] px-[7px] text-[12px] font-[500] leading-[20px] ${item.status.toLowerCase() == "active" ? "text-[#15803D]" : item.status.toLowerCase() == "inactive" ? "text-[#334155]" : "text-[#3B82F6]"}`}
                        >
                          <svg
                            width="6"
                            height="6"
                            viewBox="0 0 6 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="3"
                              cy="3"
                              r="3"
                              fill={
                                item.status.toLowerCase() == "active"
                                  ? "#15803D"
                                  : item.status.toLowerCase() == "inactive"
                                    ? "#334155"
                                    : "#3B82F6"
                              }
                            />
                          </svg>
                          <span>{item.status}</span>
                        </div>
                      </td>
                      <td className="truncate py-[10px] pr-[16px] text-[12px] font-[500] leading-[20px] text-[#374151]">
                        {item.email}
                      </td>
                      <td className="truncate py-[10px] pr-[16px] text-[12px] font-[500] leading-[20px] text-[#374151]">
                        {item.phone}
                      </td>
                      <td className="w-[20px] truncate py-[10px] pr-[16px] text-[12px] font-[500] leading-[20px] text-[#374151]">
                        {item.services}
                      </td>
                      <td className="py-[10px] pr-[16px] text-[12px] font-[500] leading-[20px] text-[#374151]">
                        {item.scheduled}
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* table end */}

        {/* pagination section start */}
        <div className="items-center justify-between md:flex md:max-w-[1350px] md:pr-[40px]">
          <div className="mb-[20px] flex items-center gap-x-[10px] md:mb-0 md:max-w-[210px] md:gap-x-[2px]">
            <span className="text-[14px] leading-[20px] text-[#64748B]">
              Displaying
            </span>
            <div className="flex items-center justify-center gap-[6px] rounded-[6px] bg-[#F8FAFC] px-[12px] py-[4px]">
              <div className="flex items-center gap-x-[10px] md:gap-x-0">
                <button
                  className="h-[30px] px-[6px] md:hidden"
                  onClick={decrementPage}
                  aria-label="Decrease table limit"
                >
                  <span className={`block h-[2px] w-[10px] bg-black`}></span>
                </button>
                <div
                  className="h-[24px] w-[24px] text-center text-[14px] leading-[24px] text-[#334155]"
                  onKeyDown={handleKeyDown}
                  aria-label="Number of rows to display"
                  tabIndex={0}
                >
                  {Math.min(tableLimit, limitedTableData.length)}
                </div>
                <label className="sr-only" htmlFor="quantity">
                  Quanitity
                </label>
                <button
                  className="h-[30px] px-[6px] md:hidden"
                  onClick={incrementPage}
                  aria-label="Increase table limit"
                >
                  <span className={`block h-[2px] w-[10px] bg-black`}></span>
                  <span
                    className={`block h-[2px] w-[10px] translate-y-[-2px] rotate-90 bg-black`}
                  ></span>
                </button>
              </div>
              <div className="hidden flex-col gap-y-[4px] md:flex">
                <button
                  onClick={incrementPage}
                  aria-label="Increase table limit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="5"
                    viewBox="0 0 8 5"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0.666626 4.00008L3.99996 0.666748L7.33329 4.00008"
                      stroke="#334155"
                      strokeWidth="0.666667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={decrementPage}
                  aria-label="Decrease table limit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="5"
                    viewBox="0 0 8 5"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0.666626 1L3.99996 4.33333L7.33329 1"
                      stroke="#334155"
                      strokeWidth="0.666667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="text-[14px] font-[500] leading-[20px] text-[#64748B]">
              out of{" "}
              <span className="text-[#171B1F]">{filteredWaitlist.length}</span>
            </div>
          </div>
          <div className="flex items-center gap-x-2 py-[6px] md:px-[8px]">
            <button
              onClick={() => {
                dispatch(setCurrentPage(currentPage - 1));
                dataGenerator(currentPage - 1, tableLimit);
              }}
              disabled={currentPage == 1}
              className={`ml-auto flex md:ml-[unset] ${currentPage != 1 ? "cursor-pointer" : ""} items-center gap-x-[8px]`}
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
                  stroke="#334155"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[12px] leading-[20px] text-[#334155]">
                Previous
              </span>
            </button>
            <div>
              <div className="flex items-center gap-x-[2px] text-[12px] font-[500] leading-[20px] text-[#334155]">
                {pageNumbers.map((page, index: number) => {
                  return (
                    <button
                      onClick={() => {
                        dispatch(setCurrentPage(page));
                        dataGenerator(page, tableLimit);
                      }}
                      key={index}
                      className={`${currentPage == page ? "rounded-[6px] border border-[#E2E8F0] bg-[#FFFFFF]" : ""} cursor-pointer rounded-[6px] px-[12px] py-[6px] text-center`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>
            </div>
            <button
              onClick={() => {
                dispatch(setCurrentPage(currentPage + 1));
                dataGenerator(currentPage + 1, tableLimit);
              }}
              disabled={
                (currentPage - 1) * tableLimit + limitedTableData.length ==
                filteredWaitlist.length
              }
              className={`flex items-center gap-x-[8px]`}
            >
              <span className="text-[12px] leading-[20px] text-[#334155]">
                Next
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#334155"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* pagination section end */}
      </>
    ) : (
      <span className="capitalize">no result</span>
    );
  }
};

export default Table;
