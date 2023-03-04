import { Route, Routes, useLocation } from "react-router-dom"
import { About, Contact, Main, Portfolio } from "./pages"
import { Motion, NavBar } from './components'

function App() {

  const location = useLocation()

  return (
    <div className="font-poppins gradient-background">
      <NavBar />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Motion>
                                  <Main />
                                </Motion>}/>
        <Route path='/about' element={<Motion>
                                        <About />
                                      </Motion>} />
        <Route path='/portfolio' element={<Motion>
                                            <Portfolio />
                                          </Motion>} />
        <Route path='/contact' element={<Motion>
                                          <Contact />
                                        </Motion>} />
      </Routes>
    </div>
  )
}

export default App
