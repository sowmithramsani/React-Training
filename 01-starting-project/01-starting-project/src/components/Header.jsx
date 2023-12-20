import reactImg from '../assets/react-core-concepts.png';
import "./Header.css";

const reactDesc=['Fundamental','Crutial','C ore'];
function getRandomInt(max){
return Math.floor(Math.random()*(max+1));
}

export function Header(){
  
    return(
      <header>
      <img src ={reactImg} alt="Stylized atom"/>
      <h1>React Essentials</h1>
      <p>
        {reactDesc[getRandomInt(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>);
  }