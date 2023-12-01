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
      <a href="https://drive.google.com/u/0/uc?id=165sJYL-sGYeoqkgFBo2YFUvHXuiR7g5B&export=download" download className='btn'>
        Download curriculo
      </a>
    </aside>
  )
}

export default SideBar
