import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouters } from "./Router";
import DefaultLayout from "./components/Layout/DefaulLayout";
function App() {
  return (
    <Router>
      <div style={{ maxWidth: "100%" }}>
        <Routes>
          {publicRouters.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
