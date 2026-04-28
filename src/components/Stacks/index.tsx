import Section from '../Sections'
import StackCard from '../StackCards'
import * as S from './styles'

const StackTeste = [
  {
    stack: ' React',
    type: 'frameWork'
  },
  {
    stack: ' React',
    type: 'frameWork'
  },
  {
    stack: ' React',
    type: 'frameWork'
  },
  {
    stack: ' React',
    type: 'frameWork'
  },
  {
    stack: ' React',
    type: 'frameWork'
  },
  {
    stack: ' React',
    type: 'frameWork'
  },
  {
    stack: ' React',
    type: 'frameWork'
  },
  {
    stack: ' React',
    type: 'frameWork'
  }
]

const Stacks = () => (
  <Section
    color="secundária"
    subTitle="Stack Tecnológica"
    title="Tecnologias que Domino"
    text="Ferramentas e tecnologias que utilizo no dia a dia para criar soluções
        robustas e escaláveis"
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

export default Stacks
