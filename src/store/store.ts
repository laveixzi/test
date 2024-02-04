import { configureStore } from "@reduxjs/toolkit";
import { dexApiV1 } from "./api/dexApiSlice";
import { themeReducer } from "./features/themeSlice";


export const store = configureStore({
  reducer: {
    [dexApiV1.reducerPath]: dexApiV1.reducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(dexApiV1.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
