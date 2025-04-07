import './App.css';
import { useState, useRef } from 'react';
import projectXimg from './images/placeholder.png';

import JSLogo from './images/skill-logos/JavaScript-logo.png';
import HTMLLogo from './images/skill-logos/HTML-logo.png';
import CSSLogo from './images/skill-logos/CSS-logo.png';
import ReactLogo from './images/skill-logos/React-logo.webp';
import PythonLogo from './images/skill-logos/Python-logo.png';
import CLogo from './images/skill-logos/C-logo.png';
import CSharpLogo from './images/skill-logos/CSharp-logo.png';
import CPlusPLusLogo from './images/skill-logos/CPlusPlus-logo.png';
import JavaLogo from './images/skill-logos/Java-logo.png';
import AdaLogo from './images/skill-logos/Ada-logo.png';
import ClojureLogo from './images/skill-logos/Clojure-logo.png';
import GitLogo from './images/skill-logos/Git-logo.png';
import FigmaLogo from './images/skill-logos/Figma-logo.png';
import GodotLogo from './images/skill-logos/Godot-logo.png';
import UnityLogo from './images/skill-logos/Unity-logo.png';

// const grid = document.querySelector(".projects-grid");
// const { unwrapGrid, forceGridAnimation } = wrapGrid(grid);
// forceGridAnimation();

// ✔Idea: Make "nav" its own Component
// ✔Idea: Highlight the currently selected Tab
// Idea: Make the "Nav Buttons" into a dropdown menu (when the screen gets small enough)
// Idea: Make the Projects Grid turn into one/two columns when the screen is small enough

// Add "alt" field for images
const projectsInfoTemp = [
  {index: 0,
    name: "Mission Field UI",
    // img: './images/placeholder.png',
    img: projectXimg,
    desc: "-app intended to help organize data for Brazilian missionaries "+
    "\n-connects with AI API to automatically assign different categories of interest to the client",
    github: "https://github.com/Multimodal-Social-Analysis/Mission-Field-Organizer/tree/main/myapp",
    link: "https://multimodal-social-analysis.github.io/website-overview/",
    status: "Completed"},
  {index: 1,
    name: "ADHD Habit Tracker",
    img: projectXimg,
    desc: "PLACEHOLDER FOR ACCURACY app intended to help organize data for Brazilian missionaries "+
    "\n-connects with AI API to automatically assign different categories of interest to the client",
    github: "takes you to the github link",
    link: "takes you to the website",
    status: "Status"},
  {index: 2,
    name: "Mobile Mouse",
    img: projectXimg,
    desc: "PLACEHOLDER FOR ACCURACY app intended to help organize data for Brazilian missionaries "+
    "\n-connects with AI API to automatically assign different categories of interest to the client",
    github: "takes you to the github link",
    link: "takes you to the website",
    status: "Status"},
  {index: 3,
    name: "Man w/ a Stick",
    img: projectXimg,
    desc: "PLACEHOLDER FOR ACCURACY app intended to help organize data for Brazilian missionaries "+
    "\n-connects with AI API to automatically assign different categories of interest to the client",
    github: "takes you to the github link",
    link: "takes you to the website",
    status: "Status"},
  {index: 4,
    name: "title of project",
    img: "img",
    desc: "brief description of the project",
    github: "takes you to the github link",
    link: "takes you to the website",
    status: "Status"},
]

const NavBar = ({setContent, active}) => {
  return (
    <nav>
      {active === "Home" ? 
        <button className="btn-active">Home</button> :
        <button onClick={() => setContent("Home")}
        className="btn">Home</button>
      }
      {active === "Projects" ? 
        <button className="btn-active">Projects</button> :
        <button onClick={() => setContent("Projects")}
        className="btn">Projects</button>
      }
      {active === "Certifications" ? 
        <button className="btn-active">Certifications</button> :
        <button onClick={() => setContent("Certifications")}
        className="btn">Certifications</button>
      }
      {active === "Contact" ? 
        <button className="btn-active">Contact</button> :
        <button onClick={() => setContent("Contact")}
        className="btn">Contact</button>
      }  
      <button onClick={() => alert("This takes you the resume")}
        className="btn">Resume</button>
    </nav>
  )
}

