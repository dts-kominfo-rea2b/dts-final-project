import { Routes, Route } from "react-router-dom";

// pages & components
import Home  from "./Containers/Home"
import Popular from "./Containers/Popular"
import Favorites from "./Containers/Favorites";
import Details from "./Containers/Details";
import NotFound from "./Containers/NotFound";
import Layout from "./components/layout/Layout";
import Login from "./Containers/Login";
import Register from "./Containers/Register";
import PrivateComponent from "./Containers/PrivateComponent";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="popular" element={<PrivateComponent loginOnly={true}>
          <Popular />
          </PrivateComponent>} />
        <Route path="favorites" element={<PrivateComponent loginOnly={true}>
          <Favorites />
          </PrivateComponent>} />
        <Route path="games/:id" element={<PrivateComponent loginOnly={true}>
          <Details />
          </PrivateComponent>} />
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={
          <PrivateComponent loginOnly={false}>
            <Login />
          </PrivateComponent>} />
        <Route path="register" element={
          <PrivateComponent loginOnly={false}>
            <Register/>
          </PrivateComponent>} />
      </Routes>
    </Layout>
  );
}

export default App;
