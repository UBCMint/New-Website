import React,{useEffect} from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImg from './hero-img.png';

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="hero" className="hero">
      {/* <div class="container position-relative">*/}
      <Container fluid>
        <div data-aos="fade" data-aos-duration="1500">
        <Row gy={5}>
          {/* <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start"> */}
          <Col lg={{span: 5, offset: 1, order: 'first'}}>
            <h2 className="hero-title">UBC MINT</h2>
            <h3 className="hero-title">Neurotechnology Design Team</h3>
            <p className="hero-body">
              Multifaceted Innovation in NeuroTechnology (MINT) is an
              undergraduate neurotech design team under Biomedical Engineering
              Student Team (BEST) at the University of British Columbia (UBC).
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              {/* <a href="#about" class="btn-get-started">
                Find Out More
              </a> */}
              <Button variant="success" href="#about" className="info-button" size="lg">Find Out More</Button>{' '}
              {/* <a
                href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                class="glightbox btn-watch-video d-flex align-items-center"
              >
                <i class="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a> */}
              <Button variant="warning" href="#projects" className="project-button" size="lg">Our Projects</Button>{' '}
            </div>
          </Col>
          {/* <div class="col-lg-6 order-1 order-lg-2"> */}
          <Col lg={{order: 'last'}}>
            {/* <img
              src="hero-img.png"
              className="img-fluid"
              alt=""
              data-aos="zoom-out"
              data-aos-delay="100"
            /> */}
            <Image fluid src={heroImg} className="hero-img"></Image>
          </Col>
        </Row>
        </div>
      </Container>

      <div className="icon-boxes position-relative">
        <div className="container position-relative">
          <div className="row gy-4 mt-5">
            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-easel"></i>
                </div>
                <h4 className="title">
                  <a href="" className="stretched-link">
                    Lorem Ipsum
                  </a>
                </h4>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-gem"></i>
                </div>
                <h4 className="title">
                  <a href="" className="stretched-link">
                    Sed ut perspiciatis
                  </a>
                </h4>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <h4 className="title">
                  <a href="" className="stretched-link">
                    Magni Dolores
                  </a>
                </h4>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-command"></i>
                </div>
                <h4 className="title">
                  <a href="" className="stretched-link">
                    Nemo Enim
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
