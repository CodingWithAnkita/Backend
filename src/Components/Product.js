import React from 'react'

function Product() {
  return (
    <div>


      <div className="container mt-5 " id="product">
        <div className="row">
          <div className="col-md-12">
            <h3 className="mt-5">Digital Panel Meters :</h3>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">
            <a href="/ammeter" className="line">
              <div className="card" id="Ammeter">
                <img src="./img/Ammeter.jpg" className="card-img-top" alt="..." />
                <div className="card-body bg-dark">
                  <p className="card-text fw-bold text-center text-light ">Ammeters <br /> Available in 4 Digit LED
                    as
                    well as LCD display with bargraph indication. Available in 4 different sizes to meet
                    various
                    application needs. Rated current 6.2A max</p>
                </div>
              </div>
            </a>

          </div>

          <div className="col-md-3">
            <a href="/voltmeter" className="line">
              <div class="card line">
                <img src="./img/voltmeter.jpg" className="card-img-top" alt="..." />
                <div className="card-body bg-dark">
                  <p className="card-text fw-bold text-center text-light line">Voltmeters <br /> Available in 3 & 4
                    Digit
                    LED
                    as well as LCD display with bargraph indication. Available in 4 different sizes to meet
                    various application needs. Can measure upto 516V max</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="/voltamp" id="Volt Amp Meter" className="line">
              <div className="card">
                <img src="./img/Volt Amp meter.jpg" className="card-img-top" alt="..." />
                <div className="card-body bg-dark">
                  <p className="card-text text-center fw-bold text-light">Volt Amp Meter <br /><br /> Amp meters are
                    available in 3 digit
                    dual color LED display with voltage and current measurement available in single meter.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="/indicator" className='line'></a>
            <div className="card line" id="Indicator">
              <img src="./img/indicator.jpg" className="card-img-top" alt="..." />
              <div className="card-body bg-dark">
                <p className="card-text text-center fw-bold text-light"> Indicator <br /> 4 Digits Dual Display
                  Process Indicator,
                  with Graphical Representation,4*DI, optional RS485 Communication 90 to 270V AC / DC supply,
                  CE & RoHS certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card" id="APFC Meter">
              <a href="/"><img src="./img/APFC.jpg" className="card-img-top" alt="..." /></a>

              <div className="card-body bg-dark">
                <p className="card-text fw-bold text-center text-light ">APFC Meter <br /> Automatic Power Factor
                  Controller Save energy, maintain power factor to avoid penalties. These APFC are single CT
                  with zero programming. Available in 2 Display options of LED and LCD</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card" id="MFM Meter">
              <img src="./img/mpf.jpg" class="card-img-top" alt="..." />
              <div className="card-body bg-dark">
                <p className="card-text fw-bold text-center text-light">MFM <br />Multifunction meters in LED and LCD
                  options for monitoring True RMS Parameters suitable for EMS applications Multifunction
                  meters that could dramatically reduce the wiring and installation time.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">

          </div>
          <div className="col-md-3">

          </div>
        </div>

        <div className="row mt-4">
          <div classNamen="col-md-12">
            <h3>SPM Card:</h3>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="card" id="MFM Meter">
                <img src="./img/input card.jpg" className="card-img-top" alt="..." />
                <div className="card-body bg-dark">
                  <p className="card-text fw-bold text-center text-light">I/O Card<br />Input Output cards by Gent
                    are designed for installation in EN54 Vigilon analogue addressable fire panels and
                    Network node.

                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>





    </div>
  )
}

export default Product