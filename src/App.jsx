import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { clearUser } from "./redux/userSlice";
import NavBar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./auth/pages/PrivateRoute";
import Swal from 'sweetalert2';


function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Mostrar alerta de confirmación
    Swal.fire({
      title: "Estas cerrando sesion!",
      text: "¿Deseas continuar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Cerrar sesión con Firebase
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            dispatch(clearUser()); // Limpiar estado global
            Swal.fire("¡Sesión cerrada!", "Ha cerrado sesión correctamente.", "success");
          })
          .catch((error) => {
            Swal.fire("Error", "No se pudo cerrar la sesión.", "error");
            console.error("Error logging out:", error);
          });
      }
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              {user && <NavBar userEmail={user.email} onLogout={handleLogout} />}
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
