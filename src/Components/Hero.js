import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Hero() {
  return (
    <div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/carousal2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>


            <h2 className="fw-bold text-light fst-italic fs-2">Welcome to </h2>
            <h2 className="fw-bold text-light fs-1">ENNOVA TECHNOLOGY</h2>
            <p className="text-warning fs-5">Your Problem Our Smart Solution</p>
            <button type="button" class="btn btn-danger btn-lg">Learn More</button>


          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/carousal1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2 class="fw-bold text-light fs-1 fst-italic">Manufactures All Types of Control Panels</h2>
            <p class="text-warning fs-5 fst-italic">There are numerous types of industrial control panels
              used
              to operate the wide range of equipment found in manufacturing facilities across the globe.
              Each of these control panel types contain different components that drive or execute
              programmed functions such as turning equipment on or off, controlling motor speed, directing
              various movements, opening or closing valves, and many other operations.</p>
            <button class="btn text-danger fs-5 fst-italic">Learn More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/carousal3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2 class="fw-bold text-light fs-1 fst-italic">Industrial Data Analytic Solution</h2>
            <p class="text-warning fs-4 fst-italic">Data analytics enables information technology companies
              to automate production management</p>
            <button class="btn text-danger fs-5 fst-italic">Learn More</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Hero