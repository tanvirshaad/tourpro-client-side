import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
