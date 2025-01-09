import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";
import routes from "./routes";
function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {routes.map((route, index) => {
          if (route.route && route.component) {
            return (
              <Route
                key={route.key}
                path={route.route}
                element={route.component}
              />
            );
          }
          return null;
        })}
      </Routes>
    </Router>
  );
}

export default App;
