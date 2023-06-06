import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard"
import skillup from "../assets/img/skillup.png";
import Skillup from "../assets/img/skillupWeb.png";
import projImg3 from "../assets/img/project5.png";
import Howbodi from "../assets/img/howbodi.png";
import WhoUePP from "../assets/img/whoUEpp.png";
import projImg4 from "../assets/img/project4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Howbodi",
      description: "An application that helps you to access mental healthcare from anywhere in the world",
      imgUrl: Howbodi,
      id:"https://www.howbodi.io/"
    },
    {
      title: "Skillup Africa",
      description: "An application that provides young Africans with top quality training in globally viable skills and connects them to opportunities to harness the skills ",
      imgUrl: skillup,
      id:"https://community.skillupafrica.com.ng/"
    },
   
    {
      title: "Who U Epp",
      description: "A company that enables borrowers to access funds quickly and easily while allowing lenders to earn competitive returns on their investments.",
      imgUrl: WhoUePP,
      id:"https://www.whouepp.com/"
    },
    {
      title: "Skillup Africa",
      description: "Skillup Africa Digital Skills Empowerment Program is in its 6th Cohort and open to young people from Africa interested in learning viable Tech skills and attracting opportunities globally.ks sales and supply",
      imgUrl: Skillup,
      id:"https://skillupafricadsep.netlify.app/"
    },
    {
      title: "Tochel Partners",
      description: "A company that carries out parts and articulated trucks sales and supply",
      imgUrl: projImg4,
      id:"https://detochelandpartners.netlify.app/"
    },
    
    {
      title: "Linkedin",
      description: "Linkedin clone with firebase",
      imgUrl: projImg3,
      id:"https://linkedin-clone-28da2.web.app/"
    },
    // {
    //   title: "MyInstrgram",
    //   description: "Instagram Profile Page",
    //   imgUrl: projImg2,
    //   id:"https://myinstagram-profile.netlify.app"
    // },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have worked on some projects with different CSS frameworks and was able to achieve all with React js.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
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
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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