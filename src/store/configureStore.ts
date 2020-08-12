import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { countryReducer } from "./reducers";
import { AppActions } from "./actionTypes/actions";

export const rootReducer = combineReducers({
    countries: countryReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);