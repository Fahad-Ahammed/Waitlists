import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import data from "@/lib/data";
import { ClientType } from "@/lib/data";


type InitialState = {
  clients: ClientType[];  
};

const initialState: InitialState = {
  clients: [...data],
};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {},
});

export const {} = clientSlice.actions;

export default clientSlice.reducer;
