import {LinkContacts} from './styles'

type Props = {
  name: string
  description: string
  image: string
  link: string
  color: 'principal' | 'secundaria'
}

const LinkNetWorks = ({ image, link, description, name, color }: Props) => (
  <LinkContacts href={link} title={description} color={color}>
    <img src={image} alt={name} />
  </LinkContacts>
)

export default LinkNetWorks