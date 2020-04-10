import React from "react";
import {Switch, Route} from "react-router-dom";

//components
import Dashboard from "./Components/Dashboard/Dashboard";
import Wizard from "./Components/Wizard/Wizard";
// import Image from "./Components/Step 2/Image";
// import Mortgage from "./Components/Step 3/Mortgage";

export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/wizard' component={Wizard} />
        {/* <Route component={Image} path='/step2' /> */}
        {/* <Route component={Mortgage} path='/step3' /> */}
        {/* <Route component={} path='/statelist/:state' /> */}
    </Switch>
)