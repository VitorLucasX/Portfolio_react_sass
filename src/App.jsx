import MainContent from './components/MainContent'
import SideBar from './components/SideBar'

import "./styles/components/app.sass"

function App() {
  return (
      <div id='portfolio'>
        <h1 className='animate__animated animate__fadeInLeft'>Vitor Lucas</h1>
        <SideBar />
        <MainContent />
      </div>
       
  )
}

export default App
