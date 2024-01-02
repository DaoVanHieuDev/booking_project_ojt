import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Hotel from "./pages/Hotel";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./ultils/i18n";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route>
          <Route path="hotels" element={<List />} />
          <Route path="hotels/:id" element={<Hotel />} />{" "}
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
