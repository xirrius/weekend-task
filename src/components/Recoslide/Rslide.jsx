import './Rslide.css';

const Rslide = ({ event }) => {
    
    const { img, game, date, title } = event;
    return (
        <div className="reco_card">
            <div className="reco_img">
                <img src={"./img/" + img} alt="nhi hai" />
            </div>
            <div className="reco_info">
                <div className="game_logo" style={{ display: 'flex', alignItems: 'center', gap:'.3rem'}}>
                    <i className="fas fa-smile" style={{ color: '#61c27b', marginLeft: '5px', fontSize: '1.2em' }}></i>
                    <p>{game}</p>
                </div>
                <p>{title}</p>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default Rslide;
