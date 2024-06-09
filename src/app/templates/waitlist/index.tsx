import React from "react";

type Entry = {
  entryDate: string;
  payer: string;
  status: string;
  email: string;
  phone: string;
  services: string;
  scheduled: string;
};

const Waitlist = () => {
  const data: Entry[] = [
    {
      entryDate: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Theodore T.C. Calvin",
      status: "Lead",
      email: "theodore@gmail.com",
      phone: "+91 966559186876",
      services: "Private Language Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      entryDate: "Sat, 06 Jan 2024 2:42 PM",
      payer: "Hannibal Smith",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      phone: "+91 966578632254",
      services: "Swim beginner for class new Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      entryDate: "Fri, 05 Jan 2024 2:42 PM",
      payer: "April Curtis",
      status: "Inactive",
      email: "aprilcurtis@gmail.com",
      phone: "+91 966558441503",
      services: "Fitness Session",
      scheduled: "Sat, 06 Jan 2024 2:42 PM",
    },
    {
      entryDate: "Thu, 04 Jan 2024 2:42 PM",
      payer: "Michael Knight",
      status: "Active",
      email: "smith@gmail.com",
      phone: "+91 966536605363",
      services: "Aerobics Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      entryDate: "Wed, 03 Jan 2024 2:42 PM",
      payer: "Templeton Peck",
      status: "Active",
      email: "michaelknight@gmail.com",
      phone: "+91 966503534287",
      services: "Boxing Session",
      scheduled: "Fri, 05 Jan 2024 2:42 PM",
    },
    {
      entryDate: "Tue, 02 Jan 2024 2:42 PM",
      payer: "Theodore T.C. Calvin",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      phone: "+91 966530269650",
      services: "Kids play Session",
      scheduled: "Thu, 04 Jan 2024 2:42 PM",
    },
    {
      entryDate: "Mon, 01 Jan 2024 2:42 PM",
      payer: "Michael Knight",
      status: "Lead",
      email: "Mikeh@gmail.com",
      phone: "+91 966566182220",
      services: "Appointment Session",
      scheduled: "Sat, 06 Jan 2024 2:42 PM",
    },
    {
      entryDate: "Sun, 30 Dec 2023 2:42 PM",
      payer: "Mike Torello",
      status: "Lead",
      email: "hannibalsmith@gmail.com",
      phone: "+91 966544628109",
      services: "Exercise Session",
      scheduled: "Sat, 29 Dec 2023 2:42 PM",
    },
    {
      entryDate: "Sat, 29 Dec 2023 2:42 PM",
      payer: "Templeton Peck",
      status: "Lead",
      email: "templeto@gmail.com",
      phone: "+91 966594805058",
      services: "Session Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      entryDate: "Wed, 28 Dec 2023 2:42 PM",
      payer: "Peter Thornton",
      status: "Inactive",
      email: "peterthornton@gmail.com",
      phone: "+91 966558441497",
      services: "Boxing Session",
      scheduled: "Wed, 03 Jan 2024 2:42 PM",
    },
    {
      entryDate: "Sun, 26 Dec 2023 2:42 PM",
      payer: "Lynn Tanner",
      status: "Inactive",
      email: "Lynn@gmail.com",
      phone: "+91 966506424822",
      services: "Fitness Session",
      scheduled: "Mon, 27 Dec 2023 2:42 PM",
    },
    {
      entryDate: "Sun, 25 Dec 2023 2:42 PM",
      payer: "Col. Roderick Decker",
      status: "Lead",
      email: "decker@gmail.com",
      phone: "+91 966558441493",
      services: "Kids play Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
  ];

  return (
    <div className="g-purple-800 flex h-screen flex-col overflow-auto bg-[#F8FAFC] md:px-[8px] md:pb-[24px] md:pt-[8px]">
      <div className="mx-auto grow rounded-[6px] bg-white px-[16px] pb-[12px] pt-[14px] shadow-md max-md:w-[90%] md:w-full">
        <h1 className="mb-[20px] text-[24px] font-[500] leading-[32px] text-[#334155] md:mb-[26px] md:text-[20px] md:leading-[28px]">
          Waitlist
        </h1>
        {/* table starts */}
        <div className="relative mb-[12px] overflow-auto border transition-all duration-300 ease-in-out rounded-lg md:mx-auto md:max-h-[500px] md:max-w-[1170px]">
          <table className="relative w-[900px] table-fixed text-left xl:w-full">
            <thead className="sticky top-0 z-[4] border-b bg-[#F8FAFC] py-[8px] text-[12px] capitalize leading-[20px] text-[#64748B]">
              <tr>
                <th
                  scope="col"
                  className="w-[14px] py-[12px] pl-[16px] pr-[30px]"
                >
                  <div className="flex w-[14px] items-center">
                    <input
                      id="checkbox-all"
                      type="checkbox"
                      className="relative h-[14px] w-[14px] shrink-0 cursor-pointer appearance-none rounded-[4px] border border-[#E5E7EB] shadow-sm checked:border-0 checked:bg-green-800"
                    />
                    <label htmlFor="checkbox-all" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="w-[182px] pr-[16px] font-[500]">
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
                <th scope="col" className="w-[152px] pr-[16px] font-[500]">
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
                <th scope="col" className="w-[136px] pr-[16px] font-[500]">
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
                <th scope="col" className="w-[200px] pr-[16px] font-[500]">
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
                <th scope="col" className="w-[146px] pr-[16px] font-[500]">
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
                <th scope="col" className="w-[200px] pr-[16px] font-[500]">
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
                <th scope="col" className="w-[170px] pr-[16px] font-[500]">
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
              {data.map((item: Entry, index: number) => {
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
                        {item.entryDate}
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
                      <td className="truncate py-[10px] pr-[16px] text-[12px] font-[500] leading-[20px] text-[#374151]">
                        {item.scheduled}
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* table ends */}
      </div>
    </div>
  );
};

export default Waitlist;
