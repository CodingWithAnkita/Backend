import React from 'react'

function Footer() {
    return (
        <div>

            <div id="footer " className="container-fluid bg-dark  ">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-3 mt-5">
                            <h5 className="fw-bold text-light  fst-italic">About Us</h5>
                            <p className="text-light mt-4">The company has its own research and development (R & D) setup.
                                Here we design and develop new products based on the need of the market.
                                Since the formation of the company, our R & D lab has provided many break-through solutions
                                to
                                the industry.</p>
                            <div className="text  ms-5">
                                <i className="fa-brands fs fa-facebook p-1"></i>
                                <i className="fa-brands fs fa-linkedin p-1"></i>
                                <i className="fa-brands fs fa-instagram p-1"></i>
                                <i className="fa-brands fs fa-youtube p-1"></i>
                            </div>

                            <a target='_blank' href="https://www.facebook.com/profile.php?id=100063876886966"><i
                                className="fa-brands fs fa-facebook p-1" style={{color: '#f1f2f3'}}></i></a>
                            <a href=""> <i className=" fs fa-brands fa-linkedin p-1" style={{color: '#fafcff'}}></i></a>
                            <a target='_blank' href="https://youtube.com/@ennovatechnology1286"><i className="fs fa-brands fa-youtube p-1"
                                style={{color: '#f7f7f7'}}></i></a>
                            <a target='_blank' href="https://instagram.com/ennova_technology?igshid=YmMyMTA2M2Y="><i
                                className=" fs fa-brands fa-instagram p-1" style={{color:'#fafcff'}}></i></a>

                        </div>
                        <div className="col-md-3 mt-5">
                            <h5 className="fw-bold text-light text-center fst-italic">Recent News</h5>
                            <div className="d-flex flex-column mt-4 ms-5">
                                <a href="/" className="text-light text-decoration-none mt-1 "><i
                                    className="fa-solid fa-angle-right fa-sm p-1" style={{color: '#fafafa'}}></i> Sem Ports
                                    Mollis
                                    Parturient</a>
                                <a href="/" className="text-light text-decoration-none mt-2  "><i
                                    className="fa-solid fa-angle-right fa-sm p-1" style={{color: '#fafafa'}}></i> Nullam Lorem
                                    Mattis Purus</a>
                                <a href="/" className="text-light text-decoration-none mt-2 "><i
                                    className="fa-solid fa-angle-right fa-sm p-1" style={{color: '#fafafa'}}></i> Nibh Sem
                                    Ullamcorper</a>
                                <a href="/" className="text-light text-decoration-none mt-2 "><i
                                    className="fa-solid fa-angle-right fa-sm p-1" style={{color: '#fafafa'}}></i> Donec Luctus
                                    imper diet</a>
                                <a href="/" className="text-light text-decoration-none mt-2"><i
                                    className="fa-solid fa-angle-right fa-sm p-1" style={{color: '#fafafa'}}></i> Magna pars
                                    studiorum</a>
                            </div>
                        </div>
                        <div className="col-md-3 mt-5">
                            <h5 className="fw-bold text-light text-center fst-italic ">Contact Info</h5>
                            <div className="ms-5">
                                <p className="text-light text-center mt-4"> ENNOVA Technology,Sangli Behind Indian Oil Petrol
                                    pump,Kupwad MIDC
                                    </p>
                                    <p className="text-light text-center me-4"> <i className="fa-solid fa-phone "
                                        style={{color: '#f1f4f9'}}></i> 8830458682</p>
                                    <p className="text-light text-center me-4"><i className="fa-solid fa-phone" style={{color: '#f0f2f4'}}></i>
                                        7972911543 </p>
                                    <p className="text-light text-center me-3 "><i className="fa-solid fa-envelope "
                                        style={{color: '#f7f9fd'}}></i>purchase.ennovatech@gmail.com</p>
                            </div>


                        </div>
                        <div className="col-md-3 mt-5">
                            <h5 className="fw-bold text-light text-center fst-italic">Business Overview</h5>
                            <div className=" text d-flex ms-5 flex-column mt-4 ">
                                <a href="/" className="text-light p-1 text-decoration-none"><i
                                    className="fa-solid fa-angle-right fa-sm p-1" style={{color:'#fff'}}></i> Attorneys</a>
                                <a href="/" className="text-light p-1 text-decoration-none"><i
                                    className="fa-solid fa-angle-right fa-sm p-1" style={{color:'#fff'}}></i> Practise
                                    Area</a>
                                <a href="/" className="text-light p-1 text-decoration-none"><i
                                    className="fa-solid fa-angle-right fa-sm p-1" style={{color:'#fff'}}></i> Careers</a>
                                <a href="/" className="text-light p-1 text-decoration-none"><i
                                    className="fa-solid fa-angle-right fa-sm p-1" style={{color:'#fff'}}></i> Honors &
                                    Awards</a>
                                <a href="/" className="text-light p-1 text-decoration-none"> <i
                                    className="fa-solid fa-angle-right fa-sm p-1" style={{color:'#fff'}}></i> Q & A</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer