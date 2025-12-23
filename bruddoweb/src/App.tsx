import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Snowfall from 'react-snowfall'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Navigation from './components/Navigation'

const MainLayout = () =>
  (() => {
    const now = new Date()
    const month = now.getMonth() + 1
    const day = now.getDate()
    const showSnow = month === 12 && (day === 23 || day === 24 || day === 25)

    return (
      <div className='min-h-screen fullpage-animated-gradient'>
        <Navigation />
        {showSnow && (
          <div className='pointer-events-none fixed inset-0 z-[9999]'>
            <Snowfall />
          </div>
        )}
        <Outlet />
      </div>
    )
  })()

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/terms' element={<Terms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
