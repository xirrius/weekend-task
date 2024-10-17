import { SliderCardData } from "../../MockData";
import Rslide from "../Recoslide/Rslide";
import './Rc.css'
const Rc = () => {
  return (
    <div className="Rc_card">
      {SliderCardData.map((event, index) => {
        return <Rslide key={index} event={event} />;
      })}
    </div>
  );
};

export default Rc;
