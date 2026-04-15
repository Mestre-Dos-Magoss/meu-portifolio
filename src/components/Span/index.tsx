import { SpanPersonality } from './styles'

type Props = {
  children: string
}

const Span = ({ children }: Props) => (
  <SpanPersonality>{children}</SpanPersonality>
)

export default Span
