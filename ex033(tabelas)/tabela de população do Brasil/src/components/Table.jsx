import {useState} from 'react'

const Table = ({data = []}) => {

  // Para tabelas com muitas colunas e muitas linhas podemos usar o efeito zebrado com background color no tbody > td como a pseudoclasse :cth-child(2n) ou even para pares e ch cth-child(2n-1) ou odd para ímpar.
  // Podemos também usar o position relative na table e o position sticky no thead com top 0

  return (
    <table>
      {/* caption é o título da tabela de forma semântica */}
      <caption>
        População das unidades federativas
      </caption>
      <thead>
        <tr>
          {/* scope identifica onde estão os dados em relação à tabela */}
          <th scope='col'>Estado</th>
          <th scope='col'>População</th>
        </tr>
      </thead>
      <tbody>
        { 
          data.map(element => (
              <tr key= {1000+element.id}>
                <td key={2000+element.id}>
                  {element.state}
                </td>
                <td key={3000+element.id}>
                  {element.num}
                </td>
              </tr>
              )
            )
          }
      </tbody>
      <tfoot>
        <tr>
          <th scope='row'>Total</th>
          <td>
            109 867 525
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default Table