import Span from '../Span'
import { SectionStyles } from './styles'

type Props = {
  subTitle: string
  title: string
  text?: string
  children: React.ReactNode
  color: 'principal' | 'secundária'
}

const Section = ({ subTitle, title, text, children, color }: Props) => (
  <SectionStyles color={color} className="paddingTopBottom">
    <div className="container">
      <Span>{subTitle}</Span>
      <h2 className="h2">{title}</h2>
      <p>{text}</p>
      {children}
    </div>
  </SectionStyles>
)

export default Section
