import { useEffect, useState } from "react";
import Search from "@/app/components/Search";
import { SearchStyle } from "@/app/components/Search";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setfilteredPeopleWaitlist } from "@/redux/waitlist/clientSlice";
import { ClientType } from "@/lib/data";

const People = () => {
  // Define styles for the search component
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

  // const [selectedPeople, setSelectedPeople] = useState<ClientType[]>([]);
  const [searchResult, setSearchResult] = useState<ClientType[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Handle search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Filter and sort the results based on the search query
    const sortedSearchResult = filteredWaitlist
      .filter(
        (client: ClientType) =>
          client.payer.toLowerCase().includes(query.toLowerCase()) &&
          !filteredPeopleWaitlist.some(
            (selected) => selected.payer === client.payer,
          ),
      )
      .sort((a, b) => a.payer.localeCompare(b.payer));
    setSearchResult(sortedSearchResult);
  };

  // Handle the selection of a client
  const handleCheckboxChange = (client: ClientType) => {
    // Add the selected client to the list and sort alphabetically

    const updated = [...filteredPeopleWaitlist, client];
    dispatch(
      setfilteredPeopleWaitlist(
        updated.sort((a, b) => a.payer.localeCompare(b.payer)),
      ),
    );
    // Remove the selected client from the search results
    setSearchResult((prev) =>
      prev.filter((item) => item.payer !== client.payer),
    );
  };

  // Handle the removal of a selected client
  const handleRemoveSelected = (client: ClientType) => {
    // Remove the client from the selected list and sort alphabetically
    const updated = filteredPeopleWaitlist.filter(
      (item) => item.payer !== client.payer,
    );
    dispatch(
      setfilteredPeopleWaitlist(
        updated.sort((a, b) => a.payer.localeCompare(b.payer)),
      ),
    );

    // Add the client back to the search results if a search query is present
    if (searchQuery.length > 0) {
      setSearchResult((prev) => {
        const updated = [...prev, client];
        return updated.sort((a, b) => a.payer.localeCompare(b.payer));
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
      <div className="relative z-[10] mt-[8px] max-h-[250px] overflow-scroll md:mt-[12px] md:max-h-[250px]">
        {/* Display selected clients */}
        {filteredPeopleWaitlist.length > 0 &&
          searchQuery.length == 0 &&
          filteredPeopleWaitlist.map((people: ClientType, index: number) => {
            return (
              <ul key={index}>
                <li>
                  <CheckBox
                    onCheck={handleRemoveSelected}
                    people={people}
                    checked
                  />
                </li>
              </ul>
            );
          })}
        {/* Display search results */}
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

type CheckBox = {
  onCheck: (people: ClientType) => void;
  people: ClientType;
  checked: boolean;
};

const CheckBox: React.FC<CheckBox> = ({ onCheck, people, checked }) => {
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
          {people.payer}
        </label>
      </div>
      <span className="rounded-[4px] bg-[#F8FAFC] px-[10px] py-[2px] text-[14px] capitalize leading-[20px] text-[#334155]">
        {people.tags}
      </span>
    </div>
  );
};

export default People;
