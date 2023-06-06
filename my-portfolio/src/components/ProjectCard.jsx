import { Col } from "react-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, id }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <Nav.Link href={id} >
      <div className="proj-imgbx" style={{ height: '250px' }}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4> 
          <span>{description}</span>
        </div>  
      </div>
          </Nav.Link>
     
    </Col>
  )
}
