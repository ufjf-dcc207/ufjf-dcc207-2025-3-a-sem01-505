import "./Disciplina.css";

type DisciplinaProps = {
    nome: string;
    carga: number;
    aval: number;
    lab: boolean;
}

export default function Disciplina({
    nome,
    carga,
    aval,
    lab,
}: DisciplinaProps){
    return(
        <div className="disciplina">
            <div className="nome">{nome}</div>
            <div className="carga">{carga.toLocaleString()}hr</div>
            <div className="avaliacao">{aval}</div>
            <div className="lab">{lab}</div>
        </div>
    )
}