import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import Avatar from '../img/testando.png'

import '../styles/components/sidebar.sass'


const SideBar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Vitor Lucas"/>
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className='btn'>
        Download curriculo
      </a>
    </aside>
  )
}

export default SideBar
