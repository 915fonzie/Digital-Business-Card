import '../css/App.css'
import Info from './Info.jsx'
import About from './About.jsx'
import Interests from './Interests.jsx'
import Footer from './Footer.jsx'

function App() {

  return (
    <div className='app-container'>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
