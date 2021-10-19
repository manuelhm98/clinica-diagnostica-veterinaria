import { useEffect } from "react";
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
import QuoteType from "../pages/QuoteType";
import Brand from "../pages/Brand";
import { useDispatch, useSelector } from "react-redux";
import { readEmployeById } from "../redux/actions/employee";
import { checkRole } from "../utils/checkRole";
import BrandType from "../pages/BrandType";
import Vendors from "../pages/Vendors";
import Category from "../pages/Category";
import Product from "../pages/Product";
import ShoppingHistory from "../pages/ShoppingHistory";
import AddShoppingHistory from "../pages/AddShoppingHistory";

export default function Routes() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    return dispatch(readEmployeById(auth?.user?.userid));
  }, [dispatch, auth]);
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/breeds" exact>
          {user?.users && (
            <>{checkRole(user?.users) === 1 ? <Breeds /> : <Error404 />}</>
          )}
        </Route>
        <Route path="/species" exact>
          {user?.users && (
            <>{checkRole(user?.users) === 1 ? <Species /> : <Error404 />}</>
          )}
        </Route>
        <Route path="/colors" exact>
          {user?.users && (
            <>{checkRole(user?.users) === 1 ? <Colors /> : <Error404 />}</>
          )}
        </Route>
        <Route path="/sexes" exact>
          {user?.users && (
            <>{checkRole(user?.users) === 1 ? <Sexes /> : <Error404 />}</>
          )}
        </Route>
        <Route path="/pat-type" exact>
          {user?.users && (
            <>{checkRole(user?.users) === 1 ? <PatType /> : <Error404 />}</>
          )}
        </Route>
        <Route path="/customers" exact component={Customers} />
        <Route path="/patients" exact component={Patients} />
        <Route path="/new-patient" exact component={AddPatient} />
        <Route path="/service-type" exact>
          {user?.users && (
            <>{checkRole(user?.users) === 1 ? <ServiceType /> : <Error404 />}</>
          )}
        </Route>
        <Route path="/quotes" exact component={Quotes} />
        <Route path="/add-quote" exact component={AddQuote} />
        <Route path="/vaccination-type" exact>
          {user?.users && (
            <>
              {checkRole(user?.users) === 1 ? (
                <VaccinationType />
              ) : (
                <Error404 />
              )}
            </>
          )}
        </Route>
        <Route path="/deworming-type" exact>
          {user?.users && (
            <>
              {checkRole(user?.users) === 1 ? <DewormingType /> : <Error404 />}
            </>
          )}
        </Route>
        <Route path="/pest-control-type" exact>
          {user?.users && (
            <>
              {checkRole(user?.users) === 1 ? (
                <PestControlType />
              ) : (
                <Error404 />
              )}
            </>
          )}
        </Route>
        <Route path="/vaccination-dose" exact>
          {user?.users && (
            <>
              {checkRole(user?.users) === 1 ? (
                <VaccinationDose />
              ) : (
                <Error404 />
              )}
            </>
          )}
        </Route>
        <Route path="/clinical-service" exact component={ClinicalService} />
        <Route
          path="/add-clinical-service"
          exact
          component={AddClinicalService}
        />
        <Route path="/quote-type" exact component={QuoteType} />
        <Route path="/employees" exact>
          {user?.users && (
            <>{checkRole(user?.users) === 1 ? <Employees /> : <Error404 />}</>
          )}
        </Route>
        <Route path="/doctors" exact>
          {user?.users && (
            <>{checkRole(user?.users) === 1 ? <Doctors /> : <Error404 />}</>
          )}
        </Route>
        <Route path="/new-doctor" exact>
          {user?.users && (
            <>{checkRole(user?.users) === 1 ? <AddDoctor /> : <Error404 />}</>
          )}
        </Route>
        <Route path="/roles" exact>
          {user?.users && (
            <>{checkRole(user?.users) === 1 ? <Roles /> : <Error404 />}</>
          )}
        </Route>
        <Route path="/shifts" exact>
          {user?.users && (
            <>{checkRole(user?.users) === 1 ? <Shifts /> : <Error404 />}</>
          )}
        </Route>
        <Route path="/specialties" exact>
          {user?.users && (
            <>{checkRole(user?.users) === 1 ? <Specialties /> : <Error404 />}</>
          )}
        </Route>
        <Route path="/brand" exact component={Brand} />
        <Route path="/brand-type" exact component={BrandType} />
        <Route path="/vendors" exact component={Vendors} />
        <Route path="/category" exact component={Category} />
        <Route path="/product" exact component={Product} />
        <Route path="/shopping-history" exact component={ShoppingHistory} />
        <Route path="/add-shopping-history" exact component={AddShoppingHistory} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}
