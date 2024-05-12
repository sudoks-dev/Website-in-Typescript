import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";

import projImg1 from "../assets/img/meter1.png";
import projImg2 from "../assets/img/meter2.png";
import projImg3 from "../assets/img/meter3.png";
// team
import "animate.css";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../assets/img/color-sharp2.png"

export const Projects = () => {
  
  // adaptive to every device logic
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Team</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="skill-slider"
                  >
                    <div className="item">
                      <img src={projImg1} alt="1-img" />
                      <h5>Team member 1</h5>
                    </div>
                    <div className="item">
                      <img src={projImg2} alt="2-img" />
                      <h5>Team member 2</h5>
                    </div>
                    <div className="item">
                      <img src={projImg3} alt="3-img" />
                      <h5>Team member 3</h5>
                    </div>
                   
                  </Carousel>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg-img" />
    </section>
  );
};
