import './style/globals.scss'
import Header from './components/Header'
import Intro from './pages/Intro'
import About from './pages/About'
import Portfolio from './pages/Portfolio'


function App() {
  return (
    <div className="App">
      <Intro />
      <Header />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
