import "./Disciplina.css";

interface DisciplinaProps{
    nome?: string;
    carga?: number;
    aval?: string;
    lab?: boolean;
}

export default function Disciplina({
    nome = "Desconhecido",
    carga = 0.0,
    aval = "?",
    lab = true,
}: DisciplinaProps){
    return(
        <div className="disciplina">
            <div className="nome">{nome}</div>
            <div className="carga">{carga.toLocaleString()}hr</div>
            <div className="avaliacao">{aval}</div>
            
            <div className="lab">Sala/Lab{lab}</div>
        </div>
    )
}