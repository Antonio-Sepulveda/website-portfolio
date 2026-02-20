import './App.css';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Document, Page } from 'react-pdf';
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";

// Contact Images
import github from './images/contact-images/github.png';
import linkedin from './images/contact-images/linkedin.png';
import me from "./images/me.jpeg";
import resume from "./images/ResumeV3.png";
import resumePDF from "./images/ResumeV3.pdf";

// Project Screenshots
import MobileMouseGIF from './images/mobilemousevid.gif';
import ADHDimg from './images/Screenshot 2025-09-17 123809.png';
import projectXimg from './images/placeholder.png';
import MissionFieldUIimg from './images/project-screenshots/MissionFieldUIScreenshot.jpeg';

// Skill Logos
import JSLogo from './images/skill-logos/JavaScript-logo.png';
import TSLogo from './images/skill-logos/TypeScript-logo.png';
import HTMLLogo from './images/skill-logos/HTML-logo.png';
import CSSLogo from './images/skill-logos/CSS-logo.png';
import ReactLogo from './images/skill-logos/React-logo.webp';
import PythonLogo from './images/skill-logos/Python-logo.png';
import FlutterLogo from './images/skill-logos/Flutter-logo.png';
import RubyLogo from './images/skill-logos/Ruby-logo.png';
import SQLLogo from './images/skill-logos/SQL-logo.png';
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

// function ViewResume() {
//   const [numPages, setNumPages] = useState(null);

//   return (
//     <Document
//       file="./images/ResumeV3.pdf" // path to your PDF in public folder
//       onLoadSuccess={({ numPages }) => setNumPages(numPages)}
//     >
//       {/* {Array.from(new Array(numPages), (_, index) => (
//         <Page key={index} pageNumber={index + 1} />
//       ))} */}
//     </Document>
//   );
// }

// const grid = document.querySelector(".projects-grid");
// const { unwrapGrid, forceGridAnimation } = wrapGrid(grid);
// forceGridAnimation();

// ✔Idea: Make "nav" its own Component
// ✔Idea: Highlight the currently selected Tab
// ✔Idea: Make the Projects Grid turn into one/two columns when the screen is small enough
// ✔Task0: Custom Scrolling CSS (REMOVED)
// ✔Task1: Finish Projects Outline
// ✔Task2: Get Certifications Working
// ✔Task3: Contact Form
// ✔Task4: Update Projects
// ✔Task5: Add Resume (reuse logic of Certifications to make it a pop up)
// ✔Task6: Update Skills into its own "Tab"
// Ex0: Make the "Nav Buttons" into a dropdown menu (when the screen gets small enough)
// Ex1: Add Ruby to Skills
// Ex2: Change Home -> About
// Ex3: Update NavBar so that it updates when scrolling
// Ex4: Fix Projects Smooth Scrolling
// Note: I want to have all skills reflected in a project of some kind
  // Use ADHDHabitTracker to add firestore as a skill?

