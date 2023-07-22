import './App.css'
import Deer from './home/Deer/Deer'
import Layout from './home/Layout/Layout'
import OverTheSky from './home/OverTheSky/OverTheSky'
import WaterFall from './home/Waterfall'
import WildParachute from './home/WildParachute/WildParachute'
import WinterSunset from './home/WinterSunset/WinterSunset'

function App() {

  return (
    <>
      <Layout>
        <Deer />
        <WinterSunset />
        <OverTheSky />
        <WaterFall />
        <WildParachute />
      </Layout>
    </>
  )
}

export default App
