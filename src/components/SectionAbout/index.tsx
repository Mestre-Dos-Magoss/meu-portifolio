import * as S from './styles'

export type Props = {
  children: React.ReactNode
  className?: string
  color: 'principal' | 'secundario'
  id?: string
}

const SectionAbout = ({ children, className, color, id }: Props) => (
  <S.Presentation color={color} id={id}>
    <S.PresentationContainer className={className}>
      {children}
    </S.PresentationContainer>
  </S.Presentation>
)

export default SectionAbout
