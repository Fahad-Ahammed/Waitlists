import { useState } from "react";
import Search from "@/components/Search";
import { ClientType } from "@/lib/data";
import { SearchStyle } from "@/components/Search";
import { initialDataSet } from "@/redux/waitlist/clientSlice";
import CheckBox from "../Checkbox";

type DynamicSearchType = {
    selectedClients: ClientType[];
    onClientSelect: (clients: ClientType[]) => void;
    classNames: SearchStyle;
    searchLabel: keyof ClientType;
    hideTags: boolean;
  };

 const DynamicSearch: React.FC<DynamicSearchType> = ({  
    selectedClients,
    onClientSelect,
    classNames,
    searchLabel,
    hideTags,
  }) => {
    const [searchResult, setSearchResult] = useState<ClientType[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const handleSearch = (query: string) => {
      setSearchQuery(query);
      const uniqueClients = new Set();
      const sortedSearchResult = initialDataSet
        .filter(
          (client: ClientType) =>
            client[searchLabel].toLowerCase().includes(query.toLowerCase()) &&
            !selectedClients.some(
              (selected) => selected[searchLabel] === client[searchLabel],
            ),
        )
        .filter((client) => {
          if (!uniqueClients.has(client[searchLabel])) {
            uniqueClients.add(client[searchLabel]);
            return true;
          }
          return false;
        })
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
        <div className="relative z-[10] mt-[8px] max-h-[150px] overflow-scroll md:mt-[12px] md:max-h-[200px]">
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

export default DynamicSearch;