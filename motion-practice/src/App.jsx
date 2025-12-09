
import './App.css'
import BoxAnimations from './components/BoxAnimations'
import ClickHover from './components/ClickHover'
import ScrollAnimation from './components/ScrollAnimation'
import TextAnimation from './components/TextAnimation'

function App() {

  return (
    <>
      <h1 className='font-bold text-8xl text-center'>Framer Motion </h1>
      <TextAnimation />
      <BoxAnimations />
      <ClickHover />
      <ScrollAnimation />
    </>
  )
}

export default App
