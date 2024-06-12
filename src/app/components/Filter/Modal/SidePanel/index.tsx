import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ReactElement } from "react";

const SidePanel = ({ selectedTab, setSelectedTab }: any) => {
  const { duration, filteredPeopleWaitlist, filteredServicesProductsWaitlist } =
    useSelector((state: RootState) => state.waitlist);
  const ScheduleDateIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 2 16 16"
      fill="none"
    >
      <path
        d="M12.6667 2.66675H3.33333C2.59695 2.66675 2 3.2637 2 4.00008V13.3334C2 14.0698 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0698 14 13.3334V4.00008C14 3.2637 13.403 2.66675 12.6667 2.66675Z"
        stroke="#334155"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6666 1.33325V3.99992"
        stroke="#334155"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.33337 1.33325V3.99992"
        stroke="#334155"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 6.66675H14"
        stroke="#334155"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const PeopleIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 1 16 16"
      fill="none"
    >
      <path
        d="M10.6667 14V12.6667C10.6667 11.9594 10.3858 11.2811 9.88566 10.781C9.38556 10.281 8.70728 10 8.00004 10H4.00004C3.2928 10 2.61452 10.281 2.11442 10.781C1.61433 11.2811 1.33337 11.9594 1.33337 12.6667V14"
        stroke="#334155"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.00004 7.33333C7.4728 7.33333 8.66671 6.13943 8.66671 4.66667C8.66671 3.19391 7.4728 2 6.00004 2C4.52728 2 3.33337 3.19391 3.33337 4.66667C3.33337 6.13943 4.52728 7.33333 6.00004 7.33333Z"
        stroke="#334155"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.6666 14V12.6667C14.6662 12.0758 14.4695 11.5019 14.1075 11.0349C13.7455 10.5679 13.2387 10.2344 12.6666 10.0867"
        stroke="#334155"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6666 2.08667C11.2402 2.23354 11.7487 2.56714 12.1117 3.03488C12.4748 3.50262 12.6719 4.07789 12.6719 4.67C12.6719 5.26212 12.4748 5.83739 12.1117 6.30513C11.7487 6.77287 11.2402 7.10647 10.6666 7.25334"
        stroke="#334155"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const ServicesOrProductIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 1 16 16"
      fill="none"
    >
      <path
        d="M6.66667 2H2V8H6.66667V2Z"
        stroke="#334155"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 2H9.33337V5.33333H14V2Z"
        stroke="#334155"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 8H9.33337V14H14V8Z"
        stroke="#334155"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.66667 10.6667H2V14.0001H6.66667V10.6667Z"
        stroke="#334155"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  type SidePanel = {
    name: string;
    id: string;
    relatedPanelId: string;
    icon: ReactElement;
    filterCount: number;
  };

  const tabs: SidePanel[] = [
    {
      name: "Scheduled Date",
      id: "tab-button-scheduled-date",
      relatedPanelId: "tab-scheduled-date",
      icon: <ScheduleDateIcon />,
      filterCount: duration.selectedLabel ? 1 : 0,
    },
    {
      name: "People",
      id: "tab-button-people",
      relatedPanelId: "tab-people",
      icon: <PeopleIcon />,
      filterCount: filteredPeopleWaitlist.length,
    },
    {
      name: "Services / Products",
      id: "tab-button-services-products",
      relatedPanelId: "tab-services-products",
      icon: <ServicesOrProductIcon />,
      filterCount: filteredServicesProductsWaitlist.length,
    },
  ];

  return (
    <div className="rounded-t-[6px] border-b bg-[#F8FAFC] px-[8px] py-[12px] sm:w-[230px] sm:border-b-0 sm:border-r sm:p-[8px]">
      <ul role="tablist" className="flex justify-between sm:flex-col">
        {tabs.map((tab: SidePanel, index) => (
          <li key={index}>
            <button
              role="tab"
              aria-selected={selectedTab === tab.name}
              id={tab.id}
              aria-controls={tab.relatedPanelId}
              className={`flex w-full items-center gap-x-[2px] rounded-[6px] p-[8px] font-[500] ${selectedTab === tab.name ? "bg-[#E2E8F0]" : "bg-transparent xl:hover:bg-gray-100"} text-[12px] leading-[20px] text-[#334155] sm:text-[14px]`}
              onClick={() => setSelectedTab(tab.name)}
            >
              {tab.icon}
              <span>{tab.name}</span>
              {tab.filterCount > 0 && (
                <span className="ml-auto text-[12px] leading-[20px] text-[#64748B80] sm:text-[14px]">
                  {tab.filterCount}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidePanel;
