import Disciplina from './Disciplina';
import './App.css'

function App() {
  return <div className="app">
    <Disciplina nome="Algoritmos I - teórica" carga={60} aval="⭐⭐⭐⭐" lab={false}/>
    <Disciplina nome="Algoritmos I - prática" carga={30} aval="⭐⭐⭐⭐⭐" lab={true}/>
    <Disciplina nome="Algoritmos II - teórica" carga={60} aval="⭐⭐⭐⭐" lab={false}/>
    <Disciplina nome="Algoritmos II - prática" carga={30} aval="⭐⭐⭐⭐⭐" lab={true}/>
    <Disciplina nome="Desenvolvimento Web I" carga={30} aval="⭐⭐⭐⭐" lab={true}/>
    <Disciplina nome="Desenvolvimento Web II" carga={30} aval="⭐⭐⭐⭐" lab={true}/>
    <Disciplina nome="Organização de Computadores" carga={60} aval="⭐⭐" lab={false}/>
    <Disciplina nome="Circuitos Digitais" carga={60} aval="⭐⭐⭐⭐" lab={false}/>
    <Disciplina nome="Cálculo 1" carga={60} aval="⭐⭐⭐" lab={false}/>
    <Disciplina nome="Cálculo 2" carga={60} aval="⭐⭐⭐" lab={false}/>
    <Disciplina nome="Aspectos Legais da Informática" carga={30} aval="⭐⭐⭐⭐" lab={false}/>
  </div>;
}

export default App
