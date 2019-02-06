import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './Home';
import Art from './Art';
import Bio from './Bio';
import Contact from './Contact';

function MainContainer() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/art" component={Art}/>
                <Route path="/bio" component={Bio}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </div>
    )
}

export default MainContainer;