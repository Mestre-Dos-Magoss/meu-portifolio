import {LinkContacts} from './styles'

type Props = {
  name: string
  description: string
  image: string
  link: string
}

const LinkNetWorks = ({ image, link, description, name }: Props) => (
  <LinkContacts href={link} title={description}>
    <img src={image} alt={name} />
  </LinkContacts>
)

export default LinkNetWorks