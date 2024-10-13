import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import MyFavourites from "./pages/MyFavourites";
import UpcomingEvents from "./pages/UpcomingEvents";
import Settings from "./pages/Settings";
import EditProfile from "./pages/EditProfile";
import Feedback from "./pages/Feedback";
import "swiper/css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Navbar}>
            <Route index Component={Dashboard}></Route>
            <Route path="/my-favourites" Component={MyFavourites}></Route>
            <Route path="/upcoming-events" Component={UpcomingEvents}></Route>
            <Route path="/feedback" Component={Feedback}></Route>
            <Route path="/settings" Component={Settings}></Route>
            <Route path="/edit-profile" Component={EditProfile}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
