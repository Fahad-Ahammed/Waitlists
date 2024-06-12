import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

type SearchBarProps = {
  onSearch: (query: string) => void;
  classNames: SearchStyle;
  placeholder: string;
};

export type SearchStyle = {
  form: string;
  iconContainer: string;
  icon: string;
  iconPath: string;
  input: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  classNames,
  placeholder,
}) => {
  const { currentTabSlug } = useSelector((state: RootState) => state.waitlist);

  const [query, setQuery] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    setQuery("");
  }, [currentTabSlug]);

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      aria-label="Search clients"
      className={classNames.form}
    >
      <div className={classNames.iconContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 12"
          fill="none"
          className={classNames.icon}
        >
          <path
            d="M10.5 10.5L8.34998 8.34998M9.5 5.5C9.5 7.70914 7.70914 9.5 5.5 9.5C3.29086 9.5 1.5 7.70914 1.5 5.5C1.5 3.29086 3.29086 1.5 5.5 1.5C7.70914 1.5 9.5 3.29086 9.5 5.5Z"
            className={classNames.iconPath}
            strokeLinecap="round"
            strokeLinejoin="round"
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
        placeholder={placeholder}
        className={classNames.input}
      />
    </form>
  );
};

export default SearchBar;
