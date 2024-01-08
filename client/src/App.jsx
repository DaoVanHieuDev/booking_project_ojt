import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Admin from "./pages/Admin";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import List from "./pages/List";
import Login from "./pages/Login";
import PaymentDetail from "./pages/PaymentDetail";
import Register from "./pages/Register";
import "./ultils/i18n";

import "react-toastify/dist/ReactToastify.css";
// import createStore from "../src/redux/index";
function App() {
  // const store = createStore();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route extact path="/" element={<Home />} />
          <Route>
            <Route path="/hotels/:id" element={<List />} />
          </Route>
          <Route path="payment/:id" element={<PaymentDetail />} />
          <Route path="admin" element={<Admin />} />
          {/* <Route path="/*" element={<ErrorPage />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
    // <Provider store={store}>

    // </Provider>
  );
}

export default App;
