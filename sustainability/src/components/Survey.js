import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});

    const steps = ['Consent', 'General Knowledge', 'Phase1', 'Phase2', 'Phase3', 'Phase4'];

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

    const Consent = ({ formData, setFormData, next }) => {

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
                    <p className="fs-5 text-body">I consent to "---------------------------------------------------------------" </p>
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
                    (<Consent formData={formData} setFormData={setFormData} next={next} />) :
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