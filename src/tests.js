// import React, { useState } from "react";
// import { getAuth, signOut } from "firebase/auth";
// import LoginPage from "./components/LoginPage";
// import Navbar from "./components/NavBar";
// import Header from "./components/Header";
// import ParticipantTable from "./components/ParticipantTable";
// import TableActions from "./components/TableActions";


// function App() {
//   const [user, setUser] = useState(null); // Almacena el usuario autenticado
//   const [rows, setRows] = useState([]);
//   const [count, setCount] = useState(0);

//   const handleLogin = (user) => {
//     setUser(user);
//   };

//   const updateRows = (newRows) => {
//     setRows(newRows);
//     setCount(newRows.length);
//   };

//   if (!user) {
//     return <LoginPage onLogin={handleLogin} />;
//   }

//   const handleLogout = () => {
//     const auth = getAuth();
//     signOut(auth).then(() => {
//       setUser(null);
//     }).catch((error) => {
//       console.error("Logout failed:", error);
//     });
//   };

//   return (
//     <div className="container mt-3">
//       <Navbar userEmail={user.email} onLogout={handleLogout} />
//       <TableActions updateRows={updateRows} />
//       <p className="m-5 h2">
//         Rows: <span>{count}</span>
//       </p>
      
//       <ParticipantTable rows={rows} />
      
//     </div>
//   );
// }

// export default App;
