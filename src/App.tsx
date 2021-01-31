import Chakra from './Chakra'
import Navbar from './components/Navbar'
import Router from './Router'

function App() {
  return (
    <Chakra>
      <Router>
        <Navbar />
      </Router>
    </Chakra>
  )
}

export default App
