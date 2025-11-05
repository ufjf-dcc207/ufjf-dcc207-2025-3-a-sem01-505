import type { ReactNode } from "react";
import "./Periodo.css";

type PeriodoProps = {
    periodo: string;
    children?: ReactNode;
}

export default function Periodo({
    periodo,
    children,
}: PeriodoProps){
    return(
        <div className="periodoPai">
            <div className="periodo">Período{periodo.toLocaleString()}</div>
            <div className="ramos">{children}</div>
            <div className="disciplinas">{children}</div>
        </div>
    )
}
           
