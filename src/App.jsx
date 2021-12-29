import React from 'react';
import { HashRouter as Router,Route, Switch, Redirect } from 'react-router-dom';
import { ContactPage } from './pages/ContactPage';
import { StatisticPage } from './pages/StatisticPage';
import { ContactDetailsPage } from './pages/ContactDetailsPage';
import { HomePage } from './pages/HomePage';
import NavBar from './components/navBar';
import './assets/scss/global.scss';
import { ContactEditPage } from './pages/ContactEditPage';
import { SignupPage } from './pages/SignupPage';
// import 'bootstrap/dist/css/bootstrap.css';

export function App() {
    return (
        <Router>
            <NavBar />
            <main className="">
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/contact/edit/:id?" component={ContactEditPage} />
                    <Route path="/signup" component={SignupPage} />
                    <Route path="/contact/:id" component={ContactDetailsPage} />
                    <Route path="/contact" component={ContactPage} />
                    {/* <Route path="/statistic" component={StatisticPage} /> */}
                    <Route path="/statistic" component={StatisticPage} />
                    <Redirect from="/" exact to="/signup" />
                </Switch>
            </main>
        </Router>
    );
}
