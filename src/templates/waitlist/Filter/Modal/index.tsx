import { useState } from "react";
import ScheduledDate from "../ScheduledDate";
import People from "../People";
import ServicesProducts from "../ServicesProducts";
import SidePanel from "./SidePanel";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { applyFilter, resetToDefault } from "@/redux/waitlist/clientSlice";

const Modal = ({
  isModalOpen,
  setModalOpen,
}: {
  isModalOpen: boolean;
  setModalOpen: any;
}) => {
  const [selectedTab, setSelectedTab] = useState("Scheduled Date");
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div
      className={`${isModalOpen ? "pointer-events-auto visible translate-y-[5px] opacity-100" : "pointer-events-none invisible translate-y-[-10px] opacity-0"} absolute left-0 top-[100%] z-10 w-full max-w-[612px] rounded-[6px] border duration-300 ease-in-out md:h-[400px] md:flex-[unset] md:bg-[unset] md:duration-200`}
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
          <button
            onClick={() => {
              dispatch(resetToDefault());
            }}
            className="rounded-md bg-[#F4F4F5] px-[16px] py-[6px] text-[#09090B]"
          >
            Reset to Default
          </button>
          <button
            onClick={() => {
              dispatch(applyFilter());
              setModalOpen(!isModalOpen);
            }}
            className="rounded-md bg-black px-[16px] py-[6px] text-white"
          >
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
