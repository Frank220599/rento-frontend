import React from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";

import MainRotes from "./MainRoutes";
import MainLayout from "layout/MainLayout";
import ScrollToTopOnMount from "components/ScrollToTopOnMount";


const AppRouter = () => (
    <Router>
        <Switch>
            {
                MainRotes.map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        component={
                            typeof route.layout === "undefined"
                                ? ScrollToTopOnMount(MainLayout(route.component))
                                : route.component
                        }
                        exact={route.exact}
                    />
                ))
            }
        </Switch>
    </Router>
);

export default AppRouter;
