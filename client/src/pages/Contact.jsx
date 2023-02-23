import React from "react";
import { Link } from "react-router-dom";
import "../data/css/style.css";
import { Logo } from "../components";
import Footer from "../components/Footer";


const Contact = () => {

  return (
    <div style={{ overflowX: "hidden" }}>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      ></link>

      <div className="container-fluid p-0">
        <navx className="navxbar navxbar-expand-lg bg-white navxbar-light py-3 py-lg-0 px-lg-5">
          <Link to="/" className="navxbar-brand ml-lg-2">
            <h1 className="m-0 text-uppercase text-primary">
              <div style={{ width: "3em" }}>
                <Logo />
              </div>
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
      {/* Navbar End */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="bg-light d-flex flex-column justify-content-center px-5" style={{height: '450px'}}>
                <div className="d-flex align-items-center mb-5">
                  <div className="btn-icon bg-primary mr-4">
                    <i className="fa fa-2x fa-map-marker-alt text-white" />
                  </div>
                  <div className="mt-n1">
                    <h4>Our Location</h4>
                    <p className="m-0">Bd. Vasile Pârvan nr. 4, Timișoara, cod poștal 300223, județul Timiș, România</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-5">
                  <div className="btn-icon bg-secondary mr-4">
                    <i className="fa fa-2x fa-phone-alt text-white" />
                  </div>
                  <div className="mt-n1">
                    <h4>Suna-ne</h4>
                    <p className="m-0">+40 256 592 111</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="btn-icon bg-warning mr-4">
                    <i className="fa fa-2x fa-envelope text-white" />
                  </div>
                  <div className="mt-n1">
                    <h4>trimite-ne Email</h4>
                    <p className="m-0">secretariat.uvt@e-uvt.ro</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Ai nevoie de ajutor?</h6>
                <h1 className="display-4">Trimite-ne un mesaj</h1>
              </div>
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="col-6 form-group">
                      <input type="text" className="form-control border-top-0 border-right-0 border-left-0 p-0" placeholder="Numele tau" required="required" />
                    </div>
                    <div className="col-6 form-group">
                      <input type="email" className="form-control border-top-0 border-right-0 border-left-0 p-0" placeholder="Email" required="required" />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control border-top-0 border-right-0 border-left-0 p-0" placeholder="Subiect" required="required" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control border-top-0 border-right-0 border-left-0 p-0" rows={5} placeholder="Mesaj" required="required" defaultValue={""} />
                  </div>
                  <div>
                    <button className="btn btn-primary py-3 px-5" type="submit">Trimite</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </div>
  );
};
export default Contact;
