
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import WeatherApi from './component/api/WeatherApi'

function App() {

  return (
    <BrowserRouter>
      <WeatherApi />
    </BrowserRouter>
  )
}

export default App
