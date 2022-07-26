import React from 'react';
import Footers from '../Footers';
import Navbar from '../Navbar';
import TopBar from '../topBar';

export default function Details() {
  return (
    <>
        <TopBar />
        <Navbar />
            <main id="main">
                <section class="breadcrumbs">
                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center">
                        <h2>Details food</h2>
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li>Details</li>
                        </ol>
                        </div>

                    </div>
                </section>
                
                <section id="specials" class="specials">
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">
                            <h2>Specials</h2>
                            <p>Check Our Specials</p>
                        </div>

                        <div class="row" data-aos="fade-up" data-aos-delay="100">
                            <div class="col-lg-3">
                                <ul class="nav nav-tabs flex-column">
                                    <li class="nav-item">
                                        <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">Modi sit est</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-9 mt-4 mt-lg-0">
                                <div class="tab-content">
                                    <div class="tab-pane active show" id="tab-1">
                                        <div class="row">
                                        <div class="col-lg-8 details order-2 order-lg-1">
                                            <h3>Architecto ut aperiam autem id</h3>
                                            <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                            <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                                        </div>
                                        <div class="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="assets/img/specials-1.png" alt="" class="img-fluid" />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        <Footers />
    </>
  )
}
