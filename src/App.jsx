import "./reset.module.scss";
import "./base.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminLoginPage } from "./pages";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="admin_login" element={<AdminLoginPage />} />
          <Route path="/" element={<AdminLoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
