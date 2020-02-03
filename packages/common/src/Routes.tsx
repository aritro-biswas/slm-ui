import React from "react";
import { CurrentWorkout } from "./modules/CurrentWorkout";
import { WorkoutHistory } from "./modules/WorkoutHistory";
import { SalineLevel } from "./modules/SLMDashboard";
import { Route, Router, Switch } from "./Router/index";
import  Test  from "./modules/Test"

export const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={WorkoutHistory} /> */}
        {/* <Route exact path="/" component={Test} /> */}
        <Route exact path="/" component={SalineLevel} />
        {/* <Route exact path="/current-workout" component={CurrentWorkout} /> */}
        {/* <Route
          exact
          path="/workout/:year/:month/:day"
          component={CurrentWorkout}
        /> */}
      </Switch>
    </Router>
  );
};
