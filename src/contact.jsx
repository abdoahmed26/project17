
export default function Contact(){
    return (
        <div className="py-4 bg-dark" id="contact">
            <div className="container">
                <div className="row text-white">
                    <div className="col-lg-4 col-md-4 d-flex justify-content-center justify-content-md-start">
                        <div className="box mb-4 mb-md-0">
                            <h3 className="fw-normal mb-3">GET IN TOUCH</h3>
                            <div className="d-flex align-items-center mb-2">
                                <i class="fa-solid fa-envelope me-2 fs-5"></i>
                                kr12@hotmail.com
                            </div>
                            <div className="d-flex align-items-center">
                            <i class="fa-solid fa-circle-user me-2 fs-5"></i>
                                717-555-1234
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mt-3 mt-md-0">
                        <div className="box d-flex align-items-center justify-content-center h-100">
                            <div>
                                <a href="#/" className="py-2 pt-1 px-4 border text-white text-decoration-none">
                                    Contact Me
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mt-5 mt-md-0">
                        <div className="box d-flex align-items-center justify-content-center justify-content-md-end h-100">
                            <div>
                                <div className="d-flex justify-content-center justify-content-md-end mb-3">
                                    <i class="fa-brands fa-linkedin me-3 fs-4"></i>
                                    <i class="fa-brands fa-facebook me-3 fs-4"></i>
                                    <i class="fa-brands fa-twitter fs-4"></i>
                                </div>
                                <p className="m-0">Copyright &copy; 2023 Abdo Ahmed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}