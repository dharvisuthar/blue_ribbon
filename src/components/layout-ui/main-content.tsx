import React, { Suspense, lazy } from 'react';
import { withRouter } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { MDBProgress } from "mdbreact";
import { NavigationPaths } from "../../enums/navigation-paths";
const Home = lazy(() => import("../home/home-container"));
const Gallery = lazy(() => import("../gallery/gallery-container"));
const MainContent = () => {

    /**
     * load components
     * 
     */
    const loadComponents = () => {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path={"/" + NavigationPaths.Home} component={Home} />
                    <Route exact path={"/" + NavigationPaths.Gallery} component={Gallery} />
                </Switch>
            </Router>
        )
    }

    /**
     * return the main component
     */
    return (
        <Suspense fallback={<MDBProgress />}>
            {
                loadComponents()
            }
        </Suspense>
    )
}

export default withRouter(MainContent);