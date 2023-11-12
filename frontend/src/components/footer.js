import { useEffect , useState} from 'react';
import Container from 'react-bootstrap/Container'

export default function AppFooter() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect( () => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn (false);
            }
        })
    },[])

    function goTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div>
            <Container fluid>
                <div className='copyright'>&copy; The American University in Cairo.</div>
                <div className='socials'>
                    <ul>
                        <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className='fab fa-facebook-f'></i></a></li>
                        <li><a href="https://www.Linkedin.com" target="_blank" rel="noreferrer"><i className='fab fa-linkedin-in'></i></a></li>
                        <li><a href="https://www.Instagram.com" target="_blank" rel="noreferrer"><i className='fab fa-instagram'></i></a></li>
                    </ul>
                </div>
                {
                    showTopBtn && (<div className='go-top' onClick={goTop}></div>)
                }
            </Container>
        </div>
    )
}