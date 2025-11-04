import './lista-suspensa.estilos.css'

export function ListaSuspensa ({itens,...rest}) {
  
  return (
    <select className='lista-suspensa' defaultValue="" {...rest}>
        <option value="" disabled>
          Selecione uma opção
        </option>
        {itens.map(function (item) {
          return <option key={item.id} value={item.id}>{item.nome}</option>
        })}
      
    </select>
  )
}