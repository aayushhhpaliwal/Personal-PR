import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { JsProjectCard } from "./jsProjectCard";
import projImg1 from "../assets/img/disney.png";
import projImg2 from "../assets/img/netflix.jpg";
import projImg3 from "../assets/img/ecommerce.jpg";
import projImg4 from "../assets/img/facebook.jpg";
import projImg5 from "../assets/img/keep.gif";
import projImg6 from "../assets/img/todo.jpg";
import java1 from "../assets/img/drum.png";
import java2 from "../assets/img/tasklist.png";
import java3 from "../assets/img/music.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      
      description: "Disney Clone",
      imgUrl: projImg1,
      path:"https://disney-clone1-zeta.vercel.app/  ",
    },
    {
      description: "Netflix clone",
      imgUrl: projImg2,
      path:"https://netflix-clone-sigma-lime.vercel.app/",
    },
    {
      description: "Ecommerce site",
      imgUrl: projImg3,
      path:"https://my-shop-woad-gamma.vercel.app/",
    },
    {
      description: "Keep",
      imgUrl: projImg5,
      path:"https://write-keep-jot.herokuapp.com/",
    },
    {
      description: "Facebook",
      imgUrl: projImg4,
      path:"https://www.linkedin.com/feed/",
    },
        {
      description: "Todo List",
      imgUrl: projImg6,
      path:"https://www.linkedin.com/feed/",
    },
  ];

  const jsprojects = [
    {
      
      description1: "drumKit",
      imgUrl1: java1,
      path1:"https://drum-kit-nu-tan.vercel.app/",
    },
    {
      description1: "Task List",
      imgUrl1: java2,
      path1:"https://to-do-list-sandy-gamma.vercel.app/",
    },
    {
      description1: "Music Player",
      imgUrl1: java3,
      path1:"https://music-player-five-sable.vercel.app/",
    },
    
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I show you to all the big and small websites I have done so far</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">MERN</Nav.Link>
                    </Nav.Item>
                     <Nav.Item>
                      <Nav.Link eventKey="second">javascript</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">About</Nav.Link>
                    </Nav.Item> 
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>

                      <h1>Many more ...</h1>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          jsprojects.map((jsproject, index1) => {
                            return (
                              <JsProjectCard
                                key={index1}
                                {...jsproject}
                                />
                            )
                          })
                        }
                      </Row>
                      <h1>Many more ...</h1>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I have a total of 2  Years of Experience as a Full Stack Developer who worked on numerous interesting projects. I'm Constant Learner And Open To Learn Anything Which Is Required To Succeed in This Full Stack Development Position. I have Made Numerous Projects. .</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
