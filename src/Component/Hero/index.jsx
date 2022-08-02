import React from 'react';

export default function Hero() {
    let url = 'https://www.youtube.com/watch?v=tN5ZeV85uVY';
  return (
    <div>
        <section id="hero" className="d-flex align-items-center">
            <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
                <div className="row">
                    <div className="col-lg-8">
                        <h1>Welcome to <span>PizzaFood</span></h1>
                        <h2>Delivering great food for more than 18 years!</h2>

                        <div className="btns">
                            <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                        <a href={url} className="glightbox play-btn" target='__blank'> </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
