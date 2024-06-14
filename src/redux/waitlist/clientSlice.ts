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
  filteredScheduleDateWaitlist: ClientType[];
  filteredPeopleWaitlist: ClientType[];
  filteredServicesProductsWaitlist: {
    searchByName: ClientType[];
    searchByTag: string[];
  };
  currentPage: number;
  searchClient: string;
  duration: {
    selectedLabel: string;
    selectedTitle: string;
    dropDown: Duration[];
  };
  tags: {
    serviceType: {
      selectedLabel: string;
      selectedTitle: string;
      dropdown: ServiceAndStatus[];
    };
    statusType: {
      selectedLabel: string;
      selectedTitle: string;
      dropdown: ServiceAndStatus[];
    };
  };
  chip: Chip;  
};

type ServiceAndStatus = {
  label: string;
  title: string;
};

export type Duration = {
  label: string;
  title: string;
  customDuration?: { from: Date | null; to: Date | null };
};

type Chip = {
  durationChip: string;
  peopleChip: string[];
  seviceByNameChip: string[];
  serviceByTagChip: string[];
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
export const filterClientsBySearch = (
  clients: ClientType[],
  query: string,
  searchBy?: keyof ClientType,
): ClientType[] => {
  if (!query) return clients;

  const filteredClients = clients.filter((client: ClientType) => {
    const value = searchBy ? client[searchBy] : undefined;
    return (
      typeof value === "string" &&
      value.toLowerCase().includes(query.toLowerCase())
    );
  });

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

const initialChip: Chip = {
  durationChip: "",
  peopleChip: [],
  seviceByNameChip: [],
  serviceByTagChip: [],
};

export const initialDataSet: ClientType[] = [...data];
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
  filteredWaitlist: initialDataSet, // Initially loading with all waitlists because default tab section is set to All waitlists
  filteredScheduleDateWaitlist: initialDataSet,
  filteredPeopleWaitlist: [],
  filteredServicesProductsWaitlist: {
    searchByName: [],
    searchByTag: [],
  },
  currentPage: 1,
  searchClient: "",
  duration: {
    selectedLabel: "all",
    selectedTitle: "All time",
    dropDown: [
      {
        label: "all",
        title: "All time",
      },
      {
        label: "custom",
        title: "Custom",
      },
      {
        label: "last30Days",
        title: "Last 30 days",
      },
      {
        label: "thisMonth",
        title: "This month",
      },
      {
        label: "lastMonth",
        title: "Last month",
      },
      {
        label: "thisQuarter",
        title: "This quarter",
      },
      {
        label: "2quarterAgo",
        title: "2 quarter ago",
      },
    ],
  },
  tags: {
    serviceType: {
      selectedLabel: "all",
      selectedTitle: "show all service type",
      dropdown: [
        { label: "all", title: "show all service type" },
        { label: "class", title: "Class" },
        { label: "appointment", title: "appointment" },
        { label: "facility", title: "facility" },
        { label: "classPack", title: "class pack" },
        { label: "membership", title: "membership" },
        { label: "generalItems", title: "general items" },
      ],
    },
    statusType: {
      selectedLabel: "all",
      selectedTitle: "show all",
      dropdown: [
        { label: "all", title: "show all" },
        { label: "public", title: "public" },
        { label: "private", title: "private" },
        { label: "disable", title: "disable" },
        { label: "draft", title: "draft" },
      ],
    },
  },
  chip: initialChip,
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
      state.duration.selectedLabel = "all";
      state.duration.selectedTitle = "All Time";
      state.filteredScheduleDateWaitlist = clients;
      state.filteredPeopleWaitlist = [];
      state.filteredServicesProductsWaitlist.searchByName = [];
      state.filteredServicesProductsWaitlist.searchByTag = [];
      state.chip = initialChip;
    },
    // Table pagination page setting
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    // Search by client from waitlist page
    setSearchClient: (state, action: PayloadAction<string>) => {
      state.searchClient = action.payload;
      state.filteredWaitlist = filterClientsBySearch(
        state.filteredWaitlist,
        state.searchClient,
        "payer",
      );
    },
    // Date range filter
    setSelectedDuration: (state, action: PayloadAction<Duration>) => {
      state.duration.selectedLabel = action.payload.label;
      state.duration.selectedTitle = action.payload.title;

      const clients = getClientsByTab(state.currentTabSlug);
      state.filteredScheduleDateWaitlist = filterWaitlistByDuration(
        clients,
        state.duration.selectedLabel,
        action.payload.customDuration ?? null,
      );
      state.chip.durationChip = action.payload.title;
      
    },

    removeScheduledDuration: (state) => {
      state.duration.selectedLabel = "all";
      state.duration.selectedTitle = "All time";
      const clients = getClientsByTab(state.currentTabSlug);
      state.filteredScheduleDateWaitlist = filterWaitlistByDuration(
        clients,
        state.duration.selectedLabel,
        null,
      );
    },

    setfilteredPeopleWaitlist: (state, action: PayloadAction<ClientType[]>) => {
      state.filteredPeopleWaitlist = action.payload;
      state.chip.peopleChip = state.filteredPeopleWaitlist.map(
        (people: ClientType) => people.payer,
      );
    },

    removePeople: (
      state,
      action: PayloadAction<{ removeType: string; value: string }>,
    ) => {
      state.filteredPeopleWaitlist =
        action.payload.removeType == "people"
          ? state.filteredPeopleWaitlist.filter(
              (people: ClientType) =>
                action.payload.value.toLowerCase() !==
                people.payer.toLowerCase(),
            )
          : state.filteredPeopleWaitlist;

      state.chip.peopleChip = state.chip.peopleChip.filter(
        (people: string) => people !== action.payload.value,
      );
    },

    setFilteredServicesByName: (state, action: PayloadAction<ClientType[]>) => {
      state.filteredServicesProductsWaitlist.searchByName = action.payload;
      state.chip.seviceByNameChip =
        state.filteredServicesProductsWaitlist.searchByName.map(
          (client: ClientType) => client.services,
        );
    },

    removeService: (state, action) => {
      state.filteredServicesProductsWaitlist.searchByName =
        action.payload.removeType == "service"
          ? state.filteredServicesProductsWaitlist.searchByName.filter(
              (client: ClientType) => client.services !== action.payload.value,
            )
          : state.filteredServicesProductsWaitlist.searchByName;
      state.chip.seviceByNameChip = state.chip.seviceByNameChip.filter(
        (service: string) => service !== action.payload.value,
      );
    },

    setSelectedServiceType: (
      state,
      action: PayloadAction<{ label: string; title: string }>,
    ) => {
      state.tags.serviceType.selectedLabel = action.payload.label;
      state.tags.serviceType.selectedTitle = action.payload.title;
      state.filteredServicesProductsWaitlist.searchByTag.push(
        action?.payload?.title,
      );
    },
    setSelectedStatusType: (
      state,
      action: PayloadAction<{ label: string; title: string }>,
    ) => {
      state.tags.statusType.selectedLabel = action.payload.label;
      state.tags.statusType.selectedTitle = action.payload.title;
      state.filteredServicesProductsWaitlist.searchByTag.push(
        action?.payload?.title,
      );
    },

    applyFilter: (state) => {
      const hasPeople = state.filteredPeopleWaitlist.length > 0;
      const hasProductOrService =
        state.filteredServicesProductsWaitlist.searchByName.length > 0;
      const hasTagSearch =
        state.filteredServicesProductsWaitlist.searchByTag.length > 0;

      // Function to match payer
      const matchPayer = (schedule: ClientType) =>
        state.filteredPeopleWaitlist.some(
          (person) => person.payer === schedule.payer,
        );

      // Function to match services by name
      const matchServiceByName = (item: ClientType) =>
        state.filteredServicesProductsWaitlist.searchByName.some(
          (service) =>
            service.services.toLowerCase() === item.services.toLowerCase(),
        );

      // Function to match services by tag
      const matchServiceByTag = (item: ClientType) =>
        state.filteredServicesProductsWaitlist.searchByTag.some(
          (tag) => tag.toLowerCase() === item.serviceType.toLowerCase(),
        );

      let filteredWaitlist = state.filteredScheduleDateWaitlist; //////////////////////////////
      if (hasPeople) {
        filteredWaitlist =
          state.filteredScheduleDateWaitlist.filter(matchPayer);

        if (hasProductOrService) {
          filteredWaitlist = filteredWaitlist.filter(matchServiceByName);
        } else if (hasTagSearch) {
          filteredWaitlist = filteredWaitlist.filter(matchServiceByTag);
        }
      } else if (hasProductOrService) {
        filteredWaitlist =
          state.filteredScheduleDateWaitlist.filter(matchServiceByName);
      } else if (hasTagSearch) {
        filteredWaitlist =
          state.filteredScheduleDateWaitlist.filter(matchServiceByTag);
      } else {
        filteredWaitlist = [...state.filteredScheduleDateWaitlist];
      }
      state.filteredWaitlist = filteredWaitlist;
      state.currentPage = 1;
    },
    resetToDefault: (state) => {
      const clients = getClientsByTab(state.currentTabSlug);
      state.filteredWaitlist = filterClientsBySearch(clients, "");
      state.currentPage = 1;
      state.duration.selectedLabel = "all";
      state.duration.selectedTitle = "All Time";
      state.tags.serviceType.selectedLabel = "all";
      state.tags.serviceType.selectedTitle = "show all service type";
      state.tags.statusType.selectedLabel = "all";
      state.tags.statusType.selectedTitle = "show all";
      state.filteredPeopleWaitlist = [];
      state.filteredServicesProductsWaitlist.searchByName = [];
      state.filteredServicesProductsWaitlist.searchByTag = [];
    },
  },
});

export const {
  setCurrentTabList,
  setCurrentPage,
  setSearchClient,
  setSelectedDuration,
  setfilteredPeopleWaitlist,
  applyFilter,
  setFilteredServicesByName,
  setSelectedServiceType,
  setSelectedStatusType,
  resetToDefault,
  removePeople,
  removeService,
  removeScheduledDuration,
} = clientSlice.actions;

export default clientSlice.reducer;
