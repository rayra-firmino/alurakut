import React from 'react';
import MainGrid from '../src/components/MainGrid' 
import Box from '../src/components/Box' 
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons' 
import { ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations'

function ProfileSidebar(propriedades) {
    return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{borderRadius: '8px'}} />
      <hr/>

      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`} >
          @{propriedades.githubUser}
        </a>
      </p>
      <hr/>

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  
  const userGithub = 'rayra-firmino';
  const [comunidades, setComunidades] = React.useState([{
    id: '0',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',    
  }]);
  // const comunidades = comunidades[0];
  // const alteradorDeComunidades/setComunidades = comunidades[1];

  const pessoasFavoritas = [
    'juunegreiros', 
    'omariosouto', 
    'peas', 
    'rafaballerini', 
    'marcobrunodev', 
    'felipefialho',
    'diego3g'
  ]

  return (
    <>
    <AlurakutMenu githubUser={userGithub}/>
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
      <ProfileSidebar githubUser={userGithub}/>
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className="title">
            Bem vindo(a)
          </h1>

          <OrkutNostalgicIconSet/>
        </Box>

        <Box>
          <h2 className="subTitle">O que você deseja fazer?</h2>
          <form onSubmit={function handleCriarComunidade(event) {
            event.preventDefault();
            const dadosDoForm = new FormData(event.target);


            const comunidade = {
              id: new Date().toISOString(),
              title: dadosDoForm.get('title'),
              image: dadosDoForm.get('image')
            }
            const comunidadesAtualizadas = [...comunidades, comunidade]; //esses três pontinhos se chamam spread e eles estão fazendo com que comunidades(array) adicione essa string('alura stars') dentro dele, transformando tudo em array. serve para funções e também para objects 
            setComunidades(comunidadesAtualizadas);
          }}>
            <div>
              <input 
                placeholder="Qual vai ser o nome da sua comunidade?" 
                name="title" 
                aria-label="Qual vai ser o nome da sua comunidade?"
                type="text" 
              />
            </div>
            <div>
              <input 
                placeholder="Coloque uma url para usarmos de capa" 
                name="image" 
                aria-label="Coloque uma url para usarmos de capa" 
              />
            </div>

            <button>
              Criar comunidade
            </button>        
          </form>
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          Meus amigos <p className="numberOfProfile">({pessoasFavoritas.length})</p>
        </h2>

        <ul>
         {pessoasFavoritas.slice(0,6).map((itemAtual) => {
            return (
              <li key={itemAtual}>
                <a href={`https://github.com/${itemAtual}`}>
                  <img src={`https://github.com/${itemAtual}.png`} />
                  <span>{itemAtual}</span>
                </a>
              </li>
              
            )
          })}
        </ul>
        <hr/>
        <a className="seeAll" href="" >Ver todos</a>
        </ProfileRelationsBoxWrapper>

        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Minhas comunidades <p className="numberOfProfile">({comunidades.length})</p>
          </h2>
          <ul>
            {comunidades.slice(0,6).map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                    <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                  
                )
            })}
          </ul>
          <hr/>
          <a className="seeAll" href="" >Ver todos</a>
        </ProfileRelationsBoxWrapper>
        
      </div>      
    </MainGrid>
    </>
    )
}
