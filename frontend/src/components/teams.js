import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const teamsData = [
    {
        id:1,
        image: require('../assets/images/teammembers/team1.jpg'),
        fbLink: 'https://www.facebook.com',
        insagramLink: 'https://www.instagram.com',
        LILink: 'https://www.linkedin.com',
        name: 'Dr. X',
        designation: 'Project Head',
        description: 'brief description'
    },
    {
        id:2,
        image: require('../assets/images/teammembers/team2.jpg'),
        fbLink: 'https://www.facebook.com',
        insagramLink: 'https://www.instagram.com',
        LILink: 'https://www.linkedin.com',
        name: 'Dr. Y',
        designation: 'Sustainability Expert',
        description: 'brief description'
    },
    {
        id:3,
        image: require('../assets/images/teammembers/team3.jpg'),
        fbLink: 'https://www.facebook.com',
        insagramLink: 'https://www.instagram.com',
        LILink: 'https://www.linkedin.com',
        name: 'Dr. Nouri Sakr',
        designation: 'Tech Consultant',
        description: 'brief description'
    },
    {
        id:4,
        image: require('../assets/images/teammembers/team4.jpg'),
        fbLink: 'https://www.facebook.com',
        insagramLink: 'https://www.instagram.com',
        LILink: 'https://www.linkedin.com',
        name: 'Omar ElSeadawy',
        designation: 'Developer',
        description: 'brief description'
    },
    {
        id:5,
        image: require('../assets/images/teammembers/team5.jpg'),
        fbLink: 'https://www.facebook.com',
        insagramLink: 'https://www.instagram.com',
        LILink: 'https://www.linkedin.com',
        name: 'Dr. Z',
        designation: 'Developer',
        description: 'brief description'
    }
]

export default function AppTeams() {
    return (
        <section id='teammembers' className='block teams-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Our Team</h2>
                    <div className='subtitle'> Our expert team members</div>
                </div>
                <Row>
                    {
                        teamsData.map(member => {
                            return (
                                <Col sm={3} key={member.id}>
                                    <div className='image'>
                                        <Image src={member.image} alt="Image"/>
                                        <div className='overlay'>
                                            <div className='socials'>
                                                <ul>
                                                    <li><a href={member.LILink} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                                                    <li><a href={member.fbLink} target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href={member.insagramLink} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <h3> {member.name} </h3>
                                        <span className='designation'> {member.designation} </span>
                                        <p> {member.description} </p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}