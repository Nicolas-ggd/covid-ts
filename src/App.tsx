import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { PrivateRoutes } from "./utils/PrivateRoute";
import { Country } from "./components/Country/Country";
import { CountryDetail } from "./components/Country/CountryDetails/CountryDetails";
import { Page404 } from "./components/404/Page404";
import { SignIn } from "./components/Auth/SignIn/SignIn";
import { Auth } from "./components/Auth/Auth";
import { ForgotPassword } from "./components/Auth/ForgotPassword/ForgotPassword";


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Country />} path="/country"></Route>
          <Route path="/:country" element={<CountryDetail />}></Route>
        </Route>
        <Route path="/" element={<Auth />}></Route>
        <Route path="/verify" element={<SignIn />}></Route>
        <Route path="/reset-password" element={<ForgotPassword />}></Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
