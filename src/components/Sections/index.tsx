import Span from '../Span'
import { SectionStyles } from './styles'

type Props = {
  subTitle: string
  title: string
  text?: string
  children: React.ReactNode
  color: 'principal' | 'secundária'
  id: string
}

const Section = ({ subTitle, title, text, children, color, id }: Props) => (
  <SectionStyles color={color} className="paddingTopBottom" id={id}>
    <div className="container">
      <Span>{subTitle}</Span>
      <h2 className="h2">{title}</h2>
      <p>{text}</p>
      {children}
    </div>
  </SectionStyles>
)

export default Section
