export const About = () => {
    return (
        <div id='about' className="container-xxl py-5 scrolljump">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-end">
                                <img className="img-fluid bg-white w-100 mb-3 wow fadeIn" data-wow-delay="0.1s" src="img/auc-about-1.jpg" alt="" />
                                <img className="img-fluid bg-white w-50 wow fadeIn" data-wow-delay="0.2s" src="img/auc-about-3.jpg" alt="" />
                            </div>
                            <div className="col-6">
                                <img className="img-fluid bg-white w-50 mb-3 wow fadeIn" data-wow-delay="0.3s" src="img/auc-about-4.jpg" alt="" />
                                <img className="img-fluid bg-white w-100 wow fadeIn" data-wow-delay="0.4s" src="img/auc-about-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="section-title">
                            <p className="fs-5 fw-medium fst-italic text-primary">About Us</p>
                            <h1 className="display-6">Our success in sustainability and carbon-emission work</h1>
                        </div>
                        <div className="row g-3 mb-4">
                            <div className="col-sm-4">
                                <img className="img-fluid bg-white w-100" src="img/auc-about-5.jpg" alt="" />
                            </div>
                            <div className="col-sm-8">
                                <h5>Our campus is one of the most efficient campuses in MENA region</h5>
                                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit</p>
                            </div>
                        </div>
                        <div className="border-top mb-4" />
                        <div className="row g-3">
                            <div className="col-sm-8">
                                <h5>Our Research on Carbon-Emissions helped greatly</h5>
                                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit</p>
                            </div>
                            <div className="col-sm-4">
                                <img className="img-fluid bg-white w-100" src="img/auc-about-6.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
