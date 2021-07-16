import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { breedReducer } from "./reducers/breeds.reducer";
import { speciesReducer } from "./reducers/species.reducer";



const reducers = combineReducers({
  breed: breedReducer,
  specie:speciesReducer
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);