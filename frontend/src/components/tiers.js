import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

// const TierData = [
//     {
//         id: 1,
//         tier: "01",
//         description: "Data already gathered through CFP reports (Annually) - Can be entered directly."
//     },
//     {
//         id: 2,
//         tier: "02",
//         description: "Data is not gathered, but can be estimated using secondary data units for consumption such as (Kwh/ L/h / KMs / ...)"
//     },
//     {
//         id: 3,
//         tier: "03",
//         description: "Data is not gathered, and secondary data units are not available, so basic assumptions will be made based on different elements such as (Number of buildings / Type of HVAC system / Number of users / ...)"
//     }
// ]

export default function Tiers() {
    return (
        <section id='surveyintro' className='block surveyintro-block'>
             <Container fluid>
                <div className='title-holder'>
                    <h2> Welcome to our Carbon-emission Survey</h2>
                    <div className='subtitle'> Write introduction to survey here</div>
                </div>
                <Table striped bordered hover className='tiertable' >
                    <thead>
                        <tr>
                            <th>Tier 01</th>
                            <th>Tier 02</th>
                            <th>Tier 03</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Data already gathered through CFP reports (Annually) - Can be entered directly.</td>
                            <td>Data is not gathered, but can be estimated using secondary data units for consumption such as (Kwh/ L/h / KMs / ...)</td>
                            <td>Data is not gathered, and secondary data units are not available, so basic assumptions will be made based on different elements such as (Number of buildings / Type of HVAC system / Number of users / ...)</td>
                        </tr>
                    </tbody>
                </Table>
                {/* <Row>
                    {
                        TierData.map(tiers => {
                            return(
                                <Col sm={4}>    
                                    <div className='heading'>
                                        <h2 className='tiers'> Tier {tiers.tier}</h2>
                                    </div>
                                    <div className='content'>
                                        <p>
                                            {tiers.description}
                                        </p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row> */}
            </Container>
        </section>
    )
}