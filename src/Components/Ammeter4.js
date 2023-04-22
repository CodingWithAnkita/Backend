import React from 'react'

function Ammeter4() {
    return (
        <div>

            <div className="container">
                <div className="row  mt-5">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4 mt-5">
                        <img height="110%" width="130%" src="./img/DIGITAL AMMETER_.jpg" alt="" />
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
                <div className="row mt-5 ms-4">
                    <div className="col-md-4"></div>
                    <div className="col-md-5 card1">
                        <h2 className="text-success">  Model:ET3A</h2>
                        <h6 className="fs-5"><b>• 3 phase 4 Wire, 3 phase 3 Wire systems. <br />
                            • Dimensions (H x W x D) mm: 96 x96 x 50 <br />
                            • Mounting: Panel mount <br />
                            • Range: 50 mA- 5000Amp <br />
                            • Accuracy : ± 0.5% of F.S <br />
                            • Display: 4 digit 7 segment LED display <br />
                            • Power Supply: 230 V AC ± 20% (50 Hz)</b>
                        </h6>

                        <div className="sheet">
                            <button type="button" class="btn btn-dark btn1">Buy</button>

                            <p><a className="link-opacity-100" href="./sheet1.html">Sheet</a></p>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>

        </div>
    )
}

export default Ammeter4