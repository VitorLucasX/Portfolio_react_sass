import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiSass,
  DiGit
} from 'react-icons/di'

import '../styles/components/technologies.sass'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 className='animate__animated animate__fadeInRight'/>},
  { id: "css", name: "CSS3", icon: <DiCss3 className='animate__animated animate__fadeInRight'/>},
  { id: "sass", name: "SASS", icon: <DiSass className='animate__animated animate__fadeInRight' />},
  { id: "js", name: "JavaScript", icon: <DiJsBadge className='animate__animated animate__fadeInRight'/>},
  { id: "react", name: "React", icon: <DiReact className='animate__animated animate__fadeInRight'/>},
  { id: "git", name: "Git", icon: <DiGit className='animate__animated animate__fadeInRight' />},
]

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer
