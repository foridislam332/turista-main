import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import AllPackage from './Pages/Home/AllPackage/AllPackage';
import Home from './Pages/Home/Home/Home';
import SinglePackageDetails from './Pages/Home/SinglePackageDetails/SinglePackageDetails';
import Login from './Pages/Login/Login';
import Order from './Pages/Order/Order';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import PrivateRoute from './Pages/PrivateRoute.js/PrivateRoute';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/all-package">
                            <AllPackage></AllPackage>
                        </Route>
                        <PrivateRoute path="/package/:id">
                            <SinglePackageDetails></SinglePackageDetails>
                        </PrivateRoute>
                        <PrivateRoute path="/order">
                            <Order></Order>
                        </PrivateRoute>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route exact path="*">
                            <PageNotFound></PageNotFound>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
