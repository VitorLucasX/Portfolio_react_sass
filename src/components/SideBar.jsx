import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import Avatar from '../img/profile.png'

import '../styles/components/sidebar.sass'


const SideBar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Vitor Lucas"/>
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="https://drive.usercontent.google.com/u/0/uc?id=1JHmMPKbhf3PD8jjQVFDJg6MhklxGKT_8&export=download" download className='btn'>
        Download curriculo
      </a>
    </aside>
  )
}

export default SideBar
