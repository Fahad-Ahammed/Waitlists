import { ClientType } from "@/lib/data";

export type CheckBoxType = {
  onCheck: (people: ClientType) => void;
  people: ClientType;
  checked: boolean;
  searchLabel: keyof ClientType;
  hideTags: boolean;
};

const CheckBox: React.FC<CheckBoxType> = ({
  onCheck,
  people,
  checked,
  searchLabel,
  hideTags,
}) => {
  return (
    <div className="mb-[8px] flex gap-x-[8px]">
      <div className="flex items-center gap-[8px]">
        <input
          onChange={() => onCheck(people)}
          type="checkbox"
          checked={checked}
          className="relative h-[14px] w-[14px] shrink-0 cursor-pointer appearance-none rounded-[2px] border border-[#E5E7EB] bg-white shadow-sm checked:bg-black"
        />
        <label className="truncate text-[14px] leading-[20px] text-[#374151]">
          {people[searchLabel]}
        </label>
      </div>
      <span
        className={`${hideTags ? "hidden" : "inline-block"} h-fit w-fit rounded-[4px] bg-[#F8FAFC] px-[8px] py-[2px] text-[10px] font-[500] capitalize leading-[16px] text-[#334155]`}
      >
        {people.tags}
      </span>
      <span
        className={`${!hideTags ? "hidden" : "inline-block"} ml-auto rounded-[4px] bg-[#F8FAFC] px-[8px] py-[2px] text-[10px] font-[500] leading-[16px] text-[#475467]`}
      >
        {people.serviceType}
      </span>
      <span
        className={`${!hideTags ? "hidden" : "inline-block"} rounded-[4px] bg-[#F8FAFC] px-[8px] py-[2px] text-[10px] font-[500] leading-[16px] ${people.statusType.toLowerCase() == "public" ? "text-[#039855]" : people.statusType.toLowerCase() == "private" ? "text-[#BF8000]" : "text-[#475467]"} `}
      >
        {people.statusType}
      </span>
    </div>
  );
};

export default CheckBox;
