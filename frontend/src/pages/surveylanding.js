
import AppHeader from '../components/header'
import Tiers from '../components/tiers'
import { Link } from 'react-router-dom';

export default function SurveyLanding() {
    return (
        <div classname='SurveyIntro'>
            <header id="header">
                <AppHeader />
            </header>
            <main>
                <Tiers />
            </main>

            <div className='btn-holder start-survey'>
                    <Link to='/' className='btn btn-primary'> Start Survey </Link>
            </div>
        </div>
    )
}

