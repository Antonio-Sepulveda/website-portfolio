import './App.css';
import { useState } from 'react';

const Home = ({setContent}) => {
  return (
    <div className="home">
      <button onClick={() => setContent("About")}
      className="about-btn">About</button>
    </div>
  )
}

const About = ({setContent}) => {
  return (
    <div className="about">
      <button onClick={() => setContent("Home")}
      className="about-btn">Home</button>
      {/* <p>Test</p> */}
    </div>
  )
}

function App() {
  const [content, setContent] = useState("Home");
  
  let display;
  if (content === "Home") {
    display = <Home setContent={setContent} />;
  }
  else if (content === "About") {
    display = <About setContent={setContent}/>;
  }

  return (
    <div className="gradient-background">
      <header className="App-header">
        {display}
        {/* <Home setContent={setContent}></Home> */}
        {/* <About></About> */}
      </header>
    </div>
  );
}

export default App;