// Add "alt" field for images
const projectsInfoTemp = [
  {index: 0,
    name: "Mobile Mouse",
    img: MobileMouseGIF,
    desc: "ExpoGO app that turns your smartphone into a wireless trackpad for your PC, using WebSocket communication over a shared Wi-Fi network. "+
    "\nA Python script on the PC generates a QR code for quick pairing, enabling real-time input without manual setup or additional hardware.",
    github: "https://github.com/Antonio-Sepulveda/mobile-mouse",
    link: "https://expo.dev/preview/update?message=&updateRuntimeVersion=1.0.0&createdAt=2025-09-15T14%3A57%3A32.159Z&slug=exp&projectId=64f51f70-4bad-4bde-b98c-8df106deaed2&group=95881bc9-04a8-40b3-880f-5a8cf96775af",
    status: "Completed"},
  {index: 1,
    name: "Mission Field UI",
    // img: './images/placeholder.png',
    img: MissionFieldUIimg,
    desc: "Proof-of-concept web app designed to help Brazilian missionaries organize and manage their data more efficiently. "+
    "\nIt integrates with an AI API to automatically categorize files based on content, streamlining data organization and aligning with the specific interests of the client.",
    github: "https://github.com/Multimodal-Social-Analysis/Mission-Field-Organizer/tree/main/myapp",
    link: "https://multimodal-social-analysis.github.io/website-overview/",
    status: "Completed"},
  {index: 2,
    name: "ADHD Habit Tracker",
    img: ADHDimg,
    desc: "An app designed to support individuals with ADHD by addressing three common challenges: maintaining focus, remembering to eat and stay hydrated, and establishing healthier sleep habits. "+
    "\n*(Migrating development to Flutter)*",
    github: "https://github.com/Antonio-Sepulveda/adhd-habit-tracker",
    link: "https://antonio-sepulveda.github.io/adhd-habit-tracker/",
    status: "Current"},
  // {index: 3,
  //   name: "Flutter Projects",
  //   img: projectXimg,
  //   desc: "An app designed to support individuals with ADHD by addressing three common challenges: maintaining focus, remembering to eat and stay hydrated, and establishing healthier sleep habits. "+
  //   "\n*(Migrating development to Flutter)*",
  //   github: "https://github.com/Antonio-Sepulveda/adhd-habit-tracker",
  //   link: "https://antonio-sepulveda.github.io/adhd-habit-tracker/",
  //   status: "Current"},
]

const certificationsInfo = 
  {
    openAvenue: [projectXimg],
    freeCodeCamp: [projectXimg, projectXimg, projectXimg]
  }

