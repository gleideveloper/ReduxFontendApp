import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './features/todo.slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['todos'],// Aqui você especifica quais reducers devem ser persistidos (neste caso, apenas o 'todos')
};

const rootReducer = combineReducers({
    todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
