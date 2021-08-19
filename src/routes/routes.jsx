import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddDoctor from "../pages/AddDoctor";
import AddPatient from "../pages/AddPatient";
import Breeds from "../pages/Breeds";
import Colors from "../pages/Colors";
import Customers from "../pages/Customers";
import Doctors from "../pages/Doctors";
import Employees from "../pages/Employees";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Patients from "../pages/Patients";
import PatType from "../pages/PatType";
import Quotes from "../pages/Quotes";
import Roles from "../pages/Roles";
import ServiceType from "../pages/ServiceType";
import Sexes from "../pages/Sexes";
import Shifts from "../pages/Shifts";
import Specialties from "../pages/Specialties";
import Species from "../pages/Species";
import AddQuote from "../pages/AddQuote";
import VaccinationType from "../pages/VaccinationType";
import DewormingType from "../pages/DewormingType";
import PestControlType from "../pages/PestControlType";
import VaccinationDose from "../pages/VaccinationDose";
import ClinicalService from "../pages/ClinicalService";
import AddClinicalService from "../pages/AddClinicalService";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/breeds" exact component={Breeds} />
        <Route path="/species" exact component={Species} />
        <Route path="/colors" exact component={Colors} />
        <Route path="/sexes" exact component={Sexes} />
        <Route path="/pat-type" exact component={PatType} />
        <Route path="/customers" exact component={Customers} />
        <Route path="/patients" exact component={Patients} />
        <Route path="/new-patient" exact component={AddPatient} />
        <Route path="/new-doctor" exact component={AddDoctor} />
        <Route path="/service-type" exact component={ServiceType} />
        <Route path="/doctors" exact component={Doctors} />
        <Route path="/roles" exact component={Roles} />
        <Route path="/shifts" exact component={Shifts} />
        <Route path="/specialties" exact component={Specialties} />
        <Route path="/employees" exact component={Employees} />
        <Route path="/quotes" exact component={Quotes} />
        <Route path="/add-quote" exact component={AddQuote} />
        <Route path="/vaccination-type" exact component={VaccinationType} />
        <Route path="/deworming-type" exact component={DewormingType} />
        <Route path="/pest-control-type" exact component={PestControlType} />
        <Route path="/vaccination-dose" exact component={VaccinationDose} />
        <Route path="/clinical-service" exact component={ClinicalService} />
        <Route
          path="/add-clinical-service"
          exact
          component={AddClinicalService}
        />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}
