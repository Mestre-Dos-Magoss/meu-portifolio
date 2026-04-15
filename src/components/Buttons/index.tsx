import { type ReactNode } from 'react'
import * as S from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  padding?: string
  link?: string
  color: 'principal' | 'secundario'
  title: string
  children: ReactNode
}

const Button = ({ type, color, title, padding, children, link }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.Botao color={color} padding={padding} title={title} type={type}>
        {children}
      </S.Botao>
    )
  } else {
    return (
      <S.BotaoLink
        color={color}
        padding={padding}
        title={title}
        type={type}
        href={link}
      >
        {children}
      </S.BotaoLink>
    )
  }
}

export default Button
