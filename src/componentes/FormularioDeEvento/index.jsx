import { TituloFormulario } from '../TituloFormulario'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { CampoFormulario } from '../CampoFormulario'
import { Label } from '../Label'
import './formulario-de-evento.estilos.css'
import { Botao } from '../Botao'
import { ListaSuspensa } from '../listaSuspensa'

export function FormularioDeEvento({ temas, aoSubmeter }) {



  function aoFormSubmetido(event) {

    event.preventDefault()
    const formData = new FormData(event.target)

    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
        return item.id == formData.get('tema')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
    }
    aoSubmeter(evento) 
 }



  return (
    <form className='form-evento' onSubmit={aoFormSubmetido}>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>

      <div className='campos'>
        <CampoFormulario>
          <Label htmlFor="nomeEvento">
            Qual o nome do evento?
          </Label>
          <CampoDeEntrada
            type="text"
            name="nomeEvento"
            id="nome"
            placeholder='Summer dev hits'
          />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor="capa">
            Qual a capa do evento?
          </Label>
          <CampoDeEntrada
            type="text"
            name="capa"
            id="capa"
            placeholder='https://....'

          />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor="dataEvento">
            Data do evento
          </Label>
          <CampoDeEntrada
            type="date"
            name="dataEvento"
            id="dataEvento"
          />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor="dataEvento">
            Tema do evento
          </Label>
          <ListaSuspensa id='tema' name='tema' itens={temas} />
        </CampoFormulario>
      </div>
      <div className='acoes'>
        <Botao>
          Criar Evento
        </Botao>
      </div>
    </form>
  )
}