import './App.css';
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"
import ironhackLogo from "./images/ironhackLogo.png"
import menu from "./images/menu.png"


function App() {
  return (
    <div className="App">
      <div className="top">
        <div className="logos">
          <img src={ironhackLogo} width={30} alt="ironhack logo"/>
          <img src={menu} width={30} alt="ironhack logo"/>
        </div>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a Frontend framework from scratch, to become a Ninka Developer</p>
        <div className="btn-container">
          <button>Awesome!</button>
        </div>
      </div>

      <div className="bottom">
        <div>
          <img src={icon1} width={100} alt="ironhack logo"/>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={icon2} width={100} alt="ironhack logo"/>
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={icon3} width={100} alt="ironhack logo"/>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div>
          <img src={icon4} width={100} alt="ironhack logo"/>
          <h3>JSX</h3>
          <p>Statically-typed. Designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
