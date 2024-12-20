import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Usa almacenamiento local
import userReducer from "./userSlice";

// Configuración de persistencia
const persistConfig = {
  key: "root",
  storage,
};

// Reducer persistente
const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignorar las acciones específicas de redux-persist
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// Configuración para redux-persist
export const persistor = persistStore(store);

export default store;
