import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from "./components/Banner";
import Error404 from "./components/Error";
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route exact path="/">
              <Banner />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
