import groupimg from "../../assets/Group-p.png";
import Symbol from "../../assets/Symboll.png";
import direc from "../../assets/direct.png";

const banner = () => {
  return (
    <div style={{ paddingBottom:'50px'}} className="testimonial">
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="0"
            className="active caro-btnn"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            className="caro-btnn"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            className="caro-btnn"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <div className="banner-i">
              <div className="test-w-t">
                <h6>TESTIMONIALS</h6>

                <h2>What Our Client Say’s</h2>
                <img src={Symbol} alt="" className="Symboll my-3" />

                <p>
                  <p id="test-span-text">
                    There are many varation of paissages of Lorem as the Ipum
                    available but our majority have sufferied alterations in
                    some form, by our by injected hsumour randomised worids
                    which don't looks even slightly there as believable. If you
                    going to use a passage of Lorem Ipsum.
                  </p>
                </p>

                <div className="dir">
                  <img src={direc} alt="" className="direct" />
                  <div className="dir-d">
                    <h4>Aditi Mishra</h4>

                    <p style={{marginTop:'-7px'}} className='md'>Managing Director</p>
                  </div>
                </div>
              </div>
              <div className="">
                <img src={groupimg} alt="" className="caro-img-side" />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
          <div className="banner-i">
              <div className="test-w-t">
                <h6>TESTIMONIALS</h6>

                <h2>What Our Client Say’s</h2>
                <img src={Symbol} alt="" className="Symboll my-3" />

                <p>
                  <p id="test-span-text">
                    There are many varation of paissages of Lorem as the Ipum
                    available but our majority have sufferied alterations in
                    some form, by our by injected hsumour randomised worids
                    which don't looks even slightly there as believable. If you
                    going to use a passage of Lorem Ipsum.
                  </p>
                </p>

                <div className="dir">
                  <img src={direc} alt="" className="direct" />
                  <div className="dir-d">
                    <h4>Smruti Sourav</h4>

                    <p style={{marginTop:'-7px'}} className='md'>Managing Director</p>
                  </div>
                </div>
              </div>
              <div className="">
                <img src={groupimg} alt="" className="caro-img-side" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <div className="banner-i">
              <div className="test-w-t">
                <h6>TESTIMONIALS</h6>

                <h2>What Our Client Say’s</h2>
                <img src={Symbol} alt="" className="Symboll my-3" />

                <p>
                  <p id="test-span-text">
                    There are many varation of paissages of Lorem as the Ipum
                    available but our majority have sufferied alterations in
                    some form, by our by injected hsumour randomised worids
                    which don't looks even slightly there as believable. If you
                    going to use a passage of Lorem Ipsum.
                  </p>
                </p>

                <div className="dir">
                  <img src={direc} alt="" className="direct" />
                  <div className="dir-d">
                    <h4>Monalisha Rout</h4>

                    <p style={{marginTop:'-7px'}} className='md'>Managing Director</p>
                  </div>
                </div>
              </div>
              <div className="">
                <img src={groupimg} alt="" className="caro-img-side" />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ color: "black" }}
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default banner;
