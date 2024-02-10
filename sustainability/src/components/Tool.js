import { useNavigate } from "react-router-dom";

export const Tool = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/survey';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(path);
    }

    return (
        <>
            <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s" style={{ height: 260 }}>
                <div className="container text-center py-5">
                    <h1 className="display-2 text-dark mb-4 animated slideInDown">AUC Carbon Data Hub Survey</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item text-dark" aria-current="page"><a href="#">Tool</a></li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container-fluid product py-2">
                <div className="container py-5">
                    <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '900px' }}>
                        <p className="fs-3 fw-medium fst-italic text-primary">Introduction</p>
                        <p className="fs-4 text-body">In today's world, universities are increasingly recognizing the importance of sustainable practices and carbon emissions reduction. Campuses are large and diverse environments, encompassing various activities that contribute to their carbon footprint. Understanding and mitigating this impact is a complex but essential task </p>
                    </div>
                </div>

                <div className="row justify-content-center" style={{marginTop: -35}}>
                    <div className="col-lg-12 text-center">
                        <p className="fs-3 fw-medium fst-italic text-body">Start using our tool</p>
                        <button onClick={routeChange} className="btn btn-primary rounded-pill py-3 px-5 animated zoomIn"> Click Here</button>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid product2 py-2">
                <div className="container py-5">
                    <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '900px' }}>
                        <p className="fs-3 fw-medium fst-italic text-primary">Our Tool</p>
                        <p className="fs-4 text-body">The Carbon Data Hub Research Hub project, affiliated with the American University in Cairo (AUC), aims to address the growing need for a user-friendly and comprehensive carbon emissions estimation tool tailored to the unique challenges faced by university sustainability offices and administrations. The proposed tool, Carbon U, is designed to empower non-technical experts to estimate campus carbon emissions effectively. </p>
                    </div>
                </div>
            </div> */}
        </>

    );
}