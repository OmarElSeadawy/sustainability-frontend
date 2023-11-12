import Carousel from 'react-bootstrap/Carousel';

var heroData = [
    {
        id: 1,
        image: require('../assets/images/auc-1.jpg'),
        title: 'Welcome to the AUC Sustainability Program',
        description: 'This webtool will be your go-to for carbon emission measurements and analytics',
        link: 'https://aucegypt.edu',
        btntext: 'Check out AUC Website'
    },
    {
        id: 2,
        image: require('../assets/images/auc-2.jpg'),
        title: 'AUC Focuses on sustainability reports and ensures green initiatives',
        description: 'Keeping up with green initiatives and aiming to always improve the environment',
        link: 'https://www.aucegypt.edu/sustainability',
        btntext: 'Check out our Sustainability office'
    },
    {
        id: 3,
        image: require('../assets/images/auc-3.jpg'),
        title: 'AUC ripple-effect',
        description: 'The analytics and reports done by sustainability experts will not only aim to improve AUC but rather the whole city and go even bigger',
        link: 'https://www.aucegypt.edu/sustainability',
        btntext: 'Checkout our Sustainability office'
    }
]

export default function AppHero()
{
    return (
        <section id="home" className='hero-block'>
            <Carousel>
                {
                    heroData.map(hero => {
                        return (
                            <Carousel.Item key={hero.id}>
                                <img
                                    className="d-block w-100"
                                    src={hero.image}
                                    alt={"Slide " + hero.id}
                                />
                                <Carousel.Caption>
                                    <h3>{hero.title}</h3>
                                    <p>{hero.description}</p>
                                    <a className='btn btn-primary' href={hero.link} target="_blank" rel="noreferrer"> {hero.btntext} <i className="fas fa-chevron-right"></i></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })
                }
            </Carousel>
        </section>
    );
}