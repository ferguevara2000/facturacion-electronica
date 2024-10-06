// import icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

// import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard";
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main d-flex">
        <div className="sidebarWrapper">
          <Sidebar />
        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
