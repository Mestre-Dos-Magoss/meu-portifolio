import CardProjects from '../CardProjects'
import Section from '../Sections'
import games_store from '../../assets/games_store.png'
import efood from '../../assets/efood.png'
import lista_tarefas from '../../assets/lista_tarefas.png'
import { ListProjects } from './styles'

const ProjectsTeste = [
  {
    image: games_store,
    title: 'Games Store',
    description:
      'Plataforma de jogos completa com recursos avançados e design moderno, com uma experiência de compra personalizada.',
    features: [
      'Integração com Banco de dados',
      'Componentização',
      'Tratamento dos dados',
      'Validações e autenticação'
    ],
    technologys: ['React', 'typescript', 'Express', 'PostgreSQL'],
    linkRepos: 'https://github.com/Mestre-Dos-Magoss/loja_de_jogos.git',
    linkView: 'https://loja-de-jogos-sigma.vercel.app'
  },
  {
    image: efood,
    title: 'Efood',
    description:
      'Efood é um e-commerce de alimentos que oferece uma ampla variedade de opções gastronômicas no conforto da sua casa.',
    features: [
      'Integração com API Restful',
      'Checkout e carrinho de compras',
      'Recebimento e envio dos dados',
      'Gerenciamento de estado com Redux'
    ],
    technologys: ['React', 'typescript', 'API Restful', 'Redux'],
    linkRepos: 'https://github.com/Mestre-Dos-Magoss/Efood.git',
    linkView: 'https://efood-iota-seven.vercel.app'
  },
  {
    image: lista_tarefas,
    title: 'Lista de tarefas',
    description:
      'Uma loja que foi criada para mudar completamente a maneira em que você joga, uma verdadeira experiência..',
    features: [
      'Gerenciador de tarefas',
      'Cadastramento de tarefas',
      'Filtragem e ordenação de tarefas',
      'Definicão de prioridades e prazos'
    ],
    technologys: ['React', 'typescript', 'React Router'],
    linkRepos: 'https://github.com/Mestre-Dos-Magoss/minhas-tarefas.git',
    linkView: 'https://minhas-tarefas-xi-nine.vercel.app'
  }
]

const Porfolio = () => (
  <Section
    color="principal"
    title="Projetos em Destaque"
    subTitle="Portfólio"
    text="Alguns dos projetos que desenvolvi, desde MVPs até aplicações em produção atendendo milhares de usuários"
    id="projects"
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
