import './App.css'
import Docs from './components/Docs'
import { Routes, Route } from 'react-router-dom'
import { app, database } from './firebaseConfig'
import EditDocs from './components/EditDocs'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Docs database={database} />} />
      <Route path="/editDocs/:id" element={<EditDocs database={database} />} />
    </Routes>
  )
}

export default App
