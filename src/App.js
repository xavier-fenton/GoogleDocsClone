import './App.css'
import Docs from './components/docs'
import { app, database } from './firebaseConfig'

function App() {
  return <Docs database={database} />
}

export default App
