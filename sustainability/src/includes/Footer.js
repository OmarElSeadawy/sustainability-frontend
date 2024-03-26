import { useEffect, useState } from 'react';

export const Footer = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        })
    }, [])

    function goTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-primary mb-4">Our Office</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3" />New Cairo AUC Campus</p>
                        <p className="mb-2"><i className="fa fa-phone-alt text-primary me-3" />+012 345 67890</p>
                        <p className="mb-2"><i className="fa fa-envelope text-primary me-3" />sustainability@aucegypt.edu</p>
                        <div className="d-flex pt-3">
                            <a className="btn btn-square btn-primary rounded-circle me-2" href="https://www.twitter.com"><i className="fab fa-twitter" /></a>
                            <a className="btn btn-square btn-primary rounded-circle me-2" href="https://www.facebook.com"><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-square btn-primary rounded-circle me-2" href="https://www.youtube.com"><i className="fab fa-youtube" /></a>
                            <a className="btn btn-square btn-primary rounded-circle me-2" href="https://www.linkedin.com"><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-primary mb-4">Quick Links</h4>
                        <a className="btn btn-link" href="aucegypt.edu">About Us</a>
                        <a className="btn btn-link" href="aucegypt.edu">Our Tool</a>
                        <a className="btn btn-link" href="aucegypt.edu">Contact Us</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-primary mb-4">Business Hours</h4>
                        <p className="mb-1">Monday - Friday</p>
                        <h6 className="text-light">09:00 am - 07:00 pm</h6>
                        <p className="mb-1">Saturday</p>
                        <h6 className="text-light">09:00 am - 12:00 pm</h6>
                        <p className="mb-1">Sunday</p>
                        <h6 className="text-light">Closed</h6>
                    </div>
                    {/* <div className="col-lg-3 col-md-6">
                        <h4 className="text-primary mb-4">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative w-100">
                            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div> */}
                </div>
            </div>
            {
                showTopBtn && (<div className='btn btn-square btn-primary rounded-circle me-2' onClick={goTop}><i className="fab fa-arrow-up" /></div>)
            }
        </div>
    );
}