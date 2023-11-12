import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const servicesData = [
    {
        id: 1,
        icon: 'fas fa-clone',
        title: 'Our tool',
        description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet '
    },
    {
        id: 2   ,
        icon: 'fas fa-snowflake',
        title: 'Our tool',
        description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet '
    },
    {
        id: 3,
        icon: 'fa-brands fa-instagram',
        title: 'Our tool',
        description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet '
    }
]

export default function AppServices() {
    return (
        <section id="services" className='block services-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2> Our Services </h2>
                    <div className='subtitle'> services provided </div>
                </div>
                <Row>
                    {
                        servicesData.map(services => {
                            return (
                                <Col sm={4} className='holder' key={services.id}>
                                    <div className='icon'>
                                        <i className={services.icon}></i>
                                    </div>
                                        <h3> {services.title} </h3>
                                        <p> {services.description} </p>    
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}