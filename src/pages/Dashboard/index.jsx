import Cslide from "../../components/Cor2/Cslide";
import Slide from "../../components/Corosal/Slide";
import './dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="content">
        <div className="carousel-1">
          <h1 className="carousel-heading">Good morning Charlie!</h1>
          <p className="carousel-desc">
            Below listed are your itineraries, have a look to the timings and
            the location.
          <br/>
          We wish you to enjoy the activities and the weather!</p>
          <Slide />
        </div>
        <Cslide />
      </div>
    </div>
  );
};
export default Dashboard;
