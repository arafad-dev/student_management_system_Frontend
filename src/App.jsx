import Register from "./pages/Register"
import Login from "./pages/Login"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "./pages/admin/Dashboard";
import Students from "./pages/admin/Students";
import Courses from "./pages/admin/Courses";
import Reports from "./pages/admin/Reports";
import React, { useState } from "react";
import NotFound from "./pages/NotFound";
import Teacher from "./pages/admin/Teacher";

const App = () => {

  const PrivateRoute = ({ children }) => {

    const token = localStorage.getItem('token');

    return token ? children : <Navigate to="/login" replace />
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<PrivateRoute ><Dashboard /></PrivateRoute>} />
        <Route path="/admin-students" element={<PrivateRoute><Students /></PrivateRoute>} />
        <Route path="/admin-teacher" element={<PrivateRoute><Teacher /></PrivateRoute>} />
        <Route path="/admin-courses" element={<PrivateRoute><Courses /></PrivateRoute>} />
        <Route path="/admin-report" element={<Reports />} />
        <Route path="/" element={<Navigate to="/admin-dashboard" />} />
        <Route path="*" element={< NotFound />} />
      </Routes>
    </Router>
  )
}

export default App