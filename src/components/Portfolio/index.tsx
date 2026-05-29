import Section from '../Sections'
import { ListProjects } from './styles'

import gamesStore from '../../assets/images_projects/games_store/index'
import efood from '../../assets/images_projects/efood/index'
import lista_tarefas from '../../assets/images_projects/lista_tarefas/index'
import calendar from '../../assets/calendar.svg'
import peoples from '../../assets/peoples.svg'
import target from '../../assets/target.svg'

import * as enuns from '../../utils/enuns/status'
import CardProjects, { type CardProjectProps } from '../CardProjects'

const ProjectsTeste: CardProjectProps[] = [
  {
    image: gamesStore.gamesStore,
    imagesProject: [
      gamesStore.favorite,
      gamesStore.cart,
      gamesStore.buying,
      gamesStore.empty,
      gamesStore.libraryWithGames,
      gamesStore.emptyLibrary,
      gamesStore.register,
      gamesStore.login
    ],
    title: 'Games Store',
    description:
      ' Desenvolvi uma plataforma de e-commerce de jogos utilizando React e TypeScript em conjunto com o Banco de Dados PostgreSQL, visando oferecer uma experiência de compra de jogos online eficiente e segura. A plataforma permite aos usuários navegar por uma ampla variedade de jogos, adicionar itens ao carrinho, realizar pagamentos e gerenciar suas bibliotecas de jogos, proporcionando uma experiência de compra fluida e satisfatória para os entusiastas de jogos online.',
    features: [
      'Integração com Banco de dados',
      'Componentização',
      'Tratamento dos dados',
      'Validações e autenticação'
    ],
    status: enuns.Status.EM_ANDAMENTO,
    technologys: [
      'React',
      'typescript',
      'Express',
      'PostgreSQL',
      'Api Restful',
      'Axios',
      'Local Storage',
      'Redux',
      'Styled-Components',
      'Context API',
      'React-Router'
    ],
    linkRepos: 'https://github.com/Mestre-Dos-Magoss/loja_de_jogos.git',
    linkView: 'https://loja-de-jogos-sigma.vercel.app',
    details: [
      {
        icone: calendar,
        title: 'Timeline',
        description: enuns.Status.EM_ANDAMENTO
      },
      {
        icone: peoples,
        title: 'Equipe',
        description: 'Solo'
      },
      {
        icone: target,
        title: 'Impacto',
        description: 'Comunicação banco/frontend'
      }
    ],
    mainFeatures: [
      {
        title: 'Integração com Banco de Dados',
        description:
          'Implementei uma integração eficiente com um banco de dados, permitindo o armazenamento seguro e a recuperação rápida de informações essenciais para a funcionalidade da plataforma. Essa integração garantiu que os dados dos usuários, jogos e transações fossem gerenciados de forma eficaz, proporcionando uma experiência de compra fluida e confiável para os usuários.'
      },
      {
        title: 'Componentização e Reutilização de Código',
        description:
          'Adotei uma abordagem de componentização, criando componentes reutilizáveis e modulares para a plataforma de jogos. Essa prática permitiu uma estrutura de código mais organizada, facilitando a manutenção e a escalabilidade do projeto, além de promover a consistência visual e funcional em toda a aplicação.'
      },
      {
        title: 'Tratamento de Dados e Validações',
        description:
          'Implementei um sistema robusto de tratamento de dados e validações, garantindo a integridade e a segurança das informações dos usuários durante o processo de compra. Com validações eficazes, os usuários foram protegidos contra entradas inválidas, proporcionando uma experiência de compra segura e confiável.'
      },
      {
        title: 'Autenticação e Segurança',
        description:
          'Desenvolvi um sistema de autenticação seguro, permitindo que os usuários criem contas, façam login e gerenciem suas informações pessoais de forma protegida. Com medidas de segurança implementadas, os dados dos usuários foram protegidos contra acessos não autorizados, garantindo uma experiência de compra segura e confiável para todos os usuários da plataforma.'
      }
    ]
  },
  {
    image: efood.efood,
    imagesProject: [
      efood.chooseRestaurant,
      efood.chosenDish,
      efood.cartWithProducts,
      efood.delivery,
      efood.payment,
      efood.checkout
    ],
    title: 'Efood',
    description:
      ' Desenvolvi uma aplicação de delivery de comida utilizando React e TypeScript, proporcionando aos usuários uma experiência conveniente e eficiente para pedir suas refeições favoritas online. A aplicação permite aos usuários navegar por uma variedade de restaurantes e pratos, personalizar seus pedidos, gerenciar o carrinho de compras e finalizar a compra de forma simples e segura, oferecendo uma solução completa para atender às necessidades dos amantes de comida que buscam praticidade na hora de fazer seus pedidos.',
    features: [
      'Integração com API Restful',
      'Checkout e carrinho de compras',
      'Recebimento e envio dos dados',
      'Gerenciamento de estado com Redux'
    ],
    status: enuns.Status.CONCLUIDO,
    technologys: [
      'React',
      'typescript',
      'API Restful',
      'Redux',
      'Styled-Components',
      'React-Router',
      'RTK Query'
    ],
    linkRepos: 'https://github.com/Mestre-Dos-Magoss/Efood.git',
    linkView: 'https://efood-iota-seven.vercel.app',
    details: [
      {
        icone: calendar,
        title: 'Timeline',
        description: '1 mês'
      },
      {
        icone: peoples,
        title: 'Equipe',
        description: 'Solo'
      },
      {
        icone: target,
        title: 'Impacto',
        description: 'Arquitetura frontend moderna'
      }
    ],
    mainFeatures: [
      {
        title: 'Selecão de Restaurantes e Pratos',
        description:
          'Implementei uma funcionalidade de seleção de restaurantes e pratos, permitindo aos usuários navegar por uma variedade de opções gastronômicas. Com uma interface intuitiva, os usuários podem escolher seus pratos favoritos, personalizar pedidos e desfrutar de uma experiência de compra conveniente e agradável.'
      },
      {
        title: 'Gerenciamento de Carrinho e Checkout',
        description:
          'Desenvolvi um sistema de gerenciamento de carrinho e checkout eficiente, permitindo aos usuários adicionar itens ao carrinho, revisar pedidos e finalizar a compra de forma simples e segura. Com uma interface intuitiva, os usuários podem navegar pelo processo de checkout com facilidade, garantindo uma experiência de compra fluida e satisfatória.'
      },
      {
        title: 'Integração com API Restful',
        description:
          'Integrei a aplicação com uma API Restful, permitindo a comunicação eficiente entre o frontend e o backend. Essa integração possibilitou a troca de dados em tempo real, garantindo que os usuários tenham acesso às informações mais recentes sobre restaurantes, pratos e status dos pedidos, proporcionando uma experiência de compra dinâmica e atualizada.'
      },
      {
        title: 'Gerenciamento de Estado com Redux',
        description:
          'Utilizei o Redux para gerenciar o estado da aplicação de forma eficiente, garantindo uma experiência de usuário fluida e consistente. Com o Redux, os dados do carrinho, seleção de restaurantes e status dos pedidos foram centralizados, facilitando a manutenção e escalabilidade da aplicação, além de proporcionar uma navegação suave e sem interrupções para os usuários.'
      }
    ]
  },
  {
    image: lista_tarefas.listaTarefas,
    imagesProject: [
      lista_tarefas.filterCard,
      lista_tarefas.filterSearch,
      lista_tarefas.registerTask
    ],
    title: 'Lista de tarefas',
    description:
      'Desenvolvi uma aplicação de lista de tarefas utilizando React e TypeScript, permitindo aos usuários criar, organizar e gerenciar suas tarefas diárias de forma eficiente e intuitiva. Desde a criação de tarefas até a definição de prioridades, a aplicação oferece uma experiência completa para manter os usuários organizados e produtivos em suas atividades diárias.',
    features: [
      'Gerenciador de tarefas',
      'Cadastramento de tarefas',
      'Filtragem e ordenação de tarefas',
      'Definicão de prioridades e prazos'
    ],
    technologys: ['React', 'typescript', 'React Router', 'Redux'],
    linkRepos: 'https://github.com/Mestre-Dos-Magoss/minhas-tarefas.git',
    linkView: 'https://minhas-tarefas-xi-nine.vercel.app',
    status: enuns.Status.CONCLUIDO,
    details: [
      {
        icone: calendar,
        title: 'Timeline',
        description: '1 mês'
      },
      {
        icone: peoples,
        title: 'Equipe',
        description: 'Solo'
      },
      {
        icone: target,
        title: 'Impacto',
        description: 'Domínio React/TypeScript'
      }
    ],
    mainFeatures: [
      {
        title: 'Filtragem e Ordenação Avançada',
        description:
          'Implementei um sistema de filtragem e ordenação robusto, permitindo aos usuários organizar suas tarefas por data, prioridade ou status. A interface intuitiva torna fácil encontrar e gerenciar tarefas, aumentando a produtividade e a eficiência no dia a dia.'
      },
      {
        title: 'Gerenciamento de Tarefas Personalizado',
        description:
          'Permiti aos usuários criar, editar e excluir tarefas de forma simples e eficiente. Com opções de categorização e definição de prioridades, os usuários podem personalizar sua lista de tarefas para atender às suas necessidades específicas, garantindo que nada importante seja esquecido.'
      }
    ]
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
          linkView,
          status,
          details,
          mainFeatures,
          imagesProject
        }) => (
          <li key={title}>
            <CardProjects
              title={title}
              description={description}
              image={image}
              features={features}
              technologys={technologys}
              linkRepos={linkRepos}
              linkView={linkView}
              status={status}
              details={details}
              mainFeatures={mainFeatures}
              imagesProject={imagesProject}
            />
          </li>
        )
      )}
    </ListProjects>
  </Section>
)

export default Porfolio
