import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});

    const steps = ['Introduction', 'Campus Information', 'Energy', 'Transportation', 'Water Consumption', 'Solid Water Disposal', 'Paper Use', 'Refrigerants', 'Landscaping', 'End'];

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props} style={{ backgroundColor: '#f5f5f5', color: 'black', borderRadius: '15px', padding: '10px', fontSize: '12px', ...props.style }}>
            This is a tooltip.
        </Tooltip>
    );

    const next = () => setCurrentStep(currentStep + 1);
    const previous = () => setCurrentStep(currentStep - 1);


    const ProgressBar = ({ steps, currentStep, setCurrentStep }) => {
        return (
            <div className='progress-bar' >
                <ul className="nav noprint nav-pills progress" id="pills-tab" role="tablist" style={{ height: 35, borderRadius: 0 }}>
                    {steps.map((step, index) => (
                        <div className="progress-step" role='presentation' key={index}>
                            <button
                                className={`nav-link ${currentStep === index ? 'active' : ''}`}
                                onClick={(event) => {
                                    event.preventDefault();
                                    setCurrentStep(index);
                                }}
                                style={{ cursor: 'pointer' }}
                                id={`pills-${step}-tab`}
                            >
                                {step}
                            </button>
                        </div>
                    ))}
                </ul>
            </div>
        );
    }

    const Introduction = ({ formData, setFormData, next }) => {

        const [validated, setValidated] = useState(false);

        const handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            else {
                next();
            }

            setValidated(true);
        };

        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        return (

            <>
                <div className="text-center" style={{ paddingTop: 55, width: 1200 }}>
                    <p className="fs-5 text-body">This is an introduction to the survey. What information will be required and what will you be filling throughout the different sections. This section will contain generic information and explanatation to the survey. Next section 1 will have X, section 2 will have Y and sectiond 3 will have Z. </p>
                    <p className="fs-5 text-body">The table below explains the different tiers, these tiers will help provide a confidence level on the output based on the input data.</p>
                    <Table bordered>
                        <tbody>
                            <tr>
                                <td className="bg-light" style={{ width: '100px' }}>Tier 01</td>
                                <td>Data already gathered through CFP reports (Annually) - Can be entered directly.</td>
                            </tr>
                            <tr>
                                <td className="bg-light" style={{ width: '100px' }}>Tier 02</td>
                                <td>Data is not gathered, but can be estimated using secondary data units for consumption such as (Kwh/ L/h / KMs / ...)</td>
                            </tr>
                            <tr>
                                <td className="bg-light" style={{ width: '100px' }}>Tier 03</td>
                                <td>Data is not gathered, and secondary data units are not available, so basic assumptions will be made based on different elements such as (Number of buildings / Type of HVAC system / Number of users / ...)</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className='container text-center' style={{ marginTop: '75px' }}>
                    <p className="fs-5 text-body fst-italic">I consent to "---------------------------------------------------------------" </p>
                </div>
                <div className="col-lg-6">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    name="firstName"
                                    required
                                    type="text"
                                    placeholder="First name"
                                    pattern="[a-zA-Z\s]*"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid"> Please provide a valid name. </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    name="lastName"
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    pattern="[a-zA-Z\s]*"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid"> Please provide a valid name. </Form.Control.Feedback>
                            </Form.Group>
                            {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Username</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group> */}
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    name="Title"
                                    required
                                    type="text"
                                    placeholder="Title"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="8" controlId="validationCustom02">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    name="Email"
                                    required
                                    type="email"
                                    placeholder="Email"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid"> Please provide a valid email. </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom03">
                                <Form.Label>Institution <i className="fa fa-university" /></Form.Label>
                                <Form.Control name='institution' type="text" placeholder="Institution" required pattern="[a-zA-Z\s]*" />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Institution.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom03">
                                <Form.Label>City</Form.Label>
                                <Form.Control name='city' type="text" placeholder="City" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom04">
                                <Form.Label>State</Form.Label>
                                <Form.Control name='state' type="text" placeholder="State" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom05">
                                <Form.Label>Country <i className="fa fa-globe" /></Form.Label>
                                <Form.Control name='country' type="text" placeholder="Country" required pattern="[a-zA-Z\s]*" />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Country.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button type="submit">Start Survey</Button>
                    </Form>
                </div>
            </>
        );
    };

    const Phase1 = ({ step, formData, setFormData, next, previous }) => {
        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            next();
        };


        const [numBoxes, setNumBoxes] = useState(1);

        const handleSelectChange = (e) => {
            setNumBoxes(e.target.value);
        };

        return (
            <Container style={{ maxWidth: 1200, paddingTop: 40 }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="question1" className="mb-4 border-bottom border-3 border-dark">
                        <Form.Label>
                            <Row>
                                <Col sm={12}>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Please add each campus name, location and area.
                                            </Tooltip>}>
                                        <p className="fs-5 fw-normal text-body">1. What are the Campus Boundaries?<i className="fa fa-info-circle" style={{paddingLeft:5}}/></p>
                                    </OverlayTrigger>                                    
                                    <p className="fs-6 fw-light text-body">(First Please Specify how many campuses do you operate?)</p>
                                </Col>
                                <Col sm={2}>
                                    <Form.Select aria-label="Select number of text boxes" onChange={handleSelectChange}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form.Label>
                        {Array.from({ length: numBoxes }, (_, i) => (
                            <Row key={i} style={{ paddingBottom: 4 }}>
                                <Col sm={4}>
                                    <Form.Control type="text" name={`question1-${i}-name`} placeholder="Campus Name" onChange={handleChange} />
                                </Col>
                                <Col sm={4}>
                                    <Form.Control type="text" name={`question1-${i}-location`} placeholder="Campus Location" onChange={handleChange} />
                                </Col>
                                <Col sm={4}>
                                    <Form.Control type="text" name={`question1-${i}-area`} placeholder="Campus Area" onChange={handleChange} />
                                </Col>
                            </Row>
                        ))}
                    </Form.Group>
                    <Form.Group controlId="question2" className="mb-4 border-bottom border-3 border-dark">
                        <Form.Label>
                            <strong><em>2. Question 2</em></strong>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <Button variant="secondary">?</Button>
                            </OverlayTrigger>
                        </Form.Label>
                        <Form.Control type="text" name="question2" onChange={handleChange} />
                    </Form.Group>
                    <h2>Another Subtitle</h2>
                    <Form.Group controlId="question3" className="mb-4 border-bottom border-3 border-dark">
                        <Form.Label>
                            <strong><em>3. Question 3</em></strong>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <Button variant="secondary">?</Button>
                            </OverlayTrigger>
                        </Form.Label>
                        <Form.Control type="text" name="question3" onChange={handleChange} />
                    </Form.Group>
                    <Row className="justify-content-end">
                        <Button type="button" onClick={previous}>Previous</Button>
                        <Button type="submit">Next</Button>
                    </Row>
                </Form>
            </Container >
        );
    };

    const Phase2 = ({ step, formData, setFormData, next, previous }) => {
        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            next();
        };

        return (
            <form className="form-group" onSubmit={handleSubmit}>
                <label>Question 1</label>
                <input type="text" name="question1" className="form-control" onChange={handleChange} />
                <label>Question 2</label>
                <input type="text" name="question2" className="form-control" onChange={handleChange} />
                <label>Question 3</label>
                <input type="text" name="question3" className="form-control" onChange={handleChange} />
                <button type="button" className="btn btn-primary" onClick={previous}>Previous</button>
                <button type="submit" className="btn btn-primary">Next</button>
            </form>
        );
    };
    const Phase3 = ({ step, formData, setFormData, next, previous }) => {
        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            next();
        };

        return (
            <form className="form-group" onSubmit={handleSubmit}>
                <label>Question 1</label>
                <input type="text" name="question1" className="form-control" onChange={handleChange} />
                <label>Question 2</label>
                <input type="text" name="question2" className="form-control" onChange={handleChange} />
                <label>Question 3</label>
                <input type="text" name="question3" className="form-control" onChange={handleChange} />
                <button type="button" className="btn btn-primary" onClick={previous}>Previous</button>
                <button type="submit" className="btn btn-primary">Next</button>
            </form>
        );
    };
    const Phase4 = ({ step, formData, setFormData, next, previous }) => {
        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            next();
        };

        return (
            <form className="form-group" onSubmit={handleSubmit}>
                <label>Question 1</label>
                <input type="text" name="question1" className="form-control" onChange={handleChange} />
                <label>Question 2</label>
                <input type="text" name="question2" className="form-control" onChange={handleChange} />
                <label>Question 3</label>
                <input type="text" name="question3" className="form-control" onChange={handleChange} />
                <button type="button" className="btn btn-primary" onClick={previous}>Previous</button>
                <button type="submit" className="btn btn-primary">Next</button>
            </form>
        );
    };



    return (
        <div className="container">
            <ProgressBar steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
            <div className="row justify-content-center">
                {currentStep === 0 ?
                    (<Introduction formData={formData} setFormData={setFormData} next={next} />) :
                    currentStep === 1 ?
                        (<Phase1 formData={formData} setFormData={setFormData} next={next} previous={previous} />) :
                        currentStep === 2 ?
                            (<Phase2 formData={formData} setFormData={setFormData} next={next} previous={previous} />) :
                            currentStep === 3 ?
                                (<Phase3 formData={formData} setFormData={setFormData} next={next} previous={previous} />) :
                                currentStep === 4 ?
                                    (<Phase4 formData={formData} setFormData={setFormData} next={next} previous={previous} />) :
                                    (<h1>Thank you for your submission</h1>)
                }
            </div>
        </div>
    );
};