import { Layout } from "antd";
import "antd/dist/antd.css";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Carousels from "./component/Carousels/Horizontal/Horizontal";
import FooterContainer from "./component/Footer/FooterContainer";
import LoadingPage from "./component/Loading/LoadingPage/LoadingPage";
import NavbarService from "./component/Navbar/NavbarService";
import routes from "./component/Routes/routes";

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
            <NavbarService />
          </Header>
          <Content>
            <Carousels />
            <div style={{ padding: "0 50px" }}>{Routing()}</div>
          </Content>
          <Footer className="footer">
            <FooterContainer />
          </Footer>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
