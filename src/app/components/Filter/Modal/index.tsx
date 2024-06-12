import { useState } from "react";
import ScheduledDate from "../ScheduledDate";
import People from "../People";
import ServicesProducts from "../ServicesProducts";
import SidePanel from "../Modal/SidePanel";

const Modal = ({ isModalOpen }: { isModalOpen: boolean }) => {
  const [selectedTab, setSelectedTab] = useState("Scheduled Date");

  return (
    <div
      className={`${isModalOpen ? "pointer-events-auto visible translate-y-[5px] opacity-100" : "pointer-events-none invisible translate-y-[-10px] opacity-0"} absolute left-0 top-[100%] z-10 rounded-[6px] border duration-300 xl:duration-200 ease-in-out xl:h-[400px] xl:w-[612px] xl:flex-[unset] xl:bg-[unset]`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="filter-dialog-title"
      tabIndex={isModalOpen ? 0 : -1}
    >
      <div className="mx-auto flex h-[400px] w-full flex-col rounded-[6px] bg-white shadow-lg sm:max-w-[612px] sm:flex-[unset]">
        <div className="flex grow flex-col sm:h-[348px] sm:grow-[unset] sm:flex-row">
          <SidePanel
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          <Content selectedTab={selectedTab} />
        </div>
        <div className="flex items-center justify-end gap-x-[16px] border-t px-[16px] py-[8px] text-[14px] font-[500] leading-[24px]">
          <button className="rounded-md bg-[#F4F4F5] px-[16px] py-[6px] text-[#09090B]">
            Reset to Default
          </button>
          <button className="rounded-md bg-black px-[16px] py-[6px] text-white">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

const Content = ({ selectedTab }: any) => {
  return (
    <div className="flex-1 p-[16px]">
      {selectedTab === "Scheduled Date" && <ScheduledDate />}
      {selectedTab === "People" && <People />}
      {selectedTab === "Services / Products" && <ServicesProducts />}
    </div>
  );
};

export default Modal;
