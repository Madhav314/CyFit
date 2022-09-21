import './css/App.css';
import './css/main.css';
import logo from './images/logo.svg';
import profile from './images/profile.png';
import clipboard from './images/clipboard.png';
import lifestyle from './images/lifestyle 1.png';
import youtube from './images/youtube.png';
import instagram from './images/instagram.png';
import email from  './images/email.png';
import twitter from './images/twitter.png';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function() {
     {
        let navigate = useNavigate();
        const workoutPage = () => {
            let path = '/workoutlog';
            navigate(path);}
        const dietPage = () =>{
            let path = '/dietTracker';
            navigate(path);
        }
    return (
        <div className="main">
        <body className ="main-body">
        
            <Button align className="main-button1" onClick ={workoutPage}>Workout</Button>
            <Button className="main-button2" onClick ={dietPage}>Diet</Button>
            <img src={clipboard} className="main-clipboard" alt="clipboard" />
            <img src={lifestyle} className="main-lifestyle" alt="lifestyle"/>
        </body>
        <footer className="App-footer">
            <div>
            <img src={youtube} className="App-youtube" alt="youtube" />
            <img src={instagram} className="App-instagram" alt="instagram" />
            <img src={email} className="App-email" alt="email" />
            <img src={twitter} className="App-twitter" alt="twitter" />
            
            </div>
        </footer>
      </div>
    )
  }
}
