import { useEffect, useState } from "react";
import Search from "@/app/components/Search";
import { SearchStyle } from "@/app/components/Search";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setfilteredPeopleWaitlist } from "@/redux/waitlist/clientSlice";
import { ClientType } from "@/lib/data";

type PeopleProps = {
  filteredWaitlist: ClientType[];
  selectedClients: ClientType[];
  onClientSelect: (clients: ClientType[]) => void;
  classNames: SearchStyle;
  searchLabel: keyof ClientType;
  hideTags:boolean;
};

const People = () => {
  const classNames: SearchStyle = {
    form: "relative rounded-[6px] bg-[#F9FAFB] border border-[#E2E8F0] px-[35px] py-[4px] mb-[16px]",
    iconContainer:
      "pointer-events-none absolute inset-y-0 left-[12px] flex items-center pr-3",
    icon: "w-[16px] h-[16px]",
    iconPath: "stroke-[#3F3F46]",
    input:
      "w-full text-[14px] font-[400] leading-[20px] text-[#3F3F46] outline-none placeholder:text-[#9CA3AF]",
  };

  const { filteredWaitlist, filteredPeopleWaitlist } = useSelector(
    (state: RootState) => state.waitlist,
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleClientSelect = (clients: ClientType[]) => {
    dispatch(setfilteredPeopleWaitlist(clients));
  };

  return (
    <DynamicSearch
      filteredWaitlist={filteredWaitlist}
      selectedClients={filteredPeopleWaitlist}
      onClientSelect={handleClientSelect}
      classNames={classNames}
      searchLabel="payer"
      hideTags={false}
    />
  );
};

export const DynamicSearch: React.FC<PeopleProps> = ({
  filteredWaitlist,
  selectedClients,
  onClientSelect,
  classNames,
  searchLabel,
  hideTags
}) => {
  const [searchResult, setSearchResult] = useState<ClientType[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const sortedSearchResult = filteredWaitlist
      .filter(
        (client: ClientType) =>
          client[searchLabel].toLowerCase().includes(query.toLowerCase()) &&
          !selectedClients.some(
            (selected) => selected[searchLabel] === client[searchLabel],
          ),
      )
      .sort((a, b) => a[searchLabel].localeCompare(b[searchLabel]));
    setSearchResult(sortedSearchResult);
  };

  const handleCheckboxChange = (client: ClientType) => {
    const updated = [...selectedClients, client];
    onClientSelect(
      updated.sort((a, b) => a[searchLabel].localeCompare(b[searchLabel])),
    );
    setSearchResult((prev) =>
      prev.filter((item) => item[searchLabel] !== client[searchLabel]),
    );
  };

  const handleRemoveSelected = (client: ClientType) => {
    const updated = selectedClients.filter(
      (item) => item[searchLabel] !== client[searchLabel],
    );
    onClientSelect(
      updated.sort((a, b) => a[searchLabel].localeCompare(b[searchLabel])),
    );
    if (searchQuery.length > 0) {
      setSearchResult((prev) => {
        const updated = [...prev, client];
        return updated.sort((a, b) =>
          a[searchLabel].localeCompare(b[searchLabel]),
        );
      });
    }
  };

  return (
    <div id="tab-people" role="tabpanel" aria-labelledby="tab-button-people">
      <Search
        onSearch={handleSearch}
        classNames={classNames}
        placeholder="Search Payer or attendee name"
      />
      <div className="relative z-[10] mt-[8px] max-h-[200px] overflow-scroll md:mt-[12px] md:max-h-[200px]">
        {selectedClients.length > 0 &&
          searchQuery.length === 0 &&
          selectedClients.map((people: ClientType, index: number) => {
            return (
              <ul key={index}>
                <li>
                  <CheckBox
                    onCheck={handleRemoveSelected}
                    people={people}
                    checked
                    searchLabel={searchLabel}
                    hideTags={hideTags}
                  />
                </li>
              </ul>
            );
          })}
        {searchQuery.length > 0 && (
          <>
            <span className="mb-[12px] block text-[12px] font-[400] leading-[20px] text-[#0F172A]">{`Showing ${searchResult.slice(0, 10).length} results matching '${searchQuery}' `}</span>
            {searchResult
              .slice(0, 10)
              .map((people: ClientType, index: number) => {
                return (
                  <ul key={index}>
                    <li>
                      <CheckBox
                        onCheck={handleCheckboxChange}
                        people={people}
                        checked={false}
                        searchLabel={searchLabel}
                        hideTags={hideTags}
                      />
                    </li>
                  </ul>
                );
              })}
          </>
        )}
      </div>
    </div>
  );
};

export type CheckBoxType = {
  onCheck: (people: ClientType) => void;
  people: ClientType;
  checked: boolean;
  searchLabel: keyof ClientType;
  hideTags:boolean
};

export const CheckBox: React.FC<CheckBoxType> = ({
  onCheck,
  people,
  checked,
  searchLabel,
  hideTags
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
        <label className="text-[14px] leading-[20px] text-[#374151]">
          {people[searchLabel]}
        </label>
      </div>
      <span className={`${hideTags?"hidden":"inline-block"} h-fit w-fit rounded-[4px] bg-[#F8FAFC] px-[8px] py-[2px] text-[10px] font-[500] capitalize leading-[16px] text-[#334155]`}>
        {people.tags}
      </span>
      <span className={`${!hideTags?"hidden":"inline-block"} ml-auto rounded-[4px] bg-[#F8FAFC] px-[8px] py-[2px] text-[10px] font-[500] leading-[16px] text-[#475467]`}>
        {people.serviceType}
      </span>
      <span
        className={`${!hideTags?"hidden":"inline-block"} rounded-[4px] bg-[#F8FAFC] px-[8px] py-[2px] text-[10px] font-[500] leading-[16px] ${people.statusType.toLowerCase() == "public" ? "text-[#039855]" : people.statusType.toLowerCase() == "private" ? "text-[#BF8000]" : "text-[#475467]"} `}
      >
        {people.statusType}
      </span>
    </div>
  );
};

export default People;
