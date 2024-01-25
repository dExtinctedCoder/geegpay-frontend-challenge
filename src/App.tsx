import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages'
import Errorpage from './pages/404'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard Component='index' />} />
        <Route path="/analytics" element={<Dashboard Component='analytics' />} />
        <Route path="/customers" element={<Dashboard Component='customers' />} />
        <Route path="/products" element={<Dashboard Component='products' />} />
        <Route path="/discount" element={<Dashboard Component='discount' />} />
        <Route path="/help" element={<Dashboard Component='help' />} />
        <Route path="/settings" element={<Dashboard Component='settings' />} />
        <Route path="/notifications" element={<Dashboard Component='notifications' />} />
        <Route path="/logout" element={<Dashboard Component='logout' />} />
        <Route path="*" Component={Errorpage} />
      </Routes>
    </>
  )
}

export default App
