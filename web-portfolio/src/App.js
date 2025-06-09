import './App.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

// Contact Images
import github from './images/contact-images/github.png';
import linkedin from './images/contact-images/linkedin.png';

// Project Screenshots
import projectXimg from './images/placeholder.png';
import MissionFieldUIimg from './images/project-screenshots/MissionFieldUIScreenshot.jpeg';

// Skill Logos
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
// ✔Idea: Make the Projects Grid turn into one/two columns when the screen is small enough
// ✔Task0: Custom Scrolling CSS
// ✔️Task1: Finish Projects Outline
// ✔️Task2: Get Certifications Working
// ✔️Task3: Contact Form
// Task4: Update Projects
// Task5: Add Resume
// Task6: Update Skills into its own "Tab"
// Task7: Update Certifications
  // Add Certififcate Images
  // Idea: when clicked position: absolute on the ceritificate
    // Takes up most of the screen
    // X on the top right
    // Certificate Title on the top
// Ex0: Make the "Nav Buttons" into a dropdown menu (when the screen gets small enough)
// Ex1: Add Ruby to Skills
// Ex2: Change Home -> About
  // Add Icons for contacting here??? (probably not but just an idea?)
  // I want to have the form be an option for contact
// Ex3: Idea: Animate background image (project-item -> expanded)
// Ex4: Update NavBar so that it updates when scrolling
// Ex4: Fix Projects Smooth Scrolling
// Note: I want to have all skills reflected in a project of some kind
  // Use ADHDHabitTracker to add firestore as a skill?

