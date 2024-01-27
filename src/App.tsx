import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages'
import Errorpage from './pages/404'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard Component='index' />} />
        <Route path="/analytics" Component={Errorpage} />
        <Route path="/customers" Component={Errorpage} />
        <Route path="/products" Component={Errorpage} />
        <Route path="/discount" Component={Errorpage} />
        <Route path="/help" Component={Errorpage} />
        <Route path="/settings" Component={Errorpage} />
        <Route path="/notifications" Component={Errorpage} />
        <Route path="/logout" Component={Errorpage} />
        <Route path="*" Component={Errorpage} />
      </Routes>
    </>
  )
}

export default App
