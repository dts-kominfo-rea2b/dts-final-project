import React from 'react';

export default function Main() {
  return (
    <>
    <main id="main">

      <section id="why-us" className="why-us">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Why Us</h2>
            <p>Why Choose Our Restaurant</p>
          </div>

          <div className="row">

            <div className="col-lg-4">
              <div className="box" data-aos="zoom-in" data-aos-delay="100">
                <span>01</span>
                <h4>Lorem Ipsum</h4>
                <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="zoom-in" data-aos-delay="200">
                <span>02</span>
                <h4>Repellat Nihil</h4>
                <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="zoom-in" data-aos-delay="300">
                <span>03</span>
                <h4> Ad ad velit qui</h4>
                <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="menu" className="menu section-bg">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Menu</h2>
            <p>Check Our Tasty Menu</p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="menu-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-starters">Starters</li>
                <li data-filter=".filter-salads">Salads</li>
                <li data-filter=".filter-specialty">Specialty</li>
              </ul>
            </div>
          </div>

          <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">

            <div className="col-lg-6 menu-item filter-starters">
              <img src="assets/img/menu/lobster-bisque.jpg" className="menu-img" alt="" />
              <div className="menu-content">
                <a href="/#">Lobster Bisque</a><span>$5.95</span>
              </div>
              <div className="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-specialty">
              <img src="assets/img/menu/bread-barrel.jpg" className="menu-img" alt="" />
              <div className="menu-content">
                <a href="/#">Bread Barrel</a><span>$6.95</span>
              </div>
              <div className="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-starters">
              <img src="assets/img/menu/cake.jpg" className="menu-img" alt="" />
              <div className="menu-content">
                <a href="/#">Crab Cake</a><span>$7.95</span>
              </div>
              <div className="menu-ingredients">
                A delicate crab cake served on a toasted roll with lettuce and tartar sauce
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-salads">
              <img src="assets/img/menu/caesar.jpg" className="menu-img" alt="" />
              <div className="menu-content">
                <a href="/#">Caesar Selections</a><span>$8.95</span>
              </div>
              <div className="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-specialty">
              <img src="assets/img/menu/tuscan-grilled.jpg" className="menu-img" alt="" />
              <div className="menu-content">
                <a href="/#">Tuscan Grilled</a><span>$9.95</span>
              </div>
              <div className="menu-ingredients">
                Grilled chicken with provolone, artichoke hearts, and roasted red pesto
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-starters">
              <img src="assets/img/menu/mozzarella.jpg" className="menu-img" alt="" />
              <div className="menu-content">
                <a href="/#">Mozzarella Stick</a><span>$4.95</span>
              </div>
              <div className="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-salads">
              <img src="assets/img/menu/greek-salad.jpg" className="menu-img" alt="" />
              <div className="menu-content">
                <a href="/#">Greek Salad</a><span>$9.95</span>
              </div>
              <div className="menu-ingredients">
                Fresh spinach, crisp romaine, tomatoes, and Greek olives
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-salads">
              <img src="assets/img/menu/spinach-salad.jpg" className="menu-img" alt="" />
              <div className="menu-content">
                <a href="/#">Spinach Salad</a><span>$9.95</span>
              </div>
              <div className="menu-ingredients">
                Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-specialty">
              <img src="assets/img/menu/lobster-roll.jpg" className="menu-img" alt="" />
              <div className="menu-content">
                <a href="/#">Lobster Roll</a><span>$12.95</span>
              </div>
              <div className="menu-ingredients">
                Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="specials" className="specials">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Specials</h2>
            <p>Check Our Specials</p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Modi sit est</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Unde praesentium sed</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Pariatur explicabo vel</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Nostrum qui quasi</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Iusto ut expedita aut</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Architecto ut aperiam autem id</h3>
                      <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                      <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/specials-1.png" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Et blanditiis nemo veritatis excepturi</h3>
                      <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                      <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/specials-2.png" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                      <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                      <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/specials-3.png" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                      <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                      <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/specials-4.png" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-5">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                      <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                      <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/specials-5.png" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>

    </>
  )
}
