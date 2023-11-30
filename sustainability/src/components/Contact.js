export const Contact = () => {
    return (
        <>
            <div className="border-top" />
            <div id='contact' className="container-xxl contact py-5 scrolljump">
                <div className="container">
                    <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                        <p className="fs-5 fw-medium fst-italic text-primary">Contact Us</p>
                        <h1 className="display-6">Contact us right now</h1>
                    </div>

                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h3 className="mb-4">Send us Feedback?</h3>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '120px' }} defaultValue={""} />
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <iframe className="w-100 rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.6148947550573!2d31.497899276174007!3d30.019212419764738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458225af8f916d1%3A0x75e8bf3141e205c7!2sThe%20American%20University%20in%20Cairo!5e0!3m2!1sen!2seg!4v1700601276892!5m2!1sen!2seg" frameBorder={0} style={{ height: '100%', minHeight: '300px', border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-lg-8">
                            <p className="text-center mb-5"></p>
                            <div className="row g-5">
                                <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="btn-square mx-auto mb-3">
                                        <i className="fa fa-envelope fa-2x text-white" />
                                    </div>
                                    <p className="mb-2">officeofsustainability@aucegypt.edu</p>
                                </div>
                                <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="btn-square mx-auto mb-3">
                                        <i className="fa fa-phone fa-2x text-white" />
                                    </div>
                                    <p className="mb-2">+012 345 67890</p>
                                    <p className="mb-0">+202 3456 7890</p>
                                </div>
                                <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="btn-square mx-auto mb-3">
                                        <i className="fa fa-map-marker-alt fa-2x text-white" />
                                    </div>
                                    <p className="mb-2">AUC New Campus</p>
                                    <p className="mb-0">New Cairo, Egypt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}