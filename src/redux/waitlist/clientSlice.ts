import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import data from "@/lib/data";
import { ClientType } from "@/lib/data";
import {
  differenceInDays,
  parseISO,
  isWithinInterval,
  startOfMonth,
  endOfMonth,
  startOfQuarter,
  endOfQuarter,
  subQuarters,
} from "date-fns";

type InitialState = {
  waitlistTabs: Tab[];
  currentTabSlug: TabSlug;
  filteredWaitlist: ClientType[];
  tempWaitlist: ClientType[];
  filteredScheduleDateWaitlist: ClientType[];
  filteredPeopleWaitlist: ClientType[];
  filteredServicesProductsWaitlist: ClientType[];
  filteredValues: any;
  currentPage: number;
  searchClient: string;
  selectedDuration: string;
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
  const currentDate = new Date(); // taking 2024-01-05T14:42:00 as currentDate
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

// function to filter clients based on duration
const filterWaitlistByDuration = (
  clients: ClientType[],
  duration: string,
  customDateRange: null | { from: Date | null; to: Date | null },
): ClientType[] => {
  const currentDate = new Date();
  switch (duration) {
    case "last30Days":
      return clients.filter(
        (client) =>
          differenceInDays(currentDate, new Date(client.scheduled)) <= 30,
      );
    case "thisMonth":
      return clients.filter((client) =>
        isWithinInterval(new Date(client.scheduled), {
          start: startOfMonth(currentDate),
          end: endOfMonth(currentDate),
        }),
      );
    case "lastMonth":
      const lastMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1,
      );
      return clients.filter((client) =>
        isWithinInterval(new Date(client.scheduled), {
          start: startOfMonth(lastMonth),
          end: endOfMonth(lastMonth),
        }),
      );
    case "thisQuarter":
      return clients.filter((client) =>
        isWithinInterval(new Date(client.scheduled), {
          start: startOfQuarter(currentDate),
          end: endOfQuarter(currentDate),
        }),
      );
    case "2quarterAgo":
      const twoQuartersAgo = subQuarters(currentDate, 2);
      return clients.filter((client) =>
        isWithinInterval(new Date(client.scheduled), {
          start: startOfQuarter(twoQuartersAgo),
          end: endOfQuarter(twoQuartersAgo),
        }),
      );
    case "custom":
      if (customDateRange?.from && customDateRange?.to) {
        return clients.filter((client) =>
          isWithinInterval(new Date(client.scheduled), {
            start: customDateRange.from || "",
            end: customDateRange.to || "",
          }),
        );
      }
      return clients;
    case "all":
    default:
      return clients;
  }
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
  tempWaitlist: [],
  filteredScheduleDateWaitlist: [],
  filteredPeopleWaitlist: [],
  filteredServicesProductsWaitlist: [],
  filteredValues: [],
  currentPage: 1,
  searchClient: "",
  selectedDuration: "all",
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
    // Date range filter
    setSelectedDuration: (
      state,
      action: PayloadAction<string | { from: Date | null; to: Date | null }>,
    ) => {
      state.selectedDuration =
        typeof action.payload === "string" ? action.payload : "custom";
      const clients = getClientsByTab(state.currentTabSlug);
      state.filteredScheduleDateWaitlist = filterWaitlistByDuration(
        clients,
        state.selectedDuration,
        typeof action.payload === "string" ? null : action.payload,
      );
      state.filteredValues.push(action.payload);
    },
    applyFilter: (state) => {
      if (state.filteredValues) {
        state.tempWaitlist = [
          ...state.filteredScheduleDateWaitlist,
          ...state.filteredPeopleWaitlist,
          ...state.filteredServicesProductsWaitlist,
        ];
        state.filteredWaitlist = state.tempWaitlist;
        state.currentPage = 1;
      } else {
      }
    },
  },
});

export const {
  setCurrentTabList,
  setCurrentPage,
  setSearchClient,
  setSelectedDuration,
  // setCustomDateRange,
  applyFilter,
} = clientSlice.actions;

export default clientSlice.reducer;
