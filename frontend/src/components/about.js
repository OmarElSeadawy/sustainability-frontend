import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/img-1.jpg';

export default function AppAbout () {
    // const now=60;
    return (
        <section id="objective" className="block about-block">
            <Container fluid>
                <div className='title-holder'>
                    <h2> Project Objective </h2>
                    <div className="subtitle"> Learn more about our project!</div>
                </div>
                <Row>
                    <Col sm={6}>
                        <Image src={img1}/>
                    </Col>

                    <Col sm={6}>
                        <p>
                            This project aims to create green university campuses by raising awareness on the current carbon-emissions used by your property. The analysis shall give insight on better ways to handle energy, organic food, gardening, landscaping and low-carbon transporations on your campus.
                        </p>
                        <p>
                            The goal is to reduce negative environmental impacts of buildings to enhance sustainability of the campus and protect the well-being and health of surrounding community and eco-systems.
                        </p>

                        <p>
                            Our tool will be created as part of this project to help students, sustainability coordinators and campus offices to realize sustainable project ideas. It will help in promoting sustainable food options, electricity and power usage, optimazation of heating and ventilations of buildings and reduce carbon-emissions of the structure.
                        </p>
                        {/* <div className='progress-block'>
                            <h4>Sustainability on Campus</h4>
                            <ProgressBar now={now} label={`${now}%`} visuallyHidden />
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}