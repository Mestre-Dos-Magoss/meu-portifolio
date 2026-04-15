import * as S from './styles'

import type { Props } from '../CardSpecialties'

import email from '../../assets/email.svg'
import CardSpecialties from '../CardSpecialties'
import Section from '../Sections'

const Especialidades: Props[] = [
  {
    carrer: 'Frontend Development',
    color: 'blue',
    image: email,
    technologies: ['react.js, ', 'redux, ', 'typescript, ', 'css, js, ']
  },
  {
    carrer: 'Frontend Development',
    color: 'blue',
    image: email,
    technologies: ['react.js, ', 'redux, ', 'typescript, ', 'css, js, ']
  },
  {
    carrer: 'Frontend Development',
    color: 'blue',
    image: email,
    technologies: ['react.js, ', 'redux, ', 'typescript, ', 'css, js, ']
  },
  {
    carrer: 'Frontend Development',
    color: 'blue',
    image: email,
    technologies: ['react.js, ', 'redux, ', 'typescript, ', 'css, js, ']
  }
]

const Specialties = () => (
  <Section
    color="principal"
    subTitle="Habilidades"
    title="Áreas de Especialização"
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
