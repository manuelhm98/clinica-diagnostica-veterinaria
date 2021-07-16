import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { breedReducer } from "./reducers/breeds.reducer";
import { colorReducer } from "./reducers/colors.reducer";
import { customerReducer } from "./reducers/customer.reducer";
import { patTypeReducer } from "./reducers/pat-type.reducer";
import { patientReducer } from "./reducers/patient.reducer";
import { sexReducer } from "./reducers/sexes.reducer";
import { speciesReducer } from "./reducers/species.reducer";



const reducers = combineReducers({
  breed: breedReducer,
  specie:speciesReducer,
  color:colorReducer,
  sex:sexReducer,
  patType:patTypeReducer,
  customer:customerReducer,
  patient:patientReducer
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);