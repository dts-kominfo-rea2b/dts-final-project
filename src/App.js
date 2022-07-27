import { Routes, Route } from "react-router-dom";

// pages & components
import Home  from "./Containers/Home"
import Popular from "./Containers/Popular"
import Favorites from "./Containers/Favorites";
import Details from "./Containers/Details";
import NotFound from "./Containers/NotFound";
import Layout from "./components/layout/Layout";
import Login from "./Containers/Login";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="popular" element={<Popular />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="games/:id" element={<Details />} />
        <Route path="login" element={<Login/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
