import "./App.scss";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
 import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import { Navigate, Route, Router, Routes } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={user ? <Home /> : <Navigate to="/register" />}
      />
      <Route
        exact
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      />
      <Route
        exact
        path="/login"
        element={!user ? <Login /> : <Navigate to="/" />}
      />
      {user && (
        <>
          <Route path="/movies" element={<Home type="movies" />} />
          <Route path="/series" element={<Home type="series" />} />
          <Route path="/watch" element={<Home type="watch" />} />
        </>
      )}
    </Routes>
  ); 
};

export default App;
