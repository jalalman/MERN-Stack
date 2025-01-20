import myImage from './assets/1.jpg';


function Card(){
    return(
        <div className="card">
            
            <img src={myImage} alt="jalal pic" />
            <h2>Jalal</h2>
            <p>im full-stack Dev and body building </p>
        </div>
    );
}

export default Card;