import react from "../assets/img/react.png";
import bootstrap from "../assets/img/bootsrap.jpg";
import tailwind from "../assets/img/tailwind.png";
import git from "../assets/img/git.png";
import html from "../assets/img/html.png";
import typescript from "../assets/img/typescript.png";
import javascript from "../assets/img/javascript.jpg";
import next from "../assets/img/nextjs.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'animate.css';
import chakra from "../assets/img/chakra.png";
import rest from "../assets/img/restful.png";
import node from "../assets/img/node.png";
import graghql from "../assets/img/grapghql.png";
import colorSharp from "../assets/img/color-sharp.png"
import Cypress from "../assets/img/cypress.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill animate__animated animate__zoomIn" id="skills">
        <div className="container animate__animated animate__zoomIn">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx ">
                        <h2>Skills</h2>
                        <p> I am a problem-solver, with a can-do attitude. I aim for success right from the start of anything<br></br> I am also efficient anywhere i find myself. I have pratical skills like;</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>REACT Js</h5>
                            </div>
                            <div className="item">
                                <img src={next} alt="Image" />
                                <h5>Next JS</h5>
                            </div>
                            <div className="item">
                                <img src={typescript} alt="Image" />
                                <h5>Typescript</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            {/* <div className="item">
                                <img src={graghql} alt="Image" />
                                <h5>GraphQL</h5>
                            </div> */}
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>Node js</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React Testing Library</h5>
                            </div>
                            <div className="item">
                                <img src={Cypress} alt="Image" />
                                <h5>Cypress</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={tailwind} alt="Image" />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>GIT</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={chakra} alt="Image" />
                                <h5>Chakra UI</h5>
                            </div>
                            <div className="item">
                                <img src={rest} alt="Image" />
                                <h5>RESTful API</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
