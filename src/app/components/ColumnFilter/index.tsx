import React, { useState } from "react";

type Column = {
  label: string;
  value: string;
};

type ColumnFilterProps = {
  onApply: (selectedColumns: string[]) => void;
  filterColumnDropdown: boolean;
};

const columns: Column[] = [
  { label: "Order Created On", value: "orderCreatedOn" },
  { label: "Payer", value: "payer" },
  { label: "Status", value: "status" },
  { label: "Email", value: "email" },
  { label: "Payer Phone", value: "payerPhone" },
  { label: "Service", value: "service" },
  { label: "Scheduled", value: "scheduled" },
  { label: "Service Type", value: "serviceType" },
  { label: "Status Type", value: "statusType" },
];

const ColumnFilter: React.FC<ColumnFilterProps> = ({
  onApply,
  filterColumnDropdown,
}) => {
  const [selectedColumns, setSelectedColumns] = useState<string[]>(
    columns.map((column) => column.value),
  );

  const handleCheckboxChange = (columnValue: string) => {
    setSelectedColumns((prev) =>
      prev.includes(columnValue)
        ? prev.filter((value) => value !== columnValue)
        : [...prev, columnValue],
    );
  };

  const resetToDefault = () => {
    setSelectedColumns(columns.map((column) => column.value));
  };

  const applyChanges = () => {
    onApply(selectedColumns);
  };

  return (
    <div
      tabIndex={filterColumnDropdown ? 0 : -1}
      className={`${filterColumnDropdown ? "pointer-events-auto visible translate-y-[60px] opacity-100" : "pointer-events-none invisible translate-y-[50px] opacity-0"} absolute right-0 z-[10] w-[320px] rounded-[12px] border border-[#E2E8F0] bg-white p-[16px] shadow-lg duration-300 ease-in-out`}
    >
      <h2 className="mb-[8px] text-[16px] font-[500] leading-[24px] text-[#000000]">
        Edit Columns
      </h2>
      <p className="mb-[16px] text-[14px] font-[400] leading-[20px] text-[#334155]">
        Select the columns to rearrange
      </p>
      <div className="mb-[16px] flex max-h-[324px] flex-col gap-y-[12px] overflow-scroll">
        {columns.map((column) => (
          <div
            key={column.value}
            className="flex items-center gap-x-[8px] px-[px]"
          >
            <label className="order-2 flex-1 rounded-[6px] border border-[#E2E8F0] bg-white px-[12px] py-[6px] text-[14px] font-[500] leading-[20px] text-[#334155]">
              {column.label}
            </label>
            <div className="relative h-[16px] w-[16px]">
              <input
                className="peer h-full w-full appearance-none rounded-[4px] border border-gray-700 bg-white checked:bg-black"
                type="checkbox"
                checked={selectedColumns.includes(column.value)}
                onChange={() => handleCheckboxChange(column.value)}
              />
              <svg
                className="pointer-events-none absolute left-[50%] top-[60%] hidden translate-x-[-50%] translate-y-[-50%] peer-checked:block"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M10 3L4.5 8.5L2 6"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between gap-x-[12px] text-[14px] font-[500] leading-[24px]">
        <button
          onClick={resetToDefault}
          className="rounded-[6px] border border-[#E2E8F0] bg-white px-[16px] py-[4px] text-[#0F172A]"
        >
          Reset to Default
        </button>
        <button
          onClick={applyChanges}
          className="flex-1 rounded-[6px] bg-black px-[16px] py-[4px] font-semibold text-white"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default ColumnFilter;
