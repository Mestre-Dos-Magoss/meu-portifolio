import * as S from './styles'

export type Props = {
  image: string
  carrer: string
  technologies: string[]
  color: string
}

const CardSpecialties = ({ carrer, image, technologies, color }: Props) => (
  <S.Card>
    <S.LogoStack color={color}>
      <img src={image} alt="Icone da especialidade" />
    </S.LogoStack>
    <h4>{carrer}</h4>
    <p>{technologies}</p>
  </S.Card>
)

export default CardSpecialties
