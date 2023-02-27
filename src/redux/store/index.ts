import { configureStore } from "@reduxjs/toolkit";
import cryptoSlice from "./cryptoSlice";

const store = configureStore({
  reducer: {
    cryptos: cryptoSlice,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;