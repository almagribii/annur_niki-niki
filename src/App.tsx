import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import KegiatanList from "./components/KegiatanList";
import "./App.css";

// Ini adalah komponen untuk halaman utama Anda
const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Selamat Datang di Website Masjid</h1>
        <p>Halaman ini adalah halaman utama Anda.</p>
        <Link to="/admin">Go to Admin</Link>
      </header>
      <hr />
      <KegiatanList />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
