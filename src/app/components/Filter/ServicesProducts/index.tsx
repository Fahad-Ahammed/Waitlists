import { useState } from "react";
import { SearchStyle } from "@/app/components/Search";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import {
  setFilteredServicesByName,
  setSelectedServiceType,
  setSelectedStatusType,
} from "@/redux/waitlist/clientSlice";
import { ClientType } from "@/lib/data";
import { DynamicSearch } from "../People";

type SearchBy = {
  label: string;
  title: string;
};

const ServicesProducts = () => {
  const [searchBy, setSearchBy] = useState<SearchBy>({
    label: "searchByName",
    title: "search by name",
  });

  const [isServiceDropDown, setServiceDropDown] = useState<boolean>(false);
  const [isStatusDropDown, setStatusDropDown] = useState<boolean>(false);

  const {
    filteredScheduleDateWaitlist,
    filteredServicesProductsWaitlist,
    tags,
  } = useSelector((state: RootState) => state.waitlist);
  const dispatch = useDispatch<AppDispatch>();

  const handleClientSelect = (clients: ClientType[]) => {
    dispatch(setFilteredServicesByName(clients));
  };

  const searchByList: SearchBy[] = [
    {
      label: "searchByName",
      title: "search by name",
    },
    {
      label: "searchByTags",
      title: "search by tags",
    },
  ];

  const classNames: SearchStyle = {
    form: "relative rounded-[6px] bg-transparent border border-[#E2E8F0] px-[30px] py-[4px] mb-[16px]",
    iconContainer:
      "pointer-events-none absolute inset-y-0 left-[12px] flex items-center pr-3",
    icon: "w-[12px] h-[12px]",
    iconPath: "stroke-[#3F3F46]",
    input:
      "w-full text-[14px] font-[500] leading-[20px] text-[#3F3F46] outline-none placeholder:text-[#94A3B8]",
  };

  return (
    <div
      id="tab-services-products"
      role="tabpanel"
      aria-labelledby="tab-button-services-products"
    >
      <div className="mb-[22px]">
        <div className="flex items-center text-[14px] font-[400] leading-[20px] text-[#334155]">
          {searchByList.map((item: SearchBy, index: number) => {
            return (
              <div key={index} className="flex flex-1 items-center gap-x-[8px]">
                <input
                  type="radio"
                  name="searchBy"
                  className="relative h-[16px] w-[16px] appearance-none rounded-full border border-[#E2E8F0] before:absolute before:left-[50%] before:top-[50%] before:h-[8px] before:w-[8px] before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full before:bg-black before:opacity-0 before:duration-100 before:content-[''] checked:before:opacity-100"
                  checked={searchBy.label === item.label}
                  onChange={() =>
                    setSearchBy({ ...searchBy, ["label"]: item.label })
                  }
                  aria-checked={searchBy.label === item.label}
                  disabled={
                    (searchBy.label === "searchByName" &&
                      filteredServicesProductsWaitlist.searchByName.length >
                        0) ||
                    (searchBy.label === "searchByTags" &&
                      (tags.serviceType.selectedLabel !== "all" ||
                        tags.statusType.selectedLabel !== "all"))
                  }
                />
                {item.title}
              </div>
            );
          })}
        </div>
      </div>

      <div className="">
        {searchBy.label === "searchByName" && (
          <DynamicSearch
            selectedClients={filteredServicesProductsWaitlist.searchByName}
            onClientSelect={handleClientSelect}
            filteredWaitlist={filteredScheduleDateWaitlist}
            classNames={classNames}
            searchLabel="services"
            hideTags
          />
        )}
        {searchBy.label === "searchByTags" && (
          <div className="relative">
            <div className="relative z-[8] mb-[20px]">
              <button
                onClick={() => setServiceDropDown(!isServiceDropDown)}
                className="mb-[20px] flex w-full items-center justify-between rounded-[8px] border border-[#E4E4E7] bg-transparent px-[12px] py-[8px] text-[14px] font-[400] capitalize leading-[20px] text-[#09090B]"
              >
                <span className="capitalize">
                  {tags.serviceType.selectedTitle}
                </span>
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
                className={`${isServiceDropDown ? "visible translate-y-[5px] opacity-100" : "pointer-events-none invisible translate-y-[-10px] opacity-0"} absolute left-0 top-[100%] z-[100] max-h-[200px] w-full overflow-scroll rounded-[6px] border border-[#E4E4E7] bg-white p-[4px] shadow-sm duration-[150ms] ease-in-out sm:h-[232px]`}
              >
                <ul>
                  {tags.serviceType.dropdown.map(
                    (item: { label: string; title: string }, index: number) => {
                      return (
                        <li
                          onClick={() => {
                            dispatch(setSelectedServiceType(item));
                            item.label !== tags.serviceType.selectedLabel &&
                              setServiceDropDown(false);
                          }}
                          key={index}
                        >
                          <button className="flex w-full items-center justify-between px-[8px] py-[6px] text-[14px] font-[400] capitalize leading-[20px] text-[#334155] xl:hover:bg-gray-100">
                            {item.title}
                            <svg
                              className={`${tags.serviceType.selectedLabel === item.label ? "block" : "hidden"}`}
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

            <div className="relative z-[6] mb-[20px]">
              <button
                onClick={() => setStatusDropDown(!isStatusDropDown)}
                className="mb-[20px] flex w-full items-center justify-between rounded-[8px] border border-[#E4E4E7] bg-transparent px-[12px] py-[8px] text-[14px] font-[400] capitalize leading-[20px] text-[#09090B]"
              >
                <span className="capitalize">
                  {tags.statusType.selectedTitle}
                </span>
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
                className={`${isStatusDropDown ? "visible translate-y-[5px] opacity-100" : "pointer-events-none invisible translate-y-[-10px] opacity-0"} absolute left-0 top-[100%] max-h-[200px] w-full overflow-scroll rounded-[6px] border border-[#E4E4E7] bg-white p-[4px] shadow-sm duration-[150ms] ease-in-out sm:max-h-[232px]`}
              >
                <ul>
                  {tags.statusType.dropdown.map(
                    (item: { label: string; title: string }, index: number) => {
                      return (
                        <li
                          onClick={() => {
                            dispatch(setSelectedStatusType(item));
                            item.label !== tags.statusType.selectedLabel &&
                              setStatusDropDown(false);
                          }}
                          key={index}
                        >
                          <button className="flex w-full items-center justify-between px-[8px] py-[6px] text-[14px] font-[400] capitalize leading-[20px] text-[#334155] xl:hover:bg-gray-100">
                            {item.title}
                            <svg
                              className={`${tags.statusType.selectedLabel === item.label ? "block" : "hidden"}`}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesProducts;
