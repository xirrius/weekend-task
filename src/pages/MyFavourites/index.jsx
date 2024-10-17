import Exs from "../../components/Exploreslide/Exs";
import Number from "../../components/FvrtNumber/number";
import Remove from "../../components/Myfvrt_remove/Remove";
import "./my-favourites.css";

const MyFavourites = () => {
  return (
    <div className="main_fvrt">
      <div className="container">
        <div className="header_fvrt">
          <p className="pfvt">Good morning Charlie!</p>
          <p className="pfvr">You have short listed 8 events to join later.</p>
        </div>
        <div className="remove_fvrt">
          <Remove />
        </div>
        </div>

        <div className="content">
        <div className="Exs_swipper">
          <p className="pfvt">
            Charlie, we have find some recommendation for you
          </p>
          <div className="EXs">
            <Exs />
          </div>
        </div>
        </div>
        <div className="container">
        <p className="pfvt">Top 5 activities on this island today</p>
        <Number />
      </div>
    </div>
  );
};

export default MyFavourites;