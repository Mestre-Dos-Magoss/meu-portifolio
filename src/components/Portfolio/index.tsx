import CardProjects from '../CardProjects'
import Section from '../Sections'

import { ListProjects } from './styles'

const ProjectsTeste = [
  {
    image:
      'https://polijunior.com.br/wp-content/uploads/2023/01/desenvolver-projeto-web-300x200.jpg',
    title: 'E-Commerce Platform',
    description:
      'Plataforma completa de e-commerce com pagamentos integrados e painel administrativo.',
    features: [
      'integração com Banco de dados',
      'Componentização',
      'envio dos dados',
      'validações e cyberSecurança'
    ],
    technologys: ['React', 'typescript', 'Javascript', 'CSS'],
    linkRepos: 'localHost',
    linkView: 'LocalHost'
  },
  {
    image:
      'https://polijunior.com.br/wp-content/uploads/2023/01/desenvolver-projeto-web-300x200.jpg',
    title: 'Loja de games',
    description:
      'Uma loja que foi criada para mudar completamente a maneira em que você joga, uma verdadeira experiência..',
    features: [
      'integração com Banco de dados',
      'Componentização',
      'envio dos dados',
      'validações e cyberSecurança'
    ],
    technologys: ['React', 'typescript', 'Javascript', 'CSS'],
    linkRepos: 'localHost',
    linkView: 'LocalHost'
  },
  {
    image:
      'https://polijunior.com.br/wp-content/uploads/2023/01/desenvolver-projeto-web-300x200.jpg',
    title: 'Loja de games',
    description:
      'Uma loja que foi criada para mudar completamente a maneira em que você joga, uma verdadeira experiência..',
    features: [
      'integração com Banco de dados',
      'Componentização',
      'envio dos dados',
      'validações e cyberSecurança'
    ],
    technologys: ['React', 'typescript', 'Javascript', 'CSS'],
    linkRepos: 'localHost',
    linkView: 'LocalHost'
  },
  {
    image:
      'https://polijunior.com.br/wp-content/uploads/2023/01/desenvolver-projeto-web-300x200.jpg',
    title: 'Loja de games',
    description:
      'Uma loja que foi criada para mudar completamente a maneira em que você joga, uma verdadeira experiência..',
    features: [
      'integração com Banco de dados',
      'Componentização',
      'envio dos dados',
      'validações e cyberSecurança'
    ],
    technologys: ['React', 'typescript', 'Javascript', 'CSS'],
    linkRepos: 'localHost',
    linkView: 'LocalHost'
  },
  {
    image:
      'https://polijunior.com.br/wp-content/uploads/2023/01/desenvolver-projeto-web-300x200.jpg',
    title: 'Loja de games',
    description:
      'Uma loja que foi criada para mudar completamente a maneira em que você joga, uma verdadeira experiência..',
    features: [
      'integração com Banco de dados',
      'Componentização',
      'envio dos dados',
      'validações e cyberSecurança'
    ],
    technologys: ['React', 'typescript', 'Javascript', 'CSS'],
    linkRepos: 'localHost',
    linkView: 'LocalHost'
  },
  {
    image:
      'https://polijunior.com.br/wp-content/uploads/2023/01/desenvolver-projeto-web-300x200.jpg',
    title: 'Loja de games',
    description:
      'Uma loja que foi criada para mudar completamente a maneira em que você joga, uma verdadeira experiência..',
    features: [
      'integração com Banco de dados',
      'Componentização',
      'envio dos dados',
      'validações e cyberSecurança'
    ],
    technologys: ['React', 'typescript', 'Javascript', 'CSS'],
    linkRepos: 'localHost',
    linkView: 'LocalHost'
  }
]

const Porfolio = () => (
  <Section
    color="principal"
    title="Projetos em Destaque"
    subTitle="Portfólio"
    text="Alguns dos projetos que desenvolvi, desde MVPs até aplicações em produção atendendo milhares de usuários"
  >
    <ListProjects>
      {ProjectsTeste.map(
        ({
          title,
          description,
          image,
          features,
          technologys,
          linkRepos,
          linkView
        }) => (
          <li key={title}>
            <CardProjects
              title={title}
              description={description}
              image={image}
              features={features}
              technology={technologys}
              linkRepos={linkRepos}
              linkView={linkView}
            />
          </li>
        )
      )}
    </ListProjects>
  </Section>
)

export default Porfolio
