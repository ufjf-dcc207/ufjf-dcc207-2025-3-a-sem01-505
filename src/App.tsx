import './App.css'
import Disciplina from './Disciplina'
import Periodo from './Periodo'
import Vertente from './Vertente'

type PeriodoType = [string, VertenteType[]]
type VertenteType = [string, DisciplinaType[]];
type DisciplinaType = [string, number, number, boolean];

const PERIODO:PeriodoType[] = [
  [
    "1º",
    [
      "FORMAÇÃO BÁSICA",
      [
        ["Algoritmos I - teórica", 60, 5, false],
        ["Algoritmos I - prática", 30, 5, true],
        ["Geometria Analítica e Sistemas Lineares", 30, 5, false],
        ["Geometria Analítica e Sistemas Lineares", 60, 5, false],
        ["Lógica e Fundamentos para a Computação", 60, 5, false],
        ["Desenvolvimento Web", 30, 5, true],
        ["Introdução à Sistemas de Informação", 30, 5, true],
      ],
    ],
  ],
  [
    "2º",
    [
      "FORMAÇÃO BÁSICA",
      [
        ["Algoritmos II - teórica", 60, 5, false],
        ["Algoritmos II - prática", 30, 5, true],
        ["Cálculo I", 60, 5, false],
        ["Aspectos Organizacionais de Sistemas de Informação", 60, 5, false],
        ["Desenvolvimento Web II", 30, 5, true],
      ],
    ],
  ],
  [
    "2º",
    [
      "FORMAÇÃO COMPLEMENTAR E SUPLEMENTAR/HUMANÍSTICA",
      [
        ["Administração e Organização de Empresas", 60, 5, false],
        ["Introdução à Extensão", 60, 5, false],
      ],
    ],
  ],

]

export default function App(){
  return (
    <div className="app">
      {Periodo.map((per) => (
        <Periodo key={per[0]} periodo={per[0]}>
          {per[1].map((vert) =>(
            <Vertente key={vert[0]} ramo={vert[0]}>
              {vert[1].map((disc) => (
                <Disciplina key={disc[0]} nome={disc[0]} carga={disc[1]} aval={disc[2]} lab={disc[3]}/>
              ))}
            </Vertente>
          ))}
        </Periodo>
      ))}

    </div>
  )
}
