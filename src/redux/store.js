import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";
import { breedReducer } from "./reducers/breeds.reducer";
import { colorReducer } from "./reducers/colors.reducer";
import { customerReducer } from "./reducers/customer.reducer";
import { dewormingTypeReducer } from "./reducers/deworming-type.reducer";
import { doctorReducer } from "./reducers/doctor.reducer";
import { employeeReducer } from "./reducers/employee.reducer";
import { patTypeReducer } from "./reducers/pat-type.reducer";
import { patientReducer } from "./reducers/patient.reducer";
import { quoteReducer } from "./reducers/quotes.reducer";
import { rolReducer } from "./reducers/role.reducer";
import { serviceTypeReducer } from "./reducers/service-type.reducer";
import { sexReducer } from "./reducers/sexes.reducer";
import { shiftReducer } from "./reducers/shifts.reducer";
import { speciallyReducer } from "./reducers/specially.reducer";
import { speciesReducer } from "./reducers/species.reducer";
import { vaccinationTypeReducer } from "./reducers/vaccination-type.reducer";
import { pestControlTypeReducer } from "./reducers/pest-control-type.reducer";
import { vaccinationDoseReducer } from "./reducers/vaccination-dose.reducer";

const reducers = combineReducers({
  breed: breedReducer,
  specie: speciesReducer,
  color: colorReducer,
  sex: sexReducer,
  patType: patTypeReducer,
  customer: customerReducer,
  patient: patientReducer,
  serviceType: serviceTypeReducer,
  role: rolReducer,
  shift: shiftReducer,
  employee: employeeReducer,
  specially: speciallyReducer,
  doctor: doctorReducer,
  quote: quoteReducer,
  auth: authReducer,
  vaccinationType: vaccinationTypeReducer,
  dewormingType: dewormingTypeReducer,
  pestControlType: pestControlTypeReducer,
  vaccinationDose: vaccinationDoseReducer
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
