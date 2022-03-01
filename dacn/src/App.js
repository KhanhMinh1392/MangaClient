import "./App.css";
import "antd/dist/antd.css";
import AppHeader from "./component/MenuHome/AppHeader";
import Banner from "./component/Banner/Banner";


import { Layout } from "antd";
const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <AppHeader />
      </Header>
      <Content>
        <Banner />
      </Content>
    </Layout>
  );
}

export default App;
