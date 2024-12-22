// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard"; // Contenido protegido
// import PrivateRoute from "./components/PrivateRoute";

// function RoutesPage() {
//   const user = useSelector((state) => state.user.user);

//   return (
//     <Router>
//       <Routes>
//         {/* Ruta pública */}
//         <Route path="/login" element={<Login />} />

//         {/* Ruta protegida */}
//         <Route
//           path="/"
//           element={
//             <PrivateRoute>
//               <Dashboard />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default RoutesPage;