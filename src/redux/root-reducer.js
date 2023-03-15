import { combineReducers } from "@reduxjs/toolkit";


import authReducer from "./auth/auth-slice";
import contactsReduser from "./contacts/contacts-slice";
import filterReduser from "./filter/filter-slice";

const rootReduser = combineReducers({
    contacts: contactsReduser,
    filter: filterReduser,
    auth: authReducer,
})





export default rootReduser;