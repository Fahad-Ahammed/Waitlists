import { configureStore } from "@reduxjs/toolkit";
import waitlistReducer from "./waitlist/clientSlice";

export const store = configureStore({
  reducer: {
    waitlist: waitlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
