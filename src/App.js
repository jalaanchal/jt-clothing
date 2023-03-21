import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authhentication from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        {/* <Route path="shop" element={<Shop />} /> */}
        <Route path="auth" element={<Authhentication/>} />
      </Route>
    </Routes>
  );
};

export default App;
