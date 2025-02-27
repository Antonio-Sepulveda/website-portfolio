import './App.css';
import { useState } from 'react';

// Idea: Make the "Nav Buttons" into a dropdown menu (when the screen gets small enoough)
const projectsInfoTemp = {
  index: "id/index number of the project",
  name: "title of project",
  img: "img",
  desc: "brief description of the project",
  github: "takes you to the github link",
  link: "takes you to the website",
  status: "Status"
}

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
      <p>Description Here (maybe make this an about page and lead with the projects on the main page??</p>
      <p>Skills???</p>
      <p>✔Idea: Make "nav" its own Component</p>
      <p>✔Idea: Highlight the currently selected Tab</p>
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
        <div>
          {/* <p>{projectsInfoTemp.index}</p>  */}
        {/* Index will be used to find right info */}
          {/* <p>{projectsInfoTemp.name}</p> */}
          <p>{projectsInfoTemp.img}</p>
          <p>{projectsInfoTemp.desc}</p>
          <p>{projectsInfoTemp.github}</p>
          <p>{projectsInfoTemp.link}</p>
          <p>{projectsInfoTemp.status}</p>
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
        {renderProjectItem(1, "Project 2")}
        {renderProjectItem(2, "Project 3")}
        {renderProjectItem(3, "Project 4")}
        {renderProjectItem(4, "Project 5")}
      </div>
    </div>
  )
}

const Certifications = ({setContent, active}) => {
  return (
    <div className="certifications">
      <NavBar setContent={setContent} active={active}></NavBar>
      <p>You are in the Certifications Component</p>
      {/* <p>Test</p> */}
    </div>
  )
}

const Contact = ({setContent, active}) => {
  return (
    <div className="contact">
      <NavBar setContent={setContent} active={active}></NavBar>
      <p>Contact Icons Go Here</p>
      <ul>
        <li>Phone Number</li>
        <li>Email</li>
        <li>GitHub</li>
        <li>LinkedIN</li>
        <li>Link to Resume</li>
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
