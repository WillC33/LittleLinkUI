import {ShortenerForm} from "./components/";
import {ExternalRoute} from "./components"
import './app.css'
import {Router} from "preact-router";
import {ErrorBoundary} from "./components/Boundaries/index.js";
export const App = () =>  {
    return (
        <ErrorBoundary>
        <Router>
            <ShortenerForm path="/"/>
            <ExternalRoute path="/go/:hash"/>
        </Router>
        </ErrorBoundary>
    );
}
