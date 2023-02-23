import React from 'react';
import logo_footer from "../data/uvt_logo_white.png";
const Footer = () => (
  <div>
    <div
        className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5"
        style={{ marginTop: "90px" }}
        >
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-md-6 mb-5">
              <a href="index.html" className="navxbar-brand">
                <h1 className="mt-n2 text-uppercase text-white">
                  <img
                    src={logo_footer}
                    style={{ width: "3em" }}
                    alt="UVT_Logo_Footer"
                  />
                  UVT Stagii
                </h1>
              </a>
              <p className="m-0">
                Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea lorem
                at et diam est, tempor rebum ipsum sit ea tempor stet et
                consetetur dolores. Justo stet diam ipsum lorem vero clita diam
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-5">
              <h3 className="text-white mb-4">Contact</h3>
              <p>
                <i className="fa fa-map-marker-alt mr-2" />
                Bd. Vasile Pârvan nr. 4, Timișoara, cod poștal 300223, județul
                Timiș, România
              </p>
              <p>
                <i className="fa fa-phone-alt mr-2" />
                +40 256 592 111
              </p>
              <p>
                <i className="fa fa-envelope mr-2" />
                secretariat.uvt@e-uvt.ro
              </p>
              <div className="d-flex justify-content-start mt-4">
                <a className="text-white mr-4" href="example.com">
                  <i className="fab fa-2x fa-twitter" />
                </a>
                <a className="text-white mr-4" href="example.com">
                  <i className="fab fa-2x fa-facebook-f" />
                </a>
                <a className="text-white mr-4" href="example.com">
                  <i className="fab fa-2x fa-linkedin-in" />
                </a>
                <a className="text-white" href="example.com">
                  <i className="fab fa-2x fa-instagram" />
                </a>
              </div>
            </div>

            {/* QUERY FOR TOP 4 CATEGORIES */}
            <div className="col-md-4 mb-5">
              <h3 className="text-white mb-4">Stagii</h3>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-white-50 mb-2" href="example.com">
                  <i className="fa fa-angle-right mr-2" />
                  Web Design
                </a>
                <a className="text-white-50 mb-2" href="example.com">
                  <i className="fa fa-angle-right mr-2" />
                  App Design
                </a>
                <a className="text-white-50 mb-2" href="example.com">
                  <i className="fa fa-angle-right mr-2" />
                  Telecommunicatii
                </a>
                <a className="text-white-50 mb-2" href="example.com">
                  <i className="fa fa-angle-right mr-2" />
                  Cercetare
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h3 className="text-white mb-4">Link-uri Utile</h3>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-white-50 mb-2" href="example.com">
                  <i className="fa fa-angle-right mr-2" />
                  Privacy Policy
                </a>
                <a className="text-white-50 mb-2" href="example.com">
                  <i className="fa fa-angle-right mr-2" />
                  Terms &amp; Condition
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div
        className="container-fluid bg-dark text-white-50 border-top py-4"
        style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
        >
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
              <p className="m-0">
                Copyright 2022 ©{" "}
                <a className="text-white" href="example.com">
                  UVT
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <p className="m-0">
                Designed by{" "}
                <a
                  className="text-white"
                  href="https://www.instagram.com/blidaruionutz/"
                >
                  Ionut Blidaru
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
  </div>
);

export default Footer;