import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import data from "@/lib/data";
import { ClientType } from "@/lib/data";
import { differenceInDays, parseISO } from "date-fns";

type InitialState = {
  waitlistTabs: Tab[];
  currentTabSlug: TabSlug;
  filteredWaitlist: ClientType[];
  currentPage: number;
  searchClient: string;
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

// function to get clients based on tab
const getClientsByTab = (slug: TabSlug): ClientType[] => {
  switch (slug) {
    case "newlyAdded":
      return data.filter(isNewlyAdded);
    case "leads":
      return data.filter(isLead);
    case "allWaitlists":
    default:
      return [...data];
  }
};

// function to filter clients based on search query
const filterClientsBySearch = (
  clients: ClientType[],
  query: string,
): ClientType[] => {
  if (!query) return clients;

  const filteredClients = clients.filter(
    (client) =>
      client.payer.toLowerCase().includes(query.toLowerCase()) ||
      client.email.toLowerCase().includes(query.toLowerCase()),
  );

  return filteredClients.length ? filteredClients : clients;
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
  searchClient: "",
};

const clientSlice = createSlice({
  name: "waitlist",
  initialState,
  reducers: {
    // Tab filter section
    setCurrentTabList: (state, action: PayloadAction<TabSlug>) => {
      const { payload: slug } = action;
      state.currentTabSlug = slug;
      const clients = getClientsByTab(slug);
      state.filteredWaitlist = filterClientsBySearch(clients, "");
      state.currentPage = 1;
    },
    // Table pagination page setting
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    // Search by client filter
    setSearchClient: (state, action: PayloadAction<string>) => {
      state.searchClient = action.payload;
      const clients = getClientsByTab(state.currentTabSlug);
      state.filteredWaitlist = filterClientsBySearch(
        clients,
        state.searchClient,
      );
    },
  },
});

export const { setCurrentTabList, setCurrentPage, setSearchClient } =
  clientSlice.actions;

export default clientSlice.reducer;
