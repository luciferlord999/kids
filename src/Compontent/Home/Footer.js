import React from 'react'

function Footer() {
    return (
        <>
            <div className="footer-images">
                <div
                    id="rainbow"
                    className="animated activate bounceInLeft"
                    data-fx="bounceInLeft"
                >
              
                </div>
                <div id="wave3" style={{ backgroundPosition: "-74.2px 0px" }} />                
                <div id="wave2" style={{ backgroundPosition: "72px 0px" }} />
                <div id="boat" className="animated activate fadeInUp" data-fx="fadeInUp">
                    <img src="images/boat.png" alt="boat image" />
                </div>
                <div id="wave1" style={{ backgroundPosition: "-67px 0px" }} />
            </div>
            <footer className="type1">
                <div id="fish1" />
                <div id="fish2" />
                <div className="container">
                    <div className="row">
                       
                      
                    </div>
                    <div className="row">
                        <div className="col-xs-12 copyright">
                            © Copyright 2014 -{" "}
                            <a href="http://outsourcing.createit.pl/">Digit</a>
                        </div>
                    </div>
                </div>
            </footer>



        </>
    )
}

export default Footer