import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ContactPage } from './pages/ContactPage';
import { StatisticPage } from './pages/StatisticPage';
import { ContactDetailsPage } from './pages/ContactDetailsPage';
import { HomePage } from './pages/HomePage';
import NavBar from './components/navBar';
import './assets/scss/global.scss';
import { ContactEditPage } from './pages/ContactEditPage';
// import 'bootstrap/dist/css/bootstrap.css';

export function App() {
    return (
        <React.Fragment>
            <NavBar />
            <main className="">
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/contact/edit/:id?" component={ContactEditPage} />
                    <Route path="/contact/:id" component={ContactDetailsPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/statistic" component={StatisticPage} />
                    <Redirect from="/" exact to="/home" />
                </Switch>
            </main>
        </React.Fragment>
    );
}
