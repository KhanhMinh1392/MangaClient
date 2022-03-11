import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import Carousels from "./component/Carousels/Horizontal/Horizontal";
import routes from "./component/Routes/routes";
import Navbar from "./component/Navbar/Navbar";

import "./App.css";
import "antd/dist/antd.css";
import { Suspense } from "react";
import LoadingPage from "./component/Loading/LoadingPage/LoadingPage";
import FooterContainer from "./component/Footer/FooterContainer";
const { Header, Content, Footer } = Layout;

const Routing = () => {
  return (
    <Switch>
      {routes.map((route, i) => {
        return (
          <Route
            key={i}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        );
      })}
    </Switch>
  );
};

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Router>
        <Layout className="mainLayout" style={{ minHeight: "100vh" }}>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <Navbar />
          </Header>
          <Carousels />
          <Content style={{ padding: "0 50px" }}>{Routing()}</Content>
          <Footer>
            {/* <FooterContainer /> */}
          </Footer>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
