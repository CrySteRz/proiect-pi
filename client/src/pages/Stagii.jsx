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
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="bg-white rounded">
              <div className="sidebar_header d-flex align-items-center justify-content-between px-4 py-3 br-bottom">
                <h4 className="ft-medium fs-lg mb-0">Search Filter</h4>
                <div className="ssh-header">
                  <a
                    href="javascript:void(0);"
                    className="clear_all ft-medium text-muted"
                  >
                    Clear All
                  </a>
                  <a
                    href="#search_open"
                    data-toggle="collapse"
                    aria-expanded="false"
                    role="button"
                    className="collapsed _filter-ico ml-2"
                  >
                    <i className="lni lni-text-align-right" />
                  </a>
                </div>
              </div>
              {/* Find New Property */}
              <div
                className="sidebar-widgets collapse miz_show"
                id="search_open"
                data-parent="#search_open"
              >
                <div className="search-inner">
                  <div className="filter-search-box px-4 pt-3 pb-0">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by keywords..."
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Location, Zip.."
                      />
                    </div>
                  </div>
                  <div className="filter_wraps">
                    {/* Job categories Search */}
                    <div className="single_search_boxed px-4 pt-0 br-bottom">
                      <div className="widget-boxed-header">
                        <h4>
                          <a
                            href="#categories"
                            className="ft-medium fs-md pb-0"
                            data-toggle="collapse"
                            aria-expanded="true"
                            role="button"
                          >
                            Job Categories
                          </a>
                        </h4>
                      </div>
                      <div
                        className="widget-boxed-body collapse show"
                        id="categories"
                        data-parent="#categories"
                      >
                        <div className="side-list no-border">
                          {/* Single Filter Card */}
                          <div className="single_filter_card">
                            <div className="card-body p-0">
                              <div className="inner_widget_link">
                                <ul className="no-ul-list filter-list">
                                  <li>
                                    <input
                                      id="a1"
                                      className="checkbox-custom"
                                      name="ADA"
                                      type="checkbox"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="a1"
                                      className="checkbox-custom-label"
                                    >
                                      IT Computers (62)
                                    </label>
                                    <ul className="no-ul-list filter-list">
                                      <li>
                                        <input
                                          id="aa1"
                                          className="checkbox-custom"
                                          name="ADA"
                                          type="checkbox"
                                        />
                                        <label
                                          htmlFor="aa1"
                                          className="checkbox-custom-label"
                                        >
                                          Web Design (31)
                                        </label>
                                      </li>
                                      <li>
                                        <input
                                          id="aa2"
                                          className="checkbox-custom"
                                          name="Parking"
                                          type="checkbox"
                                        />
                                        <label
                                          htmlFor="aa2"
                                          className="checkbox-custom-label"
                                        >
                                          Web development (20)
                                        </label>
                                      </li>
                                      <li>
                                        <input
                                          id="aa3"
                                          className="checkbox-custom"
                                          name="Coffee"
                                          type="checkbox"
                                        />
                                        <label
                                          htmlFor="aa3"
                                          className="checkbox-custom-label"
                                        >
                                          SEO Services (43)
                                        </label>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <input
                                      id="a2"
                                      className="checkbox-custom"
                                      name="Parking"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="a2"
                                      className="checkbox-custom-label"
                                    >
                                      Financial Service (16)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="a3"
                                      className="checkbox-custom"
                                      name="Coffee"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="a3"
                                      className="checkbox-custom-label"
                                    >
                                      Art, Design, Media (22)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="a4"
                                      className="checkbox-custom"
                                      name="Mother"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="a4"
                                      className="checkbox-custom-label"
                                    >
                                      Coach &amp; Education (21)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="a5"
                                      className="checkbox-custom"
                                      name="Outdoor"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="a5"
                                      className="checkbox-custom-label"
                                    >
                                      Apps Developements (17)
                                    </label>
                                    <ul className="no-ul-list filter-list">
                                      <li>
                                        <input
                                          id="ab1"
                                          className="checkbox-custom"
                                          name="ADA"
                                          type="checkbox"
                                        />
                                        <label
                                          htmlFor="ab1"
                                          className="checkbox-custom-label"
                                        >
                                          IOS Development (12)
                                        </label>
                                      </li>
                                      <li>
                                        <input
                                          id="ab2"
                                          className="checkbox-custom"
                                          name="Parking"
                                          type="checkbox"
                                        />
                                        <label
                                          htmlFor="ab2"
                                          className="checkbox-custom-label"
                                        >
                                          Android Development (04)
                                        </label>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <input
                                      id="a6"
                                      className="checkbox-custom"
                                      name="Pet"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="a6"
                                      className="checkbox-custom-label"
                                    >
                                      Writing &amp; Translation (04)
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Job Locations Search */}
                    <div className="single_search_boxed px-4 pt-0 br-bottom">
                      <div className="widget-boxed-header">
                        <h4>
                          <a
                            href="#locations"
                            data-toggle="collapse"
                            aria-expanded="false"
                            role="button"
                            className="ft-medium fs-md pb-0 collapsed"
                          >
                            Job Locations
                          </a>
                        </h4>
                      </div>
                      <div
                        className="widget-boxed-body collapse"
                        id="locations"
                        data-parent="#locations"
                      >
                        <div className="side-list no-border">
                          {/* Single Filter Card */}
                          <div className="single_filter_card">
                            <div className="card-body p-0">
                              <div className="inner_widget_link">
                                <ul className="no-ul-list filter-list">
                                  <li>
                                    <input
                                      id="b1"
                                      className="checkbox-custom"
                                      name="ADA"
                                      type="checkbox"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="b1"
                                      className="checkbox-custom-label"
                                    >
                                      Australia (21)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="b2"
                                      className="checkbox-custom"
                                      name="Parking"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="b2"
                                      className="checkbox-custom-label"
                                    >
                                      New Zeland (12)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="b3"
                                      className="checkbox-custom"
                                      name="Coffee"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="b3"
                                      className="checkbox-custom-label"
                                    >
                                      United Kingdom (21)
                                    </label>
                                    <ul className="no-ul-list filter-list">
                                      <li>
                                        <input
                                          id="ac1"
                                          className="checkbox-custom"
                                          name="ADA"
                                          type="checkbox"
                                        />
                                        <label
                                          htmlFor="ac1"
                                          className="checkbox-custom-label"
                                        >
                                          London (06)
                                        </label>
                                      </li>
                                      <li>
                                        <input
                                          id="ac2"
                                          className="checkbox-custom"
                                          name="Parking"
                                          type="checkbox"
                                        />
                                        <label
                                          htmlFor="ac2"
                                          className="checkbox-custom-label"
                                        >
                                          Manchester (07)
                                        </label>
                                      </li>
                                      <li>
                                        <input
                                          id="ac3"
                                          className="checkbox-custom"
                                          name="Coffee"
                                          type="checkbox"
                                        />
                                        <label
                                          htmlFor="ac3"
                                          className="checkbox-custom-label"
                                        >
                                          Birmingham (08)
                                        </label>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <input
                                      id="b4"
                                      className="checkbox-custom"
                                      name="Mother"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="b4"
                                      className="checkbox-custom-label"
                                    >
                                      United State (04)
                                    </label>
                                    <ul className="no-ul-list filter-list">
                                      <li>
                                        <input
                                          id="ad1"
                                          className="checkbox-custom"
                                          name="ADA"
                                          type="checkbox"
                                        />
                                        <label
                                          htmlFor="ad1"
                                          className="checkbox-custom-label"
                                        >
                                          New York (32)
                                        </label>
                                      </li>
                                      <li>
                                        <input
                                          id="ad2"
                                          className="checkbox-custom"
                                          name="Parking"
                                          type="checkbox"
                                        />
                                        <label
                                          htmlFor="ad2"
                                          className="checkbox-custom-label"
                                        >
                                          Washington (42)
                                        </label>
                                      </li>
                                      <li>
                                        <input
                                          id="ad3"
                                          className="checkbox-custom"
                                          name="Coffee"
                                          type="checkbox"
                                        />
                                        <label
                                          htmlFor="ad3"
                                          className="checkbox-custom-label"
                                        >
                                          Los Angeles (22)
                                        </label>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <input
                                      id="b5"
                                      className="checkbox-custom"
                                      name="Outdoor"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="b5"
                                      className="checkbox-custom-label"
                                    >
                                      India (15)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="b6"
                                      className="checkbox-custom"
                                      name="Pet"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="b6"
                                      className="checkbox-custom-label"
                                    >
                                      Singapore (09)
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Job Skills Search */}
                    <div className="single_search_boxed px-4 pt-0 br-bottom">
                      <div className="widget-boxed-header">
                        <h4>
                          <a
                            href="#skills"
                            data-toggle="collapse"
                            aria-expanded="false"
                            role="button"
                            className="ft-medium fs-md pb-0 collapsed"
                          >
                            Skills
                          </a>
                        </h4>
                      </div>
                      <div
                        className="widget-boxed-body collapse"
                        id="skills"
                        data-parent="#skills"
                      >
                        <div className="side-list no-border">
                          {/* Single Filter Card */}
                          <div className="single_filter_card">
                            <div className="card-body p-0">
                              <div className="inner_widget_link">
                                <ul className="no-ul-list filter-list">
                                  <li>
                                    <input
                                      id="c1"
                                      className="checkbox-custom"
                                      name="ADA"
                                      type="checkbox"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="c1"
                                      className="checkbox-custom-label"
                                    >
                                      Administrative (15)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="c2"
                                      className="checkbox-custom"
                                      name="Parking"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="c2"
                                      className="checkbox-custom-label"
                                    >
                                      iPhone &amp; Android (33)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="c3"
                                      className="checkbox-custom"
                                      name="Coffee"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="c3"
                                      className="checkbox-custom-label"
                                    >
                                      Java &amp; AJAX (32)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="c4"
                                      className="checkbox-custom"
                                      name="Mother"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="c4"
                                      className="checkbox-custom-label"
                                    >
                                      Account Manager (21)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="c5"
                                      className="checkbox-custom"
                                      name="Outdoor"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="c5"
                                      className="checkbox-custom-label"
                                    >
                                      WordPress (32)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="c6"
                                      className="checkbox-custom"
                                      name="Pet"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="c6"
                                      className="checkbox-custom-label"
                                    >
                                      Magento (42)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="c7"
                                      className="checkbox-custom"
                                      name="Beauty"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="c7"
                                      className="checkbox-custom-label"
                                    >
                                      Shopify (12)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="c8"
                                      className="checkbox-custom"
                                      name="Bike"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="c8"
                                      className="checkbox-custom-label"
                                    >
                                      PHP Script (08)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="c9"
                                      className="checkbox-custom"
                                      name="Phone"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="c9"
                                      className="checkbox-custom-label"
                                    >
                                      Drupal (32)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="c11"
                                      className="checkbox-custom"
                                      name="Private"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="c11"
                                      className="checkbox-custom-label"
                                    >
                                      Joomla (50)
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Experience Search */}
                    <div className="single_search_boxed px-4 pt-0 br-bottom">
                      <div className="widget-boxed-header">
                        <h4>
                          <a
                            href="#experience"
                            data-toggle="collapse"
                            aria-expanded="false"
                            role="button"
                            className="ft-medium fs-md pb-0 collapsed"
                          >
                            Experience
                          </a>
                        </h4>
                      </div>
                      <div
                        className="widget-boxed-body collapse"
                        id="experience"
                        data-parent="#experience"
                      >
                        <div className="side-list no-border">
                          {/* Single Filter Card */}
                          <div className="single_filter_card">
                            <div className="card-body p-0">
                              <div className="inner_widget_link">
                                <ul className="no-ul-list filter-list">
                                  <li>
                                    <input
                                      id="d1"
                                      className="checkbox-custom"
                                      name="ADA"
                                      type="checkbox"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="d1"
                                      className="checkbox-custom-label"
                                    >
                                      Beginner (54)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="d2"
                                      className="checkbox-custom"
                                      name="Parking"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="d2"
                                      className="checkbox-custom-label"
                                    >
                                      1+ Year (32)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="d3"
                                      className="checkbox-custom"
                                      name="Coffee"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="d3"
                                      className="checkbox-custom-label"
                                    >
                                      2 Year (09)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="d4"
                                      className="checkbox-custom"
                                      name="Mother"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="d4"
                                      className="checkbox-custom-label"
                                    >
                                      3+ Year (16)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="d5"
                                      className="checkbox-custom"
                                      name="Outdoor"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="d5"
                                      className="checkbox-custom-label"
                                    >
                                      4+ Year (17)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="d6"
                                      className="checkbox-custom"
                                      name="Pet"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="d6"
                                      className="checkbox-custom-label"
                                    >
                                      5+ Year (22)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="d7"
                                      className="checkbox-custom"
                                      name="Beauty"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="d7"
                                      className="checkbox-custom-label"
                                    >
                                      10+ Year (32)
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Job types Search */}
                    <div className="single_search_boxed px-4 pt-0 br-bottom">
                      <div className="widget-boxed-header">
                        <h4>
                          <a
                            href="#jbtypes"
                            data-toggle="collapse"
                            aria-expanded="false"
                            role="button"
                            className="ft-medium fs-md pb-0 collapsed"
                          >
                            Job Type
                          </a>
                        </h4>
                      </div>
                      <div
                        className="widget-boxed-body collapse"
                        id="jbtypes"
                        data-parent="#jbtypes"
                      >
                        <div className="side-list no-border">
                          {/* Single Filter Card */}
                          <div className="single_filter_card">
                            <div className="card-body p-0">
                              <div className="inner_widget_link">
                                <ul className="no-ul-list filter-list">
                                  <li>
                                    <input
                                      id="e2"
                                      className="radio-custom"
                                      name="jtype"
                                      type="radio"
                                    />
                                    <label
                                      htmlFor="e2"
                                      className="radio-custom-label"
                                    >
                                      Full time
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="e3"
                                      className="radio-custom"
                                      name="jtype"
                                      type="radio"
                                    />
                                    <label
                                      htmlFor="e3"
                                      className="radio-custom-label"
                                    >
                                      Part Time
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="e4"
                                      className="radio-custom"
                                      name="jtype"
                                      type="radio"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="e4"
                                      className="radio-custom-label"
                                    >
                                      Contract Base
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="e5"
                                      className="radio-custom"
                                      name="jtype"
                                      type="radio"
                                    />
                                    <label
                                      htmlFor="e5"
                                      className="radio-custom-label"
                                    >
                                      Internship
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="e6"
                                      className="radio-custom"
                                      name="jtype"
                                      type="radio"
                                    />
                                    <label
                                      htmlFor="e6"
                                      className="radio-custom-label"
                                    >
                                      Regular
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Job Level Search */}
                    <div className="single_search_boxed px-4 pt-0 br-bottom">
                      <div className="widget-boxed-header">
                        <h4>
                          <a
                            href="#jblevel"
                            data-toggle="collapse"
                            aria-expanded="false"
                            role="button"
                            className="ft-medium fs-md pb-0 collapsed"
                          >
                            Job Level
                          </a>
                        </h4>
                      </div>
                      <div
                        className="widget-boxed-body collapse"
                        id="jblevel"
                        data-parent="#jblevel"
                      >
                        <div className="side-list no-border">
                          {/* Single Filter Card */}
                          <div className="single_filter_card">
                            <div className="card-body p-0">
                              <div className="inner_widget_link">
                                <ul className="no-ul-list filter-list">
                                  <li>
                                    <input
                                      id="f1"
                                      className="checkbox-custom"
                                      name="ADA"
                                      type="checkbox"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="f1"
                                      className="checkbox-custom-label"
                                    >
                                      Team Leader
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="f2"
                                      className="checkbox-custom"
                                      name="Parking"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="f2"
                                      className="checkbox-custom-label"
                                    >
                                      Manager
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="f3"
                                      className="checkbox-custom"
                                      name="Coffee"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="f3"
                                      className="checkbox-custom-label"
                                    >
                                      Junior
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="f4"
                                      className="checkbox-custom"
                                      name="Coffee"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="f4"
                                      className="checkbox-custom-label"
                                    >
                                      Senior
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Expected Salary Search */}
                    <div className="single_search_boxed px-4 pt-0">
                      <div className="widget-boxed-header">
                        <h4>
                          <a
                            href="#salary"
                            data-toggle="collapse"
                            aria-expanded="false"
                            role="button"
                            className="ft-medium fs-md pb-0 collapsed"
                          >
                            Expected Salary
                          </a>
                        </h4>
                      </div>
                      <div
                        className="widget-boxed-body collapse"
                        id="salary"
                        data-parent="#salary"
                      >
                        <div className="side-list no-border">
                          {/* Single Filter Card */}
                          <div className="single_filter_card">
                            <div className="card-body p-0">
                              <div className="inner_widget_link">
                                <ul className="no-ul-list filter-list">
                                  <li>
                                    <input
                                      id="g1"
                                      className="checkbox-custom"
                                      name="ADA"
                                      type="checkbox"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="g1"
                                      className="checkbox-custom-label"
                                    >
                                      $120k - $140k PA
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="g2"
                                      className="checkbox-custom"
                                      name="Parking"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="g2"
                                      className="checkbox-custom-label"
                                    >
                                      $140k - $150k PA
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="g3"
                                      className="checkbox-custom"
                                      name="Coffee"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="g3"
                                      className="checkbox-custom-label"
                                    >
                                      $150k - $170k PA
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="g4"
                                      className="checkbox-custom"
                                      name="Mother"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="g4"
                                      className="checkbox-custom-label"
                                    >
                                      $170k - $190k PA
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="g5"
                                      className="checkbox-custom"
                                      name="Outdoor"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="g5"
                                      className="checkbox-custom-label"
                                    >
                                      $200k - $250k PA
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="g6"
                                      className="checkbox-custom"
                                      name="Pet"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="g6"
                                      className="checkbox-custom-label"
                                    >
                                      $250k - $300k PA
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group filter_button pt-2 pb-4 px-4">
                    <button
                      type="submit"
                      className="btn btn-md theme-bg text-light rounded full-width"
                    >
                      3 Results Show
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar End */}
          </div>
          {/* Item Wrap Start */}
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <div className="row align-items-center justify-content-between mx-0 bg-white rounded py-2 mb-4">
                  <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12">
                    <h6 className="mb-0 ft-medium fs-sm">3 New Jobs Found</h6>
                  </div>
                  <div className="col-xl-9 col-lg-8 col-md-7 col-sm-12">
                    <div className="filter_wraps elspo_wrap d-flex align-items-center justify-content-end">
                      <div className="single_fitres mr-2 br-right">
                        <select className="custom-select simple">
                          <option value={1} selected>
                            Default Sorting
                          </option>
                          <option value={2}>Recent jobs</option>
                          <option value={3}>Featured jobs</option>
                          <option value={4}>Trending Jobs</option>
                          <option value={5}>Premium jobs</option>
                        </select>
                      </div>
                      <div className="single_fitres">
                        <a
                          href="job-search-v3.html"
                          className="simple-button mr-1"
                        >
                          <i className="ti-layout-grid2" />
                        </a>
                        <a
                          href="job-list-v3.html"
                          className="simple-button active theme-cl"
                        >
                          <i className="ti-view-list" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* All jobs */}
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                {/* Single job */}
                <div className="job_grid d-block border rounded px-3 pt-3 pb-2">
                  <div className="jb-list01-flex d-flex align-items-start justify-content-start">
                    <div className="jb-list01-thumb">
                      <img
                        src={job1}
                        className="img-fluid"
                        width={90}
                        alt=""
                      />
                    </div>
                    <div className="jb-list01 pl-3">
                      <div className="jb-list-01-title">
                        <h5 className="ft-medium mb-1">
                          <a href="/jobdetails1">
                            Stagiu Web
                          </a>
                        </h5>
                      </div>
                      <div className="jb-list-01-info d-block mb-3">
                      <span className="text-muted mr-2">
                          <i className="lni lni-map-marker mr-1" />
                          AT&T
                        </span>
                        <span className="text-muted mr-2">
                          <i className="lni lni-map-marker mr-1" />
                          Timisoara
                        </span>
                        <span className="text-muted mr-2">
                          <i className="lni lni-check-box mr-1" />
                          Acum 11 ore
                        </span>
                        <span className="text-muted mr-2">
                          <i className="lni lni-money-protection mr-1" />
                          Platit
                        </span>
                      </div>
                      <div className="jb-list-01-title d-inline">
                        <span className="mr-2 mb-2 d-inline-flex px-2 py-1 rounded theme-cl theme-bg-light">
                          PHP
                        </span>
                        <span className="mr-2 mb-2 d-inline-flex px-2 py-1 rounded text-warning bg-light-warning">
                          MySQL
                        </span>
                        <span className="mr-2 mb-2 d-inline-flex px-2 py-1 rounded text-info bg-light-info">
                          CSS3
                        </span>
                        <span className="px-2 mb-2 d-inline-flex py-1 rounded text-purple bg-light-purple">
                          HTML5
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single job */}
                <div className="job_grid d-block border rounded px-3 pt-3 pb-2">
                  <div className="jb-list01-flex d-flex align-items-start justify-content-start">
                    <div className="jb-list01-thumb">
                      <img
                        src={job2}
                        className="img-fluid"
                        width={90}
                        alt=""
                      />
                    </div>
                    <div className="jb-list01 pl-3">
                      <div className="jb-list-01-title">
                        <h5 className="ft-medium mb-1">
                          <a href="job-detail.html">
                            Stagiu C++
                          </a>
                        </h5>
                      </div>
                      <div className="jb-list-01-info d-block mb-3">
                        <span className="text-muted mr-2">
                          <i className="lni lni-map-marker mr-1" />
                          Google
                        </span>
                        <span className="text-muted mr-2">
                          <i className="lni lni-briefcase mr-1" />
                          Timisoara
                        </span>
                        <span className="text-muted mr-2">
                          <i className="lni lni-check-box mr-1" />
                          Acum 16 ore
                        </span>
                        <span className="text-muted mr-2">
                          <i className="lni lni-money-protection mr-1" />
                          Platit
                        </span>
                      </div>
                      <div className="jb-list-01-title d-inline">
                        <span className="mr-2 mb-2 d-inline-flex px-2 py-1 rounded theme-cl theme-bg-light">
                          C/C++
                        </span>
                        <span className="mr-2 mb-2 d-inline-flex px-2 py-1 rounded text-warning bg-light-warning">
                          MySQL
                        </span>
                        <span className="mr-2 mb-2 d-inline-flex px-2 py-1 rounded text-danger bg-light-danger">
                          C#
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single job */}
                <div className="job_grid d-block border rounded px-3 pt-3 pb-2">
                  <div className="jb-list01-flex d-flex align-items-start justify-content-start">
                    <div className="jb-list01-thumb">
                      <img
                        src={job3}
                        className="img-fluid"
                        width={90}
                        alt=""
                      />
                    </div>
                    <div className="jb-list01 pl-3">
                      <div className="jb-list-01-title">
                        <h5 className="ft-medium mb-1">
                          <a href="job-detail.html">
                            Stagiu for Python
                          </a>
                        </h5>
                      </div>
                      <div className="jb-list-01-info d-block mb-3">
                        <span className="text-muted mr-2">
                          <i className="lni lni-map-marker mr-1" />
                          Huawei
                        </span>
                        <span className="text-muted mr-2">
                          <i className="lni lni-briefcase mr-1" />
                          Remote
                        </span>
                        <span className="text-muted mr-2">
                          <i className="lni lni-check-box mr-1" />
                          Acum 2 zile
                        </span>
                        <span className="text-muted mr-2">
                          <i className="lni lni-money-protection mr-1" />
                          Neplatit
                        </span>
                      </div>
                      <div className="jb-list-01-title d-inline">
                        <span className="mr-2 mb-2 d-inline-flex px-2 py-1 rounded theme-cl theme-bg-light">
                          Python
                        </span>
                        <span className="mr-2 mb-2 d-inline-flex px-2 py-1 rounded text-warning bg-light-warning">
                          MySQL
                        </span>
                        <span className="mr-2 mb-2 d-inline-flex px-2 py-1 rounded text-danger bg-light-danger">
                          Machine Learning
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span className="fas fa-arrow-circle-right" />
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span className="fas fa-arrow-circle-right" />
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  
  );
};
export default Stagii;
