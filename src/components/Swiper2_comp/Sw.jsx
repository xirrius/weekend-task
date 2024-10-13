import './Sw.css'; 

const Sw = ({ event }) => {
  return (
    <div className="sw-container">
       <div className="sw-image">
      <img src={event.img} alt={event.title} />
       </div>
      <div className="sw-content">
        <h3 className="sw-title">{event.title}</h3>
        <span className="sw-date">{event.date}</span>
        <p className="sw-detail">{event.detail}</p>
        <div className="sw-buttons">
          <button className="sw-button accept-button">{event.status}</button>  
           <span className='notice'>{event.notice}</span>
        </div>
      </div>
    </div>
  );
};

export default Sw;
