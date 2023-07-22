import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProdutoReducer from "./features/produto.slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rooReducer = combineReducers({
    produto: ProdutoReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rooReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
