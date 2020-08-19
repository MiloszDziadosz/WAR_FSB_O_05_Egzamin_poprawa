import React from "react";
import {HashRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import Main from './Main';
import About from './About';
import Platform from './Platform';
import NotFound from './NotFound';
import store from "../redux/store";
import {Provider} from 'react-redux';

const Navigation = () => {
    let style = {
        color: 'red',
        fontWeight: 'bold'
    };

    return <ul>
        <li><NavLink exact to={'/'} activeStyle={style}>Strona Główna</NavLink></li>
        <li><NavLink exact to={'/platform'} activeStyle={style}>Platforma</NavLink></li>
        <li><NavLink exact to={'/about'} activeStyle={style}>O Aplikacji</NavLink></li>
    </ul>
}

const App = () => {
    console.log("Coś jest ni etak")
    return <Provider store={store}>
        <HashRouter>
            <Navigation/>
            <Switch>
                <Route exact path={'/'} component={Main}/>
                <Route path={'/platform'} component={Platform}/>
                <Route path={'/about'} component={About}/>
                <Route path={'*'} component={NotFound}/>
            </Switch>
        </HashRouter>
    </Provider>
};

export default App;