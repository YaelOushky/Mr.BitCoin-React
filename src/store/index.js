import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { contactReducer } from "./reducers/contactReducer";
import { userReducer } from "./reducers/userReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    contactModule: contactReducer,
    userModule: userReducer
})


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
console.log('store:', store);
window.myStore = store
