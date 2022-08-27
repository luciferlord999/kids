import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
function SecNavbar() {
    AOS.init();

    return (
        <>

            <header>
                <div className="header-top">
                    <div className="container">
                        <div className="ht-area">
                            <ul className="left">
                                <li>
                                    <span>
                                        <i className="fa fa-phone" aria-hidden="true" />
                                    </span>{" "}
                                    Phone : +91 984516****
                                </li>
                            </ul>
                            <ul className="right">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-facebook" aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-behance" aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-dribbble" aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-skype" aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-vimeo" aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-pinterest" aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-rss" aria-hidden="true" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main-menu">
                    <div className="container">
                        <div className="row no-gutters">
                            <nav className="main-menu-area w-100">
                                <div className="logo-area">
                                    <a className="" href="/">
                                        <img
                                            src="/loader.gif"
                                            alt="logo"
                                            className="img-responsive"
                                        />
                                    </a>
                                    <button
                                        type="button"
                                        className="navbar-toggle collapsed d-md-none"
                                        data-toggle="collapse"
                                        data-target="#bs-example-navbar-collapse-1"
                                        aria-expanded="false"
                                    >
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                </div>
                                <div className="menu-area">
                                    <ul className="menu">
                                        <li className="dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Home <span className="caret" />
                                            </a>
                                        </li>
                                        <li className="dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle=""
                                                role="button"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                About <span className="caret" />
                                            </a>

                                        </li>

                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                    <form className="menu-search-form">
                                        <input type="text" name="search" placeholder="Search here..." />
                                        <span className="menu-search-close">
                                            <i className="fa fa-times" aria-hidden="true" />
                                        </span>
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <section className="banner section-notch">

                <div className="main-banner-shape">                 
                    <div className="shape-1">
                        <img src="images/banner-shape-1.png" alt="image" />
                    </div>
                    <div className="shape-2">
                        <img src="images/banner-shape-2.png" alt="image" />
                    </div>
                    <div className="shape-3">
                        <img src="images/banner-shape-3.png" alt="image" />
                    </div>
                    <div className="shape-4">
                        <img src="images/banner-shape-4.png" alt="image" />
                    </div>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        {/* <div className="carousel-item active">
                            <img src="images/banner/banner_1.png" className="d-block w-100" alt="..." />
                        </div> */}
                        <div className="carousel-item active">
                            <img src="images/banner/banner_2.png" className="d-block w-100" alt="..." />
                        </div>
                        {/* <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div> */}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            




        </>
    )
}

export default SecNavbar