import { BrowserRouter, Route, Routes ,useNavigate} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Admin from "./pages/Admin";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import List from "./pages/List";
import Login from "./pages/Login";
import PaymentDetail from "./pages/PaymentDetail";
import Register from "./pages/Register";
import "./ultils/i18n";
import Rooms from "./pages/Rooms";
import "react-toastify/dist/ReactToastify.css";

function App() {

  // const navigate = useNavigate();
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };
  // useEffect(() => {
  //   scrollToTop();
  // }, [navigate]);

  return (
    <> 
        <BrowserRouter>
      <Routes>
        <Route extact path="/" element={<Home />} />
        <Route path="/hotels/:id" element={<List />} />
        <Route path="/payment/:id" element={<PaymentDetail />} />
        <Route path="/rooms/:id" element={<Rooms />} />
        <Route path="admin" element={<Admin />} />
        <Route path="/*" element={<ErrorPage />} />
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


   
  );
}

export default App;
