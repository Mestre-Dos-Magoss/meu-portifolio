import { CardStack } from './styles'

type Props = {
  stack: string
  technology: string
}

const StackCard = ({ stack, technology }: Props) => (
  <CardStack>
    <h5>{stack}</h5>
    <p>{technology}</p>
  </CardStack>
)

export default StackCard
