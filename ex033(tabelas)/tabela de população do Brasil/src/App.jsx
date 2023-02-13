import './App.css'
import Table from './components/table'

function App() {

  return (
    <div className="App">
      <Table key={1} data={[
        {state :'São Paulo', num: "46 024 937", id:1},
        {state :'Minas Gerais', num: "20 732 660", id:2},
        {state :'Rio de Janeiro', num : '16 615 526', id : 3},
        {state :'Bahia', num : '14 659 023', id : 4},
        {state :'Paraná', num : '11 835 379	', id : 5},
        ]}/>
    </div>
  )
}

export default App
