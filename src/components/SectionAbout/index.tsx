import * as S from './styles'

export type Props = {
  children: React.ReactNode
  className?: string
  color: 'principal' | 'secundario'
}

const SectionAbout = ({ children, className, color }: Props) => (
  <S.Presentation color={color}>
    <S.PresentationContainer className={className}>
      {children}
    </S.PresentationContainer>
  </S.Presentation>
)

export default SectionAbout
