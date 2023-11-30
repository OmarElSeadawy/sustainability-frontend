export const Carousel = () => {
    return (
            <div className="container-fluid px-0 mb-5">
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" height={850} src="img/auc-carousel-1.jpg" alt="Image" style={{opacity:0.3}}/>
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-7 text-center">
                                            <p className="fs-4 text-white animated zoomIn">Welcome to <strong className="text-dark">The American University in Cairo</strong></p>
                                            <h1 className="display-1 text-dark mb-4 animated zoomIn">Our Green Campus</h1>
                                            <a href="https://www.aucegypt.edu" target="_blank" className="btn btn-light rounded-pill py-3 px-5 animated zoomIn">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" height={850} src="img/auc-carousel-2.jpg" alt="Image" style={{opacity:0.3}}/>
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-7 text-center">
                                            <p className="fs-4 text-white animated zoomIn">Our focus on <strong className="text-dark">Sustainability</strong></p>
                                            <h1 className="display-1 text-dark mb-4 animated zoomIn">Keeping our campus clean and green</h1>
                                            <a href="https://www.aucegypt.edu/sustainability/office" target="_blank" className="btn btn-light rounded-pill py-3 px-5 animated zoomIn">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
    );
}
