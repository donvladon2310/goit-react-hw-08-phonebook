import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"


import authReducer from "./auth/auth-slice";
import contactsReduser from "./contacts/contacts-slice";
import filterReduser from "./filter/filter-slice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token']
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

const rootReduser = combineReducers({
    auth: persistedAuthReducer,
    contacts: contactsReduser,
    filter: filterReduser,

})





export default rootReduser;