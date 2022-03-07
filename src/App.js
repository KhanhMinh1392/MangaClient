import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import Carousels from "./component/Carousels/Carousels";
import routes from "./component/Routes/routes";
import Navbar from "./component/Navbar/Navbar";

import "./App.css";
import "antd/dist/antd.css";
import { Suspense } from "react";
const { Header, Content } = Layout;

const Routing = () => {
  return (
    <Switch>
      {routes.map((route, i) => {
        <Route
          key={i}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />;
      })}
    </Switch>
  );
};

function App() {
  return (
    <Suspense>
      <Router>
        <Layout className="mainLayout">
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <Navbar />
            <Carousels />
          </Header>
          <Content style={{ padding: '0 50px',marginTop: "600px" }}>
            <div style={{color: "black"}}>Hello</div>
            {Routing()}
            </Content>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
