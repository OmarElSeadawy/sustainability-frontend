import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function AppContact() {
    return (
        <section id='contactus' className='block contact-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Please send us any feedback</h2>
                    <div className='subtitle'> Get connected with us</div>
                </div>
                <Form className='contact-form'>
                    <Row>
                        <Col sm={6}>
                            <Form.Control type="text" placeholder="Enter your full name" required/>
                        </Col>
                        <Col sm={6}>
                            <Form.Control type="email" placeholder="Enter your Email Address" required/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control as="textarea" placeholder="Enter your feedback here" required/>
                        </Col>
                    </Row>
                    <div className='btn-holder'>
                        <Button type="submit">
                            Submit Feedback
                        </Button>
                    </div>
                </Form>
            </Container>
            <Container fluid>
                <div className='contact-info'>
                    <ul>
                        <li>
                            <i className='fas fa-envelope'></i>
                            officeofsustainability@aucegypt.edu
                        </li>
                        <li>
                            <i className='fas fa-phone'></i>
                            +200000000000
                        </li>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            New Cairo Campus, Cairo, Egypt
                        </li>
                        
                    </ul>
                </div>
            </Container>
        </section>
    )
}