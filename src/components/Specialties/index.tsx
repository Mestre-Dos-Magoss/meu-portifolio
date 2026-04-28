import * as S from './styles'

import type { Props } from '../CardSpecialties'

import code from '../../assets/code.svg'
import layers from '../../assets/layers.svg'
import database from '../../assets/database.svg'
import CardSpecialties from '../CardSpecialties'
import Section from '../Sections'

const Especialidades: Props[] = [
  {
    carrer: 'Frontend Development',
    color: '#00b8db',
    image: code,
    technologies: [
      'React, ',
      'Typescript, ',
      'Redux, ',
      'Tailwind CSS, ',
      'JavaScript '
    ]
  },
  {
    carrer: 'Backend Development',
    color: '#f6339a',
    image: database,
    technologies: [
      'Node.js, ',
      'Express, ',
      'MongoDB, ',
      'PostgreSQL, ',
      'Java '
    ]
  },
  {
    carrer: 'DevOps',
    color: '#fb2c36',
    image: layers,
    technologies: ['Scrum, ', 'Kanban, ', 'CI/CD']
  }
]

const Specialties = () => (
  <Section
    color="principal"
    subTitle="Habilidades"
    title="Áreas de Especialização"
    id="specialties"
  >
    <S.Cardsgrid>
      {Especialidades.map((stack) => (
        <li key={stack.carrer}>
          <CardSpecialties
            carrer={stack.carrer}
            color={stack.color}
            image={stack.image}
            technologies={stack.technologies}
          />
        </li>
      ))}
    </S.Cardsgrid>
  </Section>
)

export default Specialties
