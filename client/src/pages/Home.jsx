import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {Logo} from "../components/";
import testimonial1 from "../data/testimonial-1.jpg";
import testimonial2 from "../data/testimonial-2.jpg";
import "../data/css/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";
import course1 from "../data/courses-1.jpg";
import course2 from "../data/courses-2.jpg";
import course3 from "../data/courses-3.jpg";
import course4 from "../data/courses-4.jpg";
import course5 from "../data/courses-5.jpg";
import course6 from "../data/courses-6.jpg";
//Import data from backend
const Home = () => {
  const items = [
    { id: 1, name: "Robotics", imageUrl: course1, count: 10 },
    { id: 2, name: "Web Development", imageUrl: course2, count: 14 },
    { id: 3, name: "Database Management", imageUrl: course3, count: 12 },
    { id: 4, name: "Marketing", imageUrl: course4, count: 4 },
    { id: 5, name: "Machine Learning", imageUrl: course5, count: 8 },
    { id: 6, name: "C++ Development", imageUrl: course6, count: 19 },
  ];

  const settingsCourse = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
  };
  const settingsTestimonial = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap"
        rel="stylesheet"
      ></link>
      

      <div className="container-fluid p-0">
        <navx className="navxbar navxbar-expand-lg bg-white navxbar-light py-3 py-lg-0 px-lg-5">
          <Link to="/" className="navxbar-brand ml-lg-2">
            <h1 className="m-0 text-uppercase text-primary">
              <div style={{width: "3em"}}><Logo /></div>
              Stagii
            </h1>
          </Link>
          <button
            type="button"
            className="navxbar-toggler"
            data-toggle="collapse"
            data-target="#navxbarCollapse"
          >
            <span className="navxbar-toggler-icon" />
          </button>
          <div
            className="collapse navxbar-collapse justify-content-end px-lg-2"
            id="navxbarCollapse"
          >
            <div className="navxbar-navx py-0">
              <Link to="/" className="navx-item navx-link active">
                Home
              </Link>
              <Link to="/stagii" className="navx-item navx-link">
                Stagii
              </Link>
              <Link to="/contact" className="navx-item navx-link">
                Contacteaza-ne
              </Link>
            </div>
            {/*Search Box using Bootstrap*/}
            <div className="d-flex align-items-center ml-2">
              <div
                className="form px-2 py-1 d-flex align-items-center "
                style={{ border: "1px solid #d1d5db", borderRadius: "10px" }}
              >
                <i className="fa fa-search" />
                <input
                  style={{ border: "none", outline: "none", marginLeft: "5px" }}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>

              <Link
                className="btn btn-primary  px-4 d-flex d-lg-block ml-2 ml-lg-3"
                style={{ borderRadius: "10px" }}
                to="/login"
              >
                Log In
              </Link>
            </div>
          </div>
        </navx>
      </div>
      {/* navxbar End */}
      {/* Header Start */}
      <div
        className="jumbotron jumbotron-fluid position-relative overlay-bottom"
        style={{ marginBottom: "90px" }}
      >
        <div className="container text-center my-5 py-5">
          <h1 className="text-white mt-4 mb-4">Stagii by UVT</h1>
          <Link to="/stagii">
            <h1 className="text-white display-1 mb-5">
              Aplica aici
              <i className="fas fa-arrow-right" style={{ margin: "0.2em" }} />
            </h1>
          </Link>
          <div
            className="mx-auto mb-5"
            style={{ width: "100%", maxWidth: "600px" }}
          ></div>
        </div>
      </div>
      {/* Header End */}
      
      {/* Courses Start */}
      <div className="container-fluid px-0">
        <div className="section-title text-center position-relative mb-4">
          <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
            Stagiile noastre
          </h6>
          <h1 className="display-4 mb-3">
            Alege categoria care ti se potriveste si aplica
          </h1>
          <Slider {...settingsCourse}>
            {items.map((item) => (
              <div class="courses-item position-relative">
                <img class="img-fluid" src={item.imageUrl} alt=""></img>
                <div class="courses-text">
                  <h4 class="text-center text-white px-3">{item.name}</h4>
                  <div class="border-top w-100 mt-3">
                    <div class="d-flex justify-content-between p-4">
                      <span class="text-white">
                        <i class="fas fa-users mr-2"></i>{item.count} Stagii disponibile
                      </span>
                    </div>
                  </div>
                  <div class="w-100 bg-white text-center p-4">
                    <Link class="btn btn-primary" to="/stagii">
                      Aplica
                    </Link>{" "}
                    {/* DEVI DARGLI IL VALORE DELLA CATEGORIA */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Courses End */}
      {/* Testimonial Start */}
      <div class="container-fluid bg-image py-5">
        <div class="container py-5">
          <div class="row align-items-center">
            <div class="col-lg-5 mb-5 mb-lg-0">
              <div class="section-title position-relative mb-4">
                <h6 class="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Experiences
                </h6>
                <h1 class="display-4">Studenti Nostrii</h1>
              </div>
              <p class="m-0">
                Dolor est dolores et nonumy sit labore dolores est sed rebum
                amet, justo duo ipsum sanctus dolore magna rebum sit et. Diam
                lorem ea sea at. Nonumy et at at sed justo est nonumy tempor.
                Vero sea ea eirmod, elitr ea amet diam ipsum at amet. Erat sed
                stet eos ipsum diam
              </p>
            </div>
            <div class="col-lg-7">
              <div class="owl-carousel testimonial-carousel">
                <Slider {...settingsTestimonial}>
                  <div class="bg-white p-5">
                    <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
                    <p>
                      Sed et elitr ipsum labore dolor diam, ipsum duo vero sed
                      sit est est ipsum eos clita est ipsum. Est nonumy tempor
                      at kasd. Sed at dolor duo ut dolor, et justo erat dolor
                      magna sed stet amet elitr duo lorem
                    </p>
                    <div class="d-flex flex-shrink-0 align-items-center mt-4">
                      <img
                        class="img-fluid mr-4"
                        src={testimonial1}
                        alt=""
                      ></img>
                      <div>
                        <h5>Numle Studentului</h5>
                        <span>Web Design</span>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white p-5">
                    <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
                    <p>
                      Sed et elitr ipsum labore dolor diam, ipsum duo vero sed
                      sit est est ipsum eos clita est ipsum. Est nonumy tempor
                      at kasd. Sed at dolor duo ut dolor, et justo erat dolor
                      magna sed stet amet elitr duo lorem
                    </p>
                    <div class="d-flex flex-shrink-0 align-items-center mt-4">
                      <img
                        class="img-fluid mr-4"
                        src={testimonial2}
                        alt=""
                      ></img>
                      <div>
                        <h5>Numele Studentului</h5>
                        <span>Web Design</span>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Start */}
      
      <Footer />
    </div>
  );
};

export default Home;