// Add "alt" field for images
const projectsInfoTemp = [
  {index: 0,
    name: "Mission Field UI",
    // img: './images/placeholder.png',
    img: MissionFieldUIimg,
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
    github: "https://github.com/Antonio-Sepulveda/adhd-habit-tracker?tab=readme-ov-file",
    link: "https://antonio-sepulveda.github.io/adhd-habit-tracker/",
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

const certificationsInfo = 
  {
    openAvenue: [projectXimg],
    freeCodeCamp: [projectXimg, projectXimg, projectXimg]
  }

const NavBar = ({setContent, active}) => {
  console.log(active);
  return (
    <nav>
      {/* Home Nav Button */}
      <button onClick={() => {
          setContent("Home")
          // document.getElementById("home-id")?.scrollIntoView();
          window.scrollTo({top:0})
        }}
        className={active === "Home" ? "btn-active" : "btn"}>
          <span className="btn-text">Home</span>
      </button>

      {/* Projects Nav Button */}
      <button onClick={() => {
          setContent("Projects")
          document.getElementById("projects-id")?.scrollIntoView();
        }}
        className={active === "Projects" ? "btn-active" : "btn"}>
          <span className="btn-text">Projects</span>
      </button>
      
      {/* Certifications Nav Button */}
      <button onClick={() => {
          setContent("Certifications")
          document.getElementById("certifications-id")?.scrollIntoView();
        }}
        className={active === "Certifications" ? "btn-active" : "btn"}>
          <span className="btn-text">Certifications</span>
      </button>

      {/* Contact Nav Button */}
      {/* <button onClick={() => {
          setContent("Contact")
          document.getElementById("contact-id")?.scrollIntoView();
        }}
        className={active === "Contact" ? "btn-active" : "btn"}>
          <span className="btn-text">Contact</span>
      </button> */}
      
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
      {/* <h1 style={{margin: 0}}>Antonio Sepulveda</h1> */}
      <section id="home-id">
        <h1 style={{margin: 0}}>Antonio Sepulveda</h1>
      </section>
      <h4 style={{margin: 0, paddingBottom: '1em'}}>Software Engineer</h4>
      <p style={{maxWidth: '75vw', margin: 0, fontSize: '1em'}}>Hello, I am a software engineer with expertise in web development and design. 
        I focus on creating practical, impactful applications that address real-world needs. 
        I am passionate about building tools that enhance user experiences and contribute to positive change.
      </p>
      <div className="contact-profiles">
        <button className="contact-profiles-img-btn-github">
          <img src={github} className="contact-profiles-img-github"></img>
          <div className="contact-profiles-img-separator"></div>
          <p className="contact-profiles-img-label">GitHub</p>
        </button>
        <button className="contact-profiles-img-btn-linkedin">
          <img src={linkedin} className="contact-profiles-img-linkedin"></img>
          <div className="contact-profiles-img-separator"></div>
          <p className="contact-profiles-img-label">LinkedIn</p>
        </button>
        {/* <br></br> */}
      </div>
      <div className="contact-phone">
        <AiFillPhone />
        <span>(616) 666-1689</span>
      </div>
      <div className="contact-email">
        {/* <span>Email Icon</span> */}
        {/* <AiTwotoneMail /> */}
        <AiFillMail />
        <span>antoniosepulvedainoa@outlook.com</span>
      </div>
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

const Projects = ({content, setContent, active}) => {
  const [openProjects, setOpenProjects] = useState([0,0,0,0,0]);

  const toggleProject = (index, toggle) => {
    if (toggle === "open") {
      setOpenProjects(openProjects.map((val, i) => i === index ? 1 : 0));
    }
    if (toggle === "close") {
      setOpenProjects(openProjects.map(val=>0))
    }
  };

  useEffect(()=>{
    const el = document.querySelector('.item-label-expanded');
    if (el && content === "Projects") {
      const yOffset = -150;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });

  const renderProjectItem = (index, label) => {    
    return (
    <motion.div 
      layout={"position"}
      transition={{duration: 0.3}}
      // whileHover={{ scale: 1.1 }}
      className={
        openProjects[index] === 1 ? 'projects-item-expanded' : 'projects-item'}
      //   openProjects[index] === 1
      //   ? (exitingIndex === index
      //     ? 'projects-item-expanded projects-item-exit'
      //     : 'projects-item-expanded')
      //   : 'projects-item'
      // }
      // style={openProjects[index] === 1 ? { gridColumn: "1 / -1" } : {}}    
      onClick={() => openProjects[index] === 0 && toggleProject(index, "open")}
    >
      {openProjects[index] === 1 ?
      <div className="item-container-expanded">
        <button className="item-exit-btn"
          onClick={() => toggleProject(index, "close")}>X
        </button>
        <p className="item-label-expanded">{label}</p>
        <div>
          <div className="item-content">
            <img src={projectsInfoTemp[index].img} className="item-img-expanded"></img>
            <p className="item-description">{projectsInfoTemp[index].desc}</p>
            <div className="item-links">
              <button>{projectsInfoTemp[index].github}</button>
              <button>{projectsInfoTemp[index].link}</button>
            </div>
            <span className={projectsInfoTemp[index].status}>{projectsInfoTemp[index].status}</span>
          </div>
        </div>
      </div> : 
      <div className="item-container">
        <p className="item-label">{label}</p>
        {/* <img src={projectsInfoTemp[index].img} className="item-img"></img> */}
        <div className="item-img-background">
          <img src={projectsInfoTemp[index].img} className="item-img"></img>
        </div>
      </div>
      }
    </motion.div>
  )};

  return (
    <div className="projects">
      {/* <h1>Projects</h1> */}
      <section id="projects-id">
        <h1>Projects</h1>
      </section>
      {/* <NavBar setContent={setContent} active={active}></NavBar> */}
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

const Certifications = ({setContent, active, setDisabled, setDisabledObj}) => {
  const [status, setStatus] = useState([0, 0]);

  const checkVisibility = (index) => {
    setStatus(status.map((val, i) => i === index ? 
    (val === 0 ? 1 : 0) : val))
  }

  const expandCertificate = (img) => {
    setDisabled(true);
    setDisabledObj(img);
    
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }

  const renderOrg = (legend, img, statusIndex) => {
    return (
      <fieldset>
        <legend>{legend}</legend>
        {/* <div className={status[statusIndex] === 0 ? 
          "certificate-container" : "certificate-container-hidden"}>
          {img.map((i)=>(
            <button className="certificate-img-btn"
            onClick={()=>expandCertificate()}>
              <img src={i} className="certificate-img"></img>
            </button>
          ))}
        </div> */}
        <div className={status[statusIndex] === 0 ? 
          "certificate-container" : "certificate-container-hidden"}>
          {img.map((i)=>(
            <button className="certificate-img-btn"
            onClick={(e)=>expandCertificate(i)}>
              <img src={i} className="certificate-img"></img>
            </button>
          ))}
        </div>
        {/* <button className="certificate-hide-show"
        onClick={()=>checkVisibility(statusIndex)}>
          {status[statusIndex] === 0 ? "Hide" : "Show"}</button> */}
      </fieldset>
    )
  }

  return (
    <div className="certifications">
      {/* <h1>Certifications</h1> */}
      <section id="certifications-id">
        <h1>Certifications</h1>
      </section>
      {renderOrg("OpenAvenue", certificationsInfo.openAvenue, 0)}
      {renderOrg("freeCodeCamp", certificationsInfo.freeCodeCamp, 1)}
      {/* {renderOrg("??Saylor Academy??", "Certifications Here")} */}
    </div>
  )
}

const Contact = ({setContent, active}) => {
  return (
    <div className="contact">
      <section id="contact-id">
        <h1>Contact</h1>
      </section>

      <form>
        {/* <label for="name">Name</label> */}
        {/* <span className="contact-form-label">Name</span> */}
        <input type="text" id="name" placeholder="Name" />

        {/* <label for="email">Email</label> */}
        {/* <span className="contact-form-label">Email</span> */}
        <input type="email" id="email" placeholder="Email" />

        {/* <span className="contact-form-label">Message</span> */}
        {/* <input type="message" id="message" placeholder="Enter your message" /> */}
        <textarea placeholder="Message"></textarea>

        <button className="contact-submit-btn">Submit</button>
      </form>

      <p>Other Forms of Contact:</p>
      <ul>
        <li>Phone Number</li>
        <li>Email Me Button</li>
        <li>LinkedIN</li>
        <li>Move this higher up?
          (GitHub, LinkedIN)</li>
      </ul>
      {/* <p>Test</p> */}
    </div>
  )
}

const DisabledUI = ({disabled, setDisabled, disabledObj}) => {
  // set Disabled Image

  return (
    <div>
    {disabled ? 
      <div className="disable-overlay">
        <button className="disable-overlay-exit"
          onClick={() => {
            setDisabled(false);
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
          }}>
          <AiOutlineClose></AiOutlineClose>
        </button>
        {/* <p className="certification-img">{disabledObj}</p> */}
        
        <img src={disabledObj} className="certificate-img-expanded"></img>
       
      </div> : null
    }
    </div>
  )
}

function App() {
  const [content, setContent] = useState("Home");
  const [disabled, setDisabled] = useState(false);
  const [disabledObj, setDisabledObj] = useState(null);
  
  // let display;
  // if (content === "Home") {
  //   display = <Home setContent={setContent} active={"Home"}/>;
  // }
  // else if (content === "Projects") {
  //   display = <Projects setContent={setContent} active={"Projects"}/>;
  // }
  // else if (content === "Certifications") {
  //   display = <Certifications setContent={setContent} active={"Certifications"}/>;
  // }
  // else if (content === "Contact") {
  //   display = <Contact setContent={setContent} active={"Contact"}/>;
  // }

  return (
    <div className="gradient-background">
      <header className="App-header">
        {/* {display} */}
        <DisabledUI disabled={disabled} setDisabled={setDisabled}
          disabledObj={disabledObj}></DisabledUI>
        <NavBar setContent={setContent} active={content}></NavBar>
        {/* <Home setContent={setContent} active={"Home"}/>
        <Projects setContent={setContent} active={"Projects"}/>
        <Certifications setContent={setContent} active={"Certifications"}/>
        <Contact setContent={setContent} active={"Contact"}/> */}
        <Home/>
        <Projects content={content}/>
        <Certifications setDisabled={setDisabled} setDisabledObj={setDisabledObj}/>
        {/* <Contact/> */}
      </header>
    </div>
  );
}

export default App;
