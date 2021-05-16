import './style/globals.scss'
import Intro from './pages/Intro'
import About from './pages/About'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Intro />
      <Header />
      <About />
    </div>
  );
}

export default App;