const NavBar = ({setContent, active, setDisabled, setDisabledObj}) => {
  const pauseScrollingRef = useRef(false);

  useEffect(()=> {
    const sections = 
    document.querySelectorAll(".home, .projects, .skills, .contact");
    
    const observer = new IntersectionObserver(
      (entries) => {
        // console.log(pauseScrollingRef.current);
        entries.forEach((entry) => {
          if (entry.target.classList.contains("home") && entry.isIntersecting) {
            !pauseScrollingRef.current && setContent("Home");
          }
          else if (entry.target.classList.contains("projects") && entry.isIntersecting) {
            // setContent("Projects")
            !pauseScrollingRef.current && setContent("Projects");
          }
          else if (entry.target.classList.contains("skills") && entry.isIntersecting) {
            // setContent("Skills")
            !pauseScrollingRef.current && setContent("Skills");
          }
          else if (entry.target.classList.contains("contact") && entry.isIntersecting) {
            // setContent("Contact")
            !pauseScrollingRef.current && setContent("Contact");
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-80px 0px 0px 0px"
      }
    );

    sections.forEach(section => observer.observe(section));

    // return () => observer.disconnect();
  }, [setContent]);

  const expandCertificate = (img) => {
    setDisabled(true);
    setDisabledObj(img);
    
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }

  return (
    <nav>
      {/* Home Nav Button */}
      <button onClick={() => {
          setContent("Home");
          pauseScrollingRef.current = true;
          // document.getElementById("home-id")?.scrollIntoView();
          window.scrollTo({top:0})
          setTimeout(()=>{pauseScrollingRef.current = false;}, 500);
        }}
        className={active === "Home" ? "btn-active" : "btn"}>
          <span className="btn-text">About</span>
      </button>

      {/* Projects Nav Button */}
      <button onClick={() => {
          setContent("Projects")
          pauseScrollingRef.current = true;
          document.getElementById("projects-id")?.scrollIntoView();
          setTimeout(()=>{pauseScrollingRef.current = false;}, 500);
        }}
        className={active === "Projects" ? "btn-active" : "btn"}>
          <span className="btn-text">Projects</span>
      </button>

      {/* Skills Nav Button */}
      <button onClick={() => {
          setContent("Skills")
          pauseScrollingRef.current = true;
          document.getElementById("skills-id")?.scrollIntoView();
          setTimeout(()=>{pauseScrollingRef.current = false;}, 500);
        }}
        className={active === "Skills" ? "btn-active" : "btn"}>
          <span className="btn-text">Skills</span>
      </button>

      {/* Contact Nav Button */}
      <button onClick={() => {
          setContent("Contact")
          pauseScrollingRef.current = true;
          document.getElementById("contact-id")?.scrollIntoView();
          setTimeout(()=>{pauseScrollingRef.current = false;}, 500);
        }}
        className={active === "Contact" ? "btn-active" : "btn"}>
          <span className="btn-text">Contact</span>
      </button>
      
      <button onClick={() =>
      {
        expandCertificate(resume);
      }}
        className="btn">Resume</button>
    </nav>
  )
}

const Home = ({setContent, active}) => {
  // const addSkill = (img, imgLink) => {
  //   return (
  //     <div className="skill">
  //       <a href={imgLink} target="_blank">
  //         <img src={img} className="skill-img"></img>
  //       </a>
  //       <br></br>
  //       {/* <p className="skill-label">{}</p> */}
  //     </div>
  //   )
  // }

  return (
    <div className="home">
      {/* <h1 style={{margin: 0}}>Antonio Sepulveda</h1> */}
      <section id="home-id">
        {/* <h1 style={{margin: 0}}>Antonio Sepulveda</h1> */}
        {/* <h4 style={{margin: 0, paddingBottom: '1em'}}>Software Engineer</h4> */}
      </section>
      <div className="home-content">
        <div className='me'>
          <img src={me}></img>
        </div>
        <div className="about-text-container">
          {/* <h1 style={{margin: 0, textAlign: "center"}}>Antonio Sepulveda</h1>
          <h4 style={{margin: 0, paddingBottom: '1em', textAlign: "center"}}>Software Engineer</h4> */}
          <p className="me-label">Antonio Sepulveda</p>
          <p style={{fontSize: '0.5em', padding: 0, marginTop: 0, marginBottom: 10, textAlign: 'center', position: 'relative'}}>Software Engineer</p>
          {/* <p>Antonio Sepulveda </p> */}
          <p className="about-text">
            Hello, I’m a software engineer with a passion for web/mobile development and thoughtful design! Since my father's career was also within Computer Science, I grew up around various technologies over the years. My enthusiasm for the field originated from watching him work throughout my life. I am very excited to forge my own path moving forward, and develop applications and systems that help others!
            <br></br>
            <br></br>
            I love creating practical, user-friendly applications that solve real-world problems. Whether it's helping someone stay organized, learn something new, or access tools more easily, my focus is always on building experiences that feel intuitive and make a meaningful impact.
          </p>
        </div>
      </div>
      {/* <div className="contact-profiles">
        <a href={"https://github.com/Antonio-Sepulveda"} 
          target="_blank" className="click-link">
          <button className="contact-profiles-img-btn-github">
            <img src={github} className="contact-profiles-img-github"></img>
            <div className="contact-profiles-img-separator"></div>
            <p className="contact-profiles-img-label">GitHub</p>
          </button>
        </a>
        <a href={"https://www.linkedin.com/in/antonio-sepulveda-76b500383/"} 
          target="_blank" className="click-link">
          <button className="contact-profiles-img-btn-linkedin">
            <img src={linkedin} className="contact-profiles-img-linkedin"></img>
            <div className="contact-profiles-img-separator"></div>
            <p className="contact-profiles-img-label">LinkedIn</p>
          </button>
        </a>
      </div>
      <div className="contact-phone">
        <AiFillPhone />
        <span>(616) 666-1689</span>
      </div>
      <div className="contact-email">
        <AiFillMail />
        <span>antoniosepulvedainoa@outlook.com</span>
      </div> */}
      {/* <h3 style={{marginTop: '2em'}}>Skills</h3>
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
      </div> */}
    </div>
  )
}

const Projects = ({content, setContent, active}) => {
  // const [openProjects, setOpenProjects] = useState([0,0,0,0,0]);
  // const [openProjects, setOpenProjects] = useState([0,0,0,0]);
  const [openProjects, setOpenProjects] = useState([0,0,0]);

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
              {/* <button className="project-github">{projectsInfoTemp[index].github}</button> */}
              {/* <button className="something">
                <img src={github} className="project-github"></img>
                <div className="contact-profiles-img-separator"></div>
                <p className="contact-profiles-img-label">GitHub</p>
              </button> */}
              <a href={projectsInfoTemp[index].github} 
                target="_blank" className="click-link">
                <button className="item-link-img-btn-github">
                  <img src={github} className="item-link-img-github"></img>
                  <div className="item-link-img-separator"></div>
                  <p className="item-link-img-label">Github</p>
                </button>
              </a>
              <a href={projectsInfoTemp[index].link} target="_blank"
                className="click-link">
                <button className="item-link-img-btn-github">
                  {/* <img src={linkedin} className="item-link-img-github"></img> */}
                  <AiOutlineLink className="item-link-img-link"></AiOutlineLink>
                  <div className="item-link-img-separator"></div>
                  <p className="item-link-img-label">Link</p>
                </button>
              </a>
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
        {renderProjectItem(0, "Mobile Mouse")}
        {renderProjectItem(1, "Mission Field UI")}
        {renderProjectItem(2, "ADHD Habit Tracker")}
        {/* {renderProjectItem(3, "Flutter Projects")} */}
        {/* {renderProjectItem(2, "Mobile Mouse")} */}
        {/* {renderProjectItem(3, "Man w/ a Stick")}
        {renderProjectItem(4, "Project 5")} */}
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

const Skills = ({setContent, active}) => {
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
    <div className='skills'>
      {/* <h3 style={{marginTop: '2em'}}>Skills</h3> */}
      <section id="skills-id">
        <h1>Skills</h1>
      </section>
      <div className="skill-container">
        {addSkill(JSLogo, "https://developer.mozilla.org/en-US/docs/Web/JavaScript")}
        {addSkill(TSLogo, "https://www.typescriptlang.org/")}
        {addSkill(HTMLLogo, "https://developer.mozilla.org/en-US/docs/Web/HTML")}
        {addSkill(CSSLogo, "https://developer.mozilla.org/en-US/docs/Web/CSS")}
        {addSkill(ReactLogo, "https://react.dev/")}
        {addSkill(PythonLogo, "https://www.python.org/")}
        {addSkill(FlutterLogo, "https://flutter.dev/")}
        {addSkill(RubyLogo, "https://www.ruby-lang.org/en/")}
        {addSkill(SQLLogo, "https://en.wikipedia.org/wiki/SQL")}        
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

const Contact = ({setContent, active}) => {
  return (
    <div className="contact">
      <section id="contact-id">
        <h1>Contact</h1>
      </section>
      <div className="contact-profiles">
        <a href={"https://github.com/Antonio-Sepulveda"} 
          target="_blank" className="click-link">
          <button className="contact-profiles-img-btn-github">
            <img src={github} className="contact-profiles-img-github"></img>
            <div className="contact-profiles-img-separator"></div>
            <p className="contact-profiles-img-label">GitHub</p>
          </button>
        </a>
        <a href={"https://www.linkedin.com/in/antonio-sepulveda-76b500383/"} 
          target="_blank" className="click-link">
          <button className="contact-profiles-img-btn-linkedin">
            <img src={linkedin} className="contact-profiles-img-linkedin"></img>
            <div className="contact-profiles-img-separator"></div>
            <p className="contact-profiles-img-label">LinkedIn</p>
          </button>
        </a>
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
        
        <img src={disabledObj} className="resume"></img>
        <a href={resumePDF} download="AntonioSepulvedaResume.pdf">
          <button className='btn'>Download</button>
        </a>
      </div> : null
    }
    </div>
  )
}

function App() {  
  const [content, setContent] = useState("Home");
  const [disabled, setDisabled] = useState(false);
  const [disabledObj, setDisabledObj] = useState(null);

  return (
    <div className="gradient-background">
      {/* <title>Hello</title> */}
      <header className="App-header">
        <DisabledUI disabled={disabled} setDisabled={setDisabled}
          disabledObj={disabledObj}></DisabledUI>
        <NavBar setContent={setContent} active={content}
        setDisabled={setDisabled} setDisabledObj={setDisabledObj}></NavBar>
        <Home/>
        <Projects content={content}/>
        <Skills></Skills>
        <Contact></Contact>
        {/* <Certifications setDisabled={setDisabled} setDisabledObj={setDisabledObj}></Certifications> */}
      </header>
    </div>
  );
}

export default App;
