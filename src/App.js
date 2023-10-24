import { publicRoutes, privateRoutes } from "./router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map(function(route, index) {
          const Page = route.page;

          return (
            <Route
              key={index}
              path={route.path}
              element={<Page />}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
