import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "../slice/favoriteSlice";
import cartSlice from "../slice/cartSlice";
import currencySlice from '../slice/currensySlice'
import { api } from "../api";

const store = configureStore({
   reducer: {
      favorite: favoriteSlice,
      cart: cartSlice,
      currency: currencySlice,
      [api.reducerPath]: api.reducer,
   },
   middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store}