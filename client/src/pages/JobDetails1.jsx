import React from "react";
import { Link } from "react-router-dom";
import "../data/css/style.css";
import { Logo } from "../components";
import Footer from "../components/Footer";
import job1 from "../data/job1.png";
import job2 from "../data/job2.png";
import job3 from "../data/job3.png";


const Stagii = () => {
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
      <div id="main-wrapper">
        <div className="clearfix" />
        {/* ======================= Searchbar Banner ======================== */}
        <div className="bg-light rounded py-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <div className="jbd-01 d-flex align-items-center justify-content-between">
                  <div className="jbd-flex d-flex align-items-center justify-content-start">
                    <div className="jbd-01-thumb">
                      <img src={job1} className="img-fluid" width={100} alt="" />
                    </div>
                    <div className="jbd-01-caption pl-3">
                      <div className="tbd-title"><h4 className="mb-0 ft-medium fs-md">Stagiu Web<img src="assets/img/verify.svg" className="ml-1" width={12} alt="" /></h4></div>
                      <div className="jbl_location mb-3">
                        <span><i className="lni lni-map-marker mr-1" />AT&T</span>
                        <span className="ml-3"><i className="lni lni-briefcase mr-1" />Timisoara</span>
                        <span className="ml-3"><i className="lni lni-money-protection mr-1" />Platit</span>
                        <span className="ml-3"><i className="lni lni-money-protection mr-1" />Acum 11 ore</span>
                      </div>
                      <div className="jbl_info01">
                        <span className="px-2 py-1 ft-medium medium text-light theme-bg rounded mr-2">Full Time</span>											
                      </div>
                    </div>
                  </div>
                  <div className="jbd-01-right text-right">
                    <div className="jbl_button mb-2"><a href="/login" className="btn btn-md rounded theme-bg-light theme-cl fs-sm ft-medium">Apply This Job</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ======================= Searchbar Banner ======================== */}
        {/* ============================ Job Details Start ================================== */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                <div className="rounded mb-4">
                  <div className="jbd-01 pr-3">
                    <div className="jbd-details mb-4">
                      <h5 className="ft-medium fs-md">Job description</h5>
                      <p>We are looking for a PHP Developer responsible for managing back-end services and the interchange of data between the server and the users. Your primary focus will be the development of all server-side logic, definition and maintenance of the central database</p>
                      <p>Across our network, we strive to provide rapid, performance-based, industry-focused and technology-enabled services, which reflect a shared knowledge of global and local industries and our experience of the Indian business environment.</p>
                    </div>
                    <div className="jbd-details mb-3">
                      <h5>Requirements:</h5>
                      <div className="position-relative row">
                        <div className="col-lg-12 col-md-12 col-12">
                          <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                            <div className="d-flex align-items-center">
                              <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                                <i className="fas fa-check small" />
                              </div>
                              <h6 className="mb-0 ml-3 text-muted fs-sm">Strong core PHP Hands on experience.</h6>
                            </div>
                          </div>
                          <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                            <div className="d-flex align-items-center">
                              <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                                <i className="fas fa-check small" />
                              </div>
                              <h6 className="mb-0 ml-3 text-muted fs-sm">Strong Expertise in CodeIgniter Framework .</h6>
                            </div>
                          </div>
                          <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                            <div className="d-flex align-items-center">
                              <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                                <i className="fas fa-check small" />
                              </div>
                              <h6 className="mb-0 ml-3 text-muted fs-sm">Understanding of MVC design pattern.</h6>
                            </div>
                          </div>
                          <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                            <div className="d-flex align-items-center">
                              <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                                <i className="fas fa-check small" />
                              </div>
                              <h6 className="mb-0 ml-3 text-muted fs-sm">Expertise in PHP, MVC Frameworks and good technology exposure of Codeigniter .</h6>
                            </div>
                          </div>
                          <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                            <div className="d-flex align-items-center">
                              <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                                <i className="fas fa-check small" />
                              </div>
                              <h6 className="mb-0 ml-3 text-muted fs-sm">Basic understanding of front-end technologies, such as JavaScript, HTML5, and CSS3</h6>
                            </div>
                          </div>
                          <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                            <div className="d-flex align-items-center">
                              <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                                <i className="fas fa-check small" />
                              </div>
                              <h6 className="mb-0 ml-3 text-muted fs-sm">Good knowledge of relational databases, version control tools and of developing web services.</h6>
                            </div>
                          </div>
                          <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                            <div className="d-flex align-items-center">
                              <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                                <i className="fas fa-check small" />
                              </div>
                              <h6 className="mb-0 ml-3 text-muted fs-sm">Proficient understanding of code versioning tools, such as Git.</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="jbd-details mb-4">
                      <h5 className="ft-medium fs-md">Skills Required</h5>
                      <div className="other-details">
                        <div className="details ft-medium"><label className="text-muted">Role</label><span className="text-dark">Database Architect / Designer</span></div>
                        <div className="details ft-medium"><label className="text-muted">Industry Type</label><span className="text-dark">Advertising &amp; Marketing</span></div>
                        <div className="details ft-medium"><label className="text-muted">Functional Area</label><span className="text-dark">Engineering - Software</span></div>
                        <div className="details ft-medium"><label className="text-muted">Employment Type</label><span className="text-dark">Full Time, Permanent</span></div>
                        <div className="details ft-medium"><label className="text-muted">Role Category</label><span className="text-dark">DBA / Data warehousing</span></div>
                      </div>
                    </div>
                    <div className="jbd-details mb-1">
                      <h5 className="ft-medium fs-md">Key Skills</h5>
                      <ul className="p-0 skills_tag text-left">
                        <li><span className="px-2 py-1 medium skill-bg rounded text-dark">Joomla</span></li>
                        <li><span className="px-2 py-1 medium skill-bg rounded text-dark">WordPress</span></li>
                        <li><span className="px-2 py-1 medium skill-bg rounded text-dark">Javascript</span></li>
                        <li><span className="px-2 py-1 medium skill-bg rounded text-dark">PHP</span></li>
                        <li><span className="px-2 py-1 medium skill-bg rounded text-dark">HTML5</span></li>
                        <li><span className="px-2 py-1 medium skill-bg rounded text-dark">MS SQL</span></li>
                        <li><span className="px-2 py-1 medium skill-bg rounded text-dark">SQL Development</span></li>
                        <li><span className="px-2 py-1 medium skill-bg rounded text-dark">Dynamod</span></li>
                        <li><span className="px-2 py-1 medium skill-bg rounded text-dark">Database</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="jbd-02 pt-4 pr-3">
                    <div className="jbd-02-flex d-flex align-items-center justify-content-between">
                    </div>
                  </div>
                </div>
              </div>
              {/* Sidebar */}
              
            </div>
          </div>
        </section>
      </div>
      
      
      <Footer />
    </div>
  
  );
};
export default Stagii;
