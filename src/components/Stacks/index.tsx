import { useContext } from 'react'

import Section from '../Sections'
import StackCard from '../StackCards'
import * as S from './styles'

import { LanguageContext } from '../../contexts/LanguageContext'

const StackTeste = [
  {
    stack: ' React',
    type: 'Front-end'
  },
  {
    stack: ' Typescript',
    type: 'Language-end'
  },
  {
    stack: ' Node.js',
    type: 'Back-end'
  },
  {
    stack: ' PostgreSQL',
    type: 'Database'
  },
  {
    stack: 'Styled-Components',
    type: 'Styling'
  },
  {
    stack: 'Java',
    type: 'Back-end'
  },
  {
    stack: 'Jest',
    type: 'Testing'
  },
  {
    stack: 'Less',
    type: 'Styling'
  },
  {
    stack: 'Cypress',
    type: 'Testing'
  },
  {
    stack: 'Sass',
    type: 'Styling'
  },
  { stack: 'MongoDB', type: 'Database' },
  { stack: 'Express', type: 'Back-end' },
  { stack: 'Redux', type: 'State Management' },
  { stack: 'JavaScript', type: 'Language' },
  { stack: 'IA', type: 'Intelligence Artificial' },
  { stack: 'Tailwind CSS', type: 'Styling' }
]

const Stacks = () => {
  const { t } = useContext(LanguageContext)

  return (
    <Section
      color="secundária"
      subTitle={t.Stacks.Span}
      title={t.Stacks.title}
      text={t.Stacks.text}
      id="stack"
    >
      <S.ListaStack>
        {StackTeste.map((stack) => (
          <li key={stack.stack}>
            <StackCard stack={stack.stack} technology={stack.type} />
          </li>
        ))}
      </S.ListaStack>
    </Section>
  )
}

export default Stacks
