import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header";
import About from "./Pages/About";
import Videos from "./Pages/Videos";
import VideoSlider from "./Pages/VideosSlider";
import FeedBack from "./Pages/FeedBack";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import SingleVideo from "./Pages/Singlevideo";
import Detailspage from "./Pages/Detailspage";
import Home from "./Pages/Home";
import Admin from "./Admin/AdminPannel";
import AdminVideo from "./Admin/Video/AdminVideo";
import Categories from "./Admin/Category";
import SubCategories from "./Admin/SubCatory";
import User from "./Admin/User";
import Registration from "./Admin/Contact/Sign";
import Login from "./Admin/Contact/login";
import PrivateRoute from "./Admin/PrivateRoute ";
import MainRoute from "./Components/Header/MainRoute";
import Notfound from "./Pages/NotFound";
import Sidebar from "./Admin/AdminPannel/AdminSide";
import Hooks from "./Hooks";

function App() {
  return (
    <div>
      <MainRoute>
        <Header />
      </MainRoute>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hook" element={<Hooks />} />
        <Route path="/about" element={<About />} />
        <Route path="/video" element={<Videos />} />
        <Route path="/singlecateroy/:id" element={<SingleVideo />} />
        <Route path="/videodetail/:id" element={<Detailspage />} />
        <Route path="/categories" element={<VideoSlider />} />
        <Route path="/feedBack" element={<FeedBack />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route path="/adminvideo" element={<AdminVideo />} />
        <Route path="/Admincategories" element={<Categories />} />
        <Route path="/subCategories" element={<SubCategories />} />
        <Route path="/user" element={<User />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/panel" element={<Sidebar />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
