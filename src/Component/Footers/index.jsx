import React from 'react';

export default function Footers() {
  return (
    <>
        <footer id="footer">
            <div className="footer-top">
            <div className="container">
                <div className="row">

                <div className="col-lg-3 col-md-6">
                    <div className="footer-info">
                        <h3>FizzaFood</h3>
                        <p>
                            Jl. Satu - Satunya <br />
                            Blok A, PDG  <br />
                            <strong>Phone:</strong> +62 8777-154-1993<br />
                            <strong>Email:</strong> ahsan.tawil07@gmail.com<br />
                        </p>
                        <div className="social-links mt-3">
                            <a href="/#" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="/#" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="/#" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="/#" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="/#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                    <div className="col-lg-2 col-md-6 footer-links">
                        <h4>About PizzaFood</h4>
                        <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="/#">About ahsantawil</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/#">Blog</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Services</h4>
                        <ul>
                        <li><i className="bx bx-chevron-right"></i> <a href="/#">Menu</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/#">Specials</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 footer-newsletter">
                        <h4>Our Newsletter</h4>
                        <p>Find me on the track</p>
                        <form className='form'>
                            <input type="email" name="email" />
                            <input type="submit" value="Subscribe" />
                        </form>

                    </div>

                </div>
            </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; <strong><span>ahsantawil</span></strong>
                </div>
            </div>
        </footer>
    </>
  )
}
