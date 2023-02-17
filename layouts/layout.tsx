import { ReactElement } from "react";
import Link from "next/link";

interface LayoutProps {
    planets: string[],
    children: ReactElement,
}

export const Layout = ({planets, children}: LayoutProps) => {
    return (
        <div>
            <header style={{"display": "flex"}}>
                {planets.map(planet => <Link href={planet} key={planet} style={{"margin": "1rem"}}>{planet}</Link>)}
            </header>
            {children}
        </div>
    )
}