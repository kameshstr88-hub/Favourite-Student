import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Students from "./pages/Students";
import Favourites from "./pages/Favourites";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Students />
            </ProtectedRoute>
          }
        />

        <Route
          path="/favourites"
          element={
            <ProtectedRoute>
              <Favourites />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;