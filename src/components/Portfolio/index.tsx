import { useContext } from 'react'

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
import { LanguageContext } from '../../contexts/LanguageContext'

const Porfolio = () => {
  const { t } = useContext(LanguageContext)

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
      title: `${t.Portfolio.GamesStore.title}`,
      description: `${t.Portfolio.GamesStore.descriptionProject}`,
      features: [
        t.Portfolio.GamesStore.feature1,
        t.Portfolio.GamesStore.feature2,
        t.Portfolio.GamesStore.feature3,
        t.Portfolio.GamesStore.feature4
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
          title: `${t.Portfolio.GamesStore.details.peoples.title}`,
          description: `${t.Portfolio.GamesStore.details.peoples.description}`
        },
        {
          icone: target,
          title: `${t.Portfolio.GamesStore.details.Impact.title}`,
          description: `${t.Portfolio.GamesStore.details.Impact.description}`
        }
      ],
      mainFeatures: [
        {
          title: `${t.Portfolio.GamesStore.MainFeatures.card1.title}`,
          description: `${t.Portfolio.GamesStore.MainFeatures.card1.description}`
        },
        {
          title: `${t.Portfolio.GamesStore.MainFeatures.card2.title}`,
          description: `${t.Portfolio.GamesStore.MainFeatures.card2.description}`
        },
        {
          title: `${t.Portfolio.GamesStore.MainFeatures.card3.title}`,
          description: `${t.Portfolio.GamesStore.MainFeatures.card3.description}`
        },
        {
          title: `${t.Portfolio.GamesStore.MainFeatures.card4.title}`,
          description: `${t.Portfolio.GamesStore.MainFeatures.card4.description}`
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
      title: `${t.Portfolio.Efood.title}`,
      description: `${t.Portfolio.Efood.descriptionProject}`,
      features: [
        t.Portfolio.Efood.feature1,
        t.Portfolio.Efood.feature2,
        t.Portfolio.Efood.feature3,
        t.Portfolio.Efood.feature4
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
          title: `${t.Portfolio.Efood.details.peoples.title}`,
          description: `${t.Portfolio.Efood.details.peoples.description}`
        },
        {
          icone: target,
          title: `${t.Portfolio.Efood.details.Impact.title}`,
          description: `${t.Portfolio.Efood.details.Impact.description}`
        }
      ],
      mainFeatures: [
        {
          title: `${t.Portfolio.Efood.MainFeatures.card1.title}`,
          description: `${t.Portfolio.Efood.MainFeatures.card1.description}`
        },
        {
          title: `${t.Portfolio.Efood.MainFeatures.card2.title}`,
          description: `${t.Portfolio.Efood.MainFeatures.card2.description}`
        },
        {
          title: `${t.Portfolio.Efood.MainFeatures.card3.title}`,
          description: `${t.Portfolio.Efood.MainFeatures.card3.description}`
        },
        {
          title: `${t.Portfolio.Efood.MainFeatures.card4.title}`,
          description: `${t.Portfolio.Efood.MainFeatures.card4.description}`
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
      title: `${t.Portfolio.ListaDeTarefas.title}`,
      description: `${t.Portfolio.ListaDeTarefas.descriptionProject}`,
      features: [
        t.Portfolio.ListaDeTarefas.feature1,
        t.Portfolio.ListaDeTarefas.feature2,
        t.Portfolio.ListaDeTarefas.feature3,
        t.Portfolio.ListaDeTarefas.feature4
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
          title: `${t.Portfolio.ListaDeTarefas.details.peoples.title}`,
          description: `${t.Portfolio.ListaDeTarefas.details.peoples.description}`
        },
        {
          icone: target,
          title: `${t.Portfolio.ListaDeTarefas.details.Impact.title}`,
          description: `${t.Portfolio.ListaDeTarefas.details.Impact.title}`
        }
      ],
      mainFeatures: [
        {
          title: `${t.Portfolio.ListaDeTarefas.MainFeatures.card1.title}`,
          description: `${t.Portfolio.ListaDeTarefas.MainFeatures.card1.description}`
        },
        {
          title: `${t.Portfolio.ListaDeTarefas.MainFeatures.card2.title}`,
          description: `${t.Portfolio.ListaDeTarefas.MainFeatures.card2.description}`
        }
      ]
    }
  ]

  return (
    <Section
      color="principal"
      title={t.Portfolio.title}
      subTitle={t.Portfolio.Span}
      text={t.Portfolio.description}
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
}

export default Porfolio
