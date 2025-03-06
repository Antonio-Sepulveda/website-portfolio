import './App.css';
import { useState } from 'react';
import projectXimg from './images/placeholder.png';

// ✔Idea: Make "nav" its own Component
// ✔Idea: Highlight the currently selected Tab
// Idea: Make the "Nav Buttons" into a dropdown menu (when the screen gets small enoough)
const projectsInfoTemp = [
  {index: 0,
    name: "Mission Field UI",
    // img: './images/placeholder.png',
    img: projectXimg,
    desc: "-app intended to help organize data for Brazilian missionaries "+
    "\n-connects with AI API to automatically assign different categories of interest to the client",
    github: "github",
    link: "link",
    status: "Completed/In Progress"},
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
  return (
    <div className="home">
      <NavBar setContent={setContent} active={active}></NavBar>
      <h1>Antonio Sepulveda</h1>
      <p style={{maxWidth: '75vw'}}>Hello, I am a software engineer with expertise in web development and design. 
        I focus on creating practical, impactful applications that address real-world needs. 
        I am passionate about building tools that enhance user experiences and contribute to positive change.
      </p>
      <h3>Skills</h3>
      <p>JS, HTML, CSS, Python, blah blah etc</p>
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

  const renderProjectItem = (index, label) => (
    <div 
      className={openProjects[index] === 1 ? 'projects-item-expanded' : 'projects-item'}
      onClick={() => openProjects[index] === 0 && toggleProject(index, "open")}
    >
      {openProjects[index] === 1 ?
      <div className="item-container">
        <button className="item-exit-btn"
          onClick={() => toggleProject(index, "close")}>X
        </button>
        {label}
        <div className="item-content">
          {/* <p>{projectsInfoTemp[index].index}</p>  */}
        {/* Index will be used to find right info */}
          {/* <p>{projectsInfoTemp.name}</p> */}
          <div className="item-img-container">
            <img src={projectsInfoTemp[index].img} className="item-img"></img>
          </div>
          <div className="item-rest">
            <p className="item-description">{projectsInfoTemp[index].desc}</p>
            <div className="item-links">
              <button>{projectsInfoTemp[index].github}</button>
              <button>{projectsInfoTemp[index].link}</button>
            </div>
            <p>{projectsInfoTemp[index].status}</p>
          </div>
        </div>
      </div> : label}
    </div>
  );

  return (
    <div className="projects">
      <NavBar setContent={setContent} active={active}></NavBar>
      {/* <p>You are in the Projects Component</p> */}
      <div className='projects-grid'>
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
      <h1>Code Academy</h1>
      <h1>OpenAvenue</h1>
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
