import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import data from "@/lib/data";
import { ClientType } from "@/lib/data";
import { differenceInDays, parseISO } from "date-fns";

type InitialState = {
  waitlistTabs: Tab[];
  currentTabSlug: TabSlug;
  filteredWaitlist: ClientType[];
  currentPage: number;
};
export type TabSlug = "allWaitlists" | "newlyAdded" | "leads";
export type Tab = {
  slug: TabSlug;
  title: string;
  count: number;
};
// function to determine if a client is a lead
const isLead = (client: ClientType): boolean =>
  client.status.toLowerCase() === "lead";
// function to determine if a client is newly added
const isNewlyAdded = (client: ClientType): boolean => {
  const currentDate = parseISO("2024-01-05T14:42:00"); // taking 2024-01-05T14:42:00 as currentDate
  const entryDate = parseISO(client.entryDate);
  return differenceInDays(currentDate, entryDate) <= 30;
};

const initialState: InitialState = {
  waitlistTabs: [
    {
      slug: "allWaitlists",
      title: "all waitlist",
      count: [...data].length,
    },
    {
      slug: "newlyAdded",
      title: "newly added",
      count: data.filter(isNewlyAdded).length,
    },
    {
      slug: "leads",
      title: "leads",
      count: data.filter(isLead).length,
    },
  ],
  currentTabSlug: "allWaitlists",
  filteredWaitlist: [...data], // Initially loading with all waitlists because default tab section is set to All waitlists
  currentPage: 1,
};

const clientSlice = createSlice({
  name: "waitlist",
  initialState,
  reducers: {
    setCurrentTabList: (state, action: PayloadAction<TabSlug>) => {
      const { payload: slug } = action;
      state.currentTabSlug = slug;
      if (slug === "newlyAdded") {
        state.filteredWaitlist = data.filter(isNewlyAdded);
      } else if (slug === "leads") {
        state.filteredWaitlist = data.filter(isLead);
        state.currentTabSlug = slug;
      } else {
        state.filteredWaitlist = [...data];
        state.currentTabSlug = slug;
      }
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentTabList, setCurrentPage } = clientSlice.actions;

export default clientSlice.reducer;
