import './style/globals.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './pages/Intro'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'


function App() {
  return (
    <div className="App">
      <Intro />
      <Header />
      <div className='underHeader'>
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
