import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import AppHeader from './components/header'
import AppHero from './components/hero'
import AppAbout from './components/about'
import AppServices from './components/services';
import AppTeams from './components/teams';
import AppContact from './components/contact';
import AppFooter from './components/footer';

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        <AppTeams />
        <AppContact />
      </main>
      <footer id='footer'>
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
