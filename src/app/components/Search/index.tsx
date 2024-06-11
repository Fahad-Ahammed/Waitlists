import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch && onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      aria-label="Search clients"
      className="relative px-[35px] py-[5px] bg-white shadow-md rounded-sm"
    >
      <div className="pointer-events-none absolute inset-y-0 left-[16px] flex items-center pr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M10.5 10.5L8.34998 8.34998M9.5 5.5C9.5 7.70914 7.70914 9.5 5.5 9.5C3.29086 9.5 1.5 7.70914 1.5 5.5C1.5 3.29086 3.29086 1.5 5.5 1.5C7.70914 1.5 9.5 3.29086 9.5 5.5Z"
            stroke="#64748B"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <label htmlFor="search" className="sr-only">
        Search Clients
      </label>
      <input
        type="text"
        id="search"
        value={query}
        onChange={handleChange}
        placeholder="Search Clients"
        className="w-full text-[12px] leading-[20px] font-[500] text-[#374151] placeholder:text-[#94A3B8] outline-none  "
      />
    </form>
  );
};

export default SearchBar;
