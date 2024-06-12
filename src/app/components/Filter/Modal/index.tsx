import { useState } from "react";
import ScheduledDate from "../ScheduledDate"
import People from "../People"
import ServicesProducts from "../ServicesProducts";
import SidePanel from "../Modal/SidePanel"

const Modal = () => {
  const [selectedTab, setSelectedTab] = useState("Scheduled Date");

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="filter-dialog-title"
    >
      <div className="mx-auto flex h-[400px] w-full max-w-[95%] flex-col rounded-[6px] bg-white shadow-lg sm:max-w-[612px] sm:flex-[unset]">
        <div className="flex grow flex-col sm:h-[348px] sm:grow-[unset] sm:flex-row">
          <SidePanel selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
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
