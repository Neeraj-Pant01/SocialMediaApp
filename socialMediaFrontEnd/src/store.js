import { createStore } from "redux";
import reducer from "./components/redux/reucers";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "user-login",
    storage
}
const persistedReducer = persistReducer(persistConfig,reducer)

const store = createStore(persistedReducer,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export let persistedStore = persistStore(store)

export default store;