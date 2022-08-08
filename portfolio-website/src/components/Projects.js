import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";


export const Projects = () => {
  const projects = [
    {
      title: "Dummy Title",
      description: "Dummy description",
      imgUrl: projImg1,
    },
    {
      title: "Dummy Title",
      description: "Dummy description",
      imgUrl: projImg2,
    },
    {
      title: "Dummy Title",
      description: "Dummy description",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Generates passages of lorem ipsum text suitable for use as
              placeholder copy in web pages, graphics, and more. Works in the
              browser, NodeJS, and React Native.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab Three</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects.map((project,index)=>{
                                return(
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    ></ProjectCard>
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Loren nnnn</Tab.Pane>
                <Tab.Pane eventKey="third">Loren nnnn</Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"/>
    </section>
  );
};
