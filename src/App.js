import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/page/Home";
import Reservation from "./components/reservation/Reservation";
import HolydayPicker from "./components/holyday/HolydayPicker";
import PostDetail from "./components/page/PostDetail";
import NewPost from "./components/page/NewPost";
import Post from "./components/page/Post";
import NavBara from "./components/layout/NavBara";
import FacitList from "./components/facit/FacitList";
import FacitDetail from "./components/facit/FacitDetail";
import ReservationListByFcSeq from "./components/reservation/ReservationListByFcSeq";
import Footer from "./components/layout/Footer";
import RegisterPage from "./components/page/RegisterPage"
import FacitMap2 from "./components/facit/FacitMap2";
import LoginPage from "./components/page/LoginPage";


function App() {
  return (
    <BrowserRouter>
      <NavBara />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/HolyDay" element={<HolydayPicker />} />
        <Route path="/post" element={<Post />} />
        <Route path="/write" element={<NewPost />} />
        <Route path="/posts/:pstgSeq" element={<PostDetail />} />
        <Route path="/reservation/:fcSeq" element={<Reservation />} />
        <Route path="/facitlist" element={<FacitList />} />
        <Route path="/facit/:fcSeq" element={<FacitDetail />} />
        <Route path="/reservationList/:fcSeq" element={<ReservationListByFcSeq />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;