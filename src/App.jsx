import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import AuthRegister from "./pages/authentication/AuthRegister";

import Dashboard from "./components/Dashboard/Dashboard";
import Students from "./pages/Students/Students";
import Companies from "./pages/Companies/Companies";
import Placement from "./pages/Placements/Placement";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";
import Logout from "./pages/Logout/Logout";

import Student from "./components/studentdetails";
import EditStudent from "./pages/EditStudent/EditStudent";
import NotFound from "./pages/NotFound/NotFound";


function App() {

  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");

    return savedStudents 
      ? JSON.parse(savedStudents) 
      : [];
  });


  return (

    <Routes>


      {/* PUBLIC ROUTES */}

      <Route 
        path="/login" 
        element={<Login />} 
      />


      <Route 
        path="/auth/register" 
        element={<AuthRegister />} 
      />



      {/* PROTECTED ROUTES */}

      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >


        <Route 
          path="/" 
          element={<Home />} 
        />


        <Route 
          path="/dashboard" 
          element={<Dashboard />} 
        />


        <Route
          path="/students"
          element={
            <Students
              students={students}
              setStudents={setStudents}
            />
          }
        />


        <Route
          path="/students/:id"
          element={<Student />}
        />


        <Route
          path="/students/edit/:id"
          element={
            <EditStudent
              students={students}
              setStudents={setStudents}
            />
          }
        />



        {/* Companies */}

        <Route
          path="/companies"
          element={<Companies />}
        />


        <Route
          path="/companies/:id"
          element={<Companies />}
        />



        {/* Other Pages */}

        <Route
          path="/placements"
          element={<Placement />}
        />


        <Route
          path="/reports"
          element={<Reports />}
        />


        <Route
          path="/settings"
          element={<Settings />}
        />


        <Route
          path="/logout"
          element={<Logout />}
        />


      </Route>



      {/* NOT FOUND */}

      <Route
        path="*"
        element={<NotFound />}
      />


    </Routes>

  );
}


export default App;