
import './App.css'
import { Banner } from './componentes/Banner'
import { FormularioDeEvento } from './componentes/FormularioDeEvento'
import { Tema } from './componentes/Tema'
import { CardEvento } from './componentes/CardEvento'
import { useState } from 'react'


// Componente principal do aplicativo
function App() {
  // Definição dos temas disponíveis
const temas = [
    {
      id: 1,
      nome: 'front-end',
    },
    {
      id: 2,
      nome: 'back-end',
    },
    {

      id: 3,
      nome: 'devops',
    },
    {
      id: 4,
      nome: 'inteligência artificial',
    },
    {
      id: 5,
      nome: 'data science',
    },
    {

      id: 6,
      nome: 'cloud',
    }
  ]
  // Estado para armazenar os eventos criados
  const [eventos, setEventos] = useState([{
    capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
    tema: temas[0],
    data: new Date(),
    titulo: 'Mulheres no Front-End',
  }])
  


// Função para adicionar um novo evento ao estado
  function adicionarEvento(evento) {
    
      setEventos([...eventos, evento])
  }
//Renderização condicional de eventos por tema
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEvento
        temas={temas}
        aoSubmeter={adicionarEvento}
      />

      <section className='container'>
        {temas.map(function (tema) {
          if(!eventos.some(function (evento) {
            return evento.tema.id === tema.id
          })) {
            return null

          }
        return (
          <section key={tema.id}>
            <Tema tema={tema} />
            <div className="eventos">
               {
               eventos.filter(function (evento) {
                return evento.tema.id === tema.id
               })
               
               .map(function (evento, index) {

              return <CardEvento evento={evento} key={index} />
            

            })}
            </div>
          </section>
        )
      })}

      </section>


    </main>
  )

}

export default App
