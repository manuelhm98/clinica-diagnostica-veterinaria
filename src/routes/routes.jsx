import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { readEmployeById } from "../redux/actions/employee";
import { checkRole } from "../utils/checkRole";

import Loading from "../components/Global/Loading";
import Breeds from "../pages/Breeds";
const Product = lazy(() => import("../pages/Product"));
const Customers = lazy(() => import("../pages/Customers"));
const Patients = lazy(() => import("../pages/Patients"));
const Vendors = lazy(() => import("../pages/Vendors"));
const Category = lazy(() => import("../pages/Category"));
const ShoppingHistory = lazy(() => import("../pages/ShoppingHistory"));
const AddShoppingHistory = lazy(() => import("../pages/AddShoppingHistory"));
const Quotes = lazy(() => import("../pages/Quotes"));
const Roles = lazy(() => import("../pages/Roles"));
const ServiceType = lazy(() => import("../pages/ServiceType"));
const Sexes = lazy(() => import("../pages/Sexes"));
const Shifts = lazy(() => import("../pages/Shifts"));
const Specialties = lazy(() => import("../pages/Specialties"));
const Species = lazy(() => import("../pages/Species"));
const AddQuote = lazy(() => import("../pages/AddQuote"));
const VaccinationType = lazy(() => import("../pages/VaccinationType"));
const DewormingType = lazy(() => import("../pages/DewormingType"));
const PestControlType = lazy(() => import("../pages/PestControlType"));
const VaccinationDose = lazy(() => import("../pages/VaccinationDose"));
const ClinicalService = lazy(() => import("../pages/ClinicalService"));
const AddClinicalService = lazy(() => import("../pages/AddClinicalService"));
const QuoteType = lazy(() => import("../pages/QuoteType"));
const Brand = lazy(() => import("../pages/Brand"));
const AddDoctor = lazy(() => import("../pages/AddDoctor"));
const AddPatient = lazy(() => import("../pages/AddPatient"));
const Colors = lazy(() => import("../pages/Colors"));
const Doctors = lazy(() => import("../pages/Doctors"));
const Employees = lazy(() => import("../pages/Employees"));
const PatType = lazy(() => import("../pages/PatType"));
const SalesHistory = lazy(() => import("../pages/SalesHistory"));
const Sale = lazy(() => import("../pages/Sale"));

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
        <Suspense fallback={<Loading />}>
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

          <Route path="/patients" exact component={Patients} />
          <Route path="/new-patient" exact component={AddPatient} />
          <Route path="/service-type" exact>
            {user?.users && (
              <>
                {checkRole(user?.users) === 1 ? <ServiceType /> : <Error404 />}
              </>
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
                {checkRole(user?.users) === 1 ? (
                  <DewormingType />
                ) : (
                  <Error404 />
                )}
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
              <>
                {checkRole(user?.users) === 1 ? <Specialties /> : <Error404 />}
              </>
            )}
          </Route>
          <Route path="/brand" exact>
            {user?.users && (
              <>{checkRole(user?.users) === 1 ? <Brand /> : <Error404 />}</>
            )}
          </Route>
          <Route path="/vendors" exact>
            {user?.users && (
              <>{checkRole(user?.users) === 1 ? <Vendors /> : <Error404 />}</>
            )}
          </Route>
          <Route path="/category" exact>
            {user?.users && (
              <>{checkRole(user?.users) === 1 ? <Category /> : <Error404 />}</>
            )}
          </Route>

          <Route path="/customers" exact>
            <Customers />
          </Route>
          <Route path="/product" exact>
            {user?.users && (
              <>{checkRole(user?.users) === 1 ? <Product /> : <Error404 />}</>
            )}
          </Route>

          <Route path="/shopping-history" exact>
            {user?.users && (
              <>
                {checkRole(user?.users) === 1 ? (
                  <ShoppingHistory />
                ) : (
                  <Error404 />
                )}
              </>
            )}
          </Route>
          <Route path="/sales-history" exact>
            {user?.users && (
              <>
                {checkRole(user?.users) === 1 ? <SalesHistory /> : <Error404 />}
              </>
            )}
          </Route>
          <Route path="/sale/:id" exact>
            {user?.users && (
              <>{checkRole(user?.users) === 1 ? <Sale /> : <Error404 />}</>
            )}
          </Route>
          <Route path="/add-shopping-history" exact>
            {user?.users && (
              <>
                {checkRole(user?.users) === 1 ? (
                  <AddShoppingHistory />
                ) : (
                  <Error404 />
                )}
              </>
            )}
          </Route>
        </Suspense>
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}
