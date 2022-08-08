import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/">
                <img src={navIcon1} alt="LinkedIn Logo"/>
              </a>
              <a href="https://www.facebook.com/">
                <img src={navIcon2} alt="FaceBook Logo"/>
              </a>
              <a href="https://www.instagram.com/">
                <img src={navIcon3} alt="Instagram Logo"/>
              </a>
            </div>
            <p>CopyRight 2022. All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