const Home = ({setContent, active}) => {
  const addSkill = (img, imgLink) => {
    return (
      <div className="skill">
        <a href={imgLink} target="_blank">
          <img src={img} className="skill-img"></img>
        </a>
        <br></br>
        {/* <p className="skill-label">{}</p> */}
      </div>
    )
  }

  return (
    <div className="home">
      <NavBar setContent={setContent} active={active}></NavBar>
      <h1 style={{margin: 0}}>Antonio Sepulveda</h1>
      <h4 style={{margin: 0, paddingBottom: '1em'}}>Software Engineer</h4>
      <p style={{maxWidth: '75vw', margin: 0, fontSize: '1em'}}>Hello, I am a software engineer with expertise in web development and design. 
        I focus on creating practical, impactful applications that address real-world needs. 
        I am passionate about building tools that enhance user experiences and contribute to positive change.
      </p>
      <h3 style={{marginTop: '2em'}}>Skills</h3>
      {/* <br></br><br></br> */}
      {/* <p>JS, HTML, CSS, ReactNative, Python</p> */}
      <div className="skill-container">
        {addSkill(JSLogo, "https://developer.mozilla.org/en-US/docs/Web/JavaScript")}
        {addSkill(HTMLLogo, "https://developer.mozilla.org/en-US/docs/Web/HTML")}
        {addSkill(CSSLogo, "https://developer.mozilla.org/en-US/docs/Web/CSS")}
        {addSkill(ReactLogo, "https://react.dev/")}
        {addSkill(PythonLogo, "https://www.python.org/")}
        {addSkill(CLogo, "https://www.geeksforgeeks.org/c-programming-language/")}
        {addSkill(CSharpLogo, "https://www.geeksforgeeks.org/csharp-programming-language/")}
        {addSkill(CPlusPLusLogo, "https://www.geeksforgeeks.org/c-plus-plus/")}
        {addSkill(JavaLogo, "https://dev.java/learn/")}
        {addSkill(AdaLogo, "https://www.adacore.com/about-ada")}
        {addSkill(ClojureLogo, "https://clojure.org/")}
        {addSkill(GitLogo, "https://git-scm.com/")}
        {addSkill(FigmaLogo, "https://www.figma.com/")}
        {addSkill(GodotLogo, "https://godotengine.org/")}
        {addSkill(UnityLogo, "https://unity.com/")}
      </div>
    </div>
  )
}

const Projects = ({setContent, active}) => {
  const [openProjects, setOpenProjects] = useState([0,0,0,0,0])

  const toggleProject = (index, toggle) => {
    if (toggle === "open") {
      setOpenProjects(openProjects.map(
      (val, i) => 
        (i === index ? (val === 0 ? 1 : 1) : 0)));
    }
    if (toggle === "close") {
      setOpenProjects(openProjects.map(val=>0))
    }
  };
  const projectsGridRef = useRef(null);

  const renderProjectItem = (index, label) => {
    // add "gap" property to fix spacing
    // if (projectsGridRef.current !== null){
    //   const grid = document?.querySelector(".projects-grid");
    //   const { unwrapGrid, forceGridAnimation } = 
    //     wrapGrid(grid, {duration: 300, easing:"easeIn"});
    //   forceGridAnimation();
    // }
    
    return (
    <div 
      className={openProjects[index] === 1 ? 'projects-item-expanded' : 'projects-item'}
      onClick={() => openProjects[index] === 0 && toggleProject(index, "open")}
    >
      {openProjects[index] === 1 ?
      <div className="item-container">
        <button className="item-exit-btn"
          onClick={() => toggleProject(index, "close")}>X
        </button>
        <p className="item-label-expanded">{label}</p>
        <div>
          <div className="item-content">
            <img src={projectsInfoTemp[index].img} className="item-img"></img>
            <p className="item-description">{projectsInfoTemp[index].desc}</p>
            <div className="item-links">
              <button>{projectsInfoTemp[index].github}</button>
              <button>{projectsInfoTemp[index].link}</button>
            </div>
            <p>{projectsInfoTemp[index].status}</p>
          </div>
        </div>
      </div> : <p className="item-label">{label}</p>}
    </div>
  )};

  return (
    <div className="projects">
      <NavBar setContent={setContent} active={active}></NavBar>
      {/* <p>You are in the Projects Component</p> */}
      <div className='projects-grid' ref={projectsGridRef}>
        {renderProjectItem(0, "Mission Field UI")}
        {renderProjectItem(1, "ADHD Habit Tracker")}
        {renderProjectItem(2, "Mobile Mouse")}
        {renderProjectItem(3, "Man w/ a Stick")}
        {renderProjectItem(4, "Project 5")}
      </div>
    </div>
  )
}

const Certifications = ({setContent, active}) => {
  return (
    <div className="certifications">
      <NavBar setContent={setContent} active={active}></NavBar>
      <h1>OpenAvenue</h1>
      <h1>freeCodeCamp</h1>
      <h1>Saylor Academy</h1>
      <p>In Progress...</p>
      {/* <p>Test</p> */}
    </div>
  )
}

const Contact = ({setContent, active}) => {
  return (
    <div className="contact">
      <NavBar setContent={setContent} active={active}></NavBar>
      <p>Other Forms of Contact:</p>
      <ul>
        <li>Phone Number</li>
        <li>Email</li>
        <li>GitHub</li>
        <li>LinkedIN</li>
      </ul>
      {/* <p>Test</p> */}
    </div>
  )
}

function App() {
  const [content, setContent] = useState("Home");
  // const [active, setActive] = useState("Home");
  
  let display;
  if (content === "Home") {
    display = <Home setContent={setContent} active={"Home"}/>;
  }
  else if (content === "Projects") {
    display = <Projects setContent={setContent} active={"Projects"}/>;
  }
  else if (content === "Certifications") {
    display = <Certifications setContent={setContent} active={"Certifications"}/>;
  }
  else if (content === "Contact") {
    display = <Contact setContent={setContent} active={"Contact"}/>;
  }

  return (
    <div className="gradient-background">
      <header className="App-header">
        {display}
      </header>
    </div>
  );
}

export default App;
