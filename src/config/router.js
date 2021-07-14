import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Redirect,
    Switch
} from 'react-router-dom'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Club from '../pages/Club';
import Ecole from '../pages/Ecole';
import Home from '../pages/Home';
import Membres from '../pages/Membres';
import Planning from '../pages/Planning';
import Tarifs from '../pages/Tarifs';

const Routes = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/club" exact component={Club} />
                <Route path="/ecole" exact component={Ecole} />
                <Route path="/membres" exact component={Membres} />
                <Route path="/planning" exact component={Planning} />
                <Route path="/tarifs" exact component={Tarifs} />
                <Redirect to='/'></Redirect>
            </Switch>
            <Footer/>
        </Router>
    );
};

export default Routes;