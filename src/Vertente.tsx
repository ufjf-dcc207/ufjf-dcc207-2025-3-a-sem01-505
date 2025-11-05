import type { ReactNode } from "react";
import "./Vertente.css";

type VertenteProps = {
    ramo: string;
    children?: ReactNode;
}

export default function Vertente({
    ramo,
    children,
}: VertenteProps){
    return(
        <div className="vertente">
            <div className="ramo">{ramo}</div>
            <div className="disciplinas">{children}</div>
        </div>
    )
}