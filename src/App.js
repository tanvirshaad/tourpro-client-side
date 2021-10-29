import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <PrivateRoute path="/booking/:id">
                            <Booking></Booking>
                        </PrivateRoute>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
