import React, {useRef} from 'react'
import {CssBaseline} from "@mui/material";
import {Appbar} from "./components/Appbar";
import {Acasa} from "./components/Acasa";
import {Servicii} from "./components/Servicii";
import {Despre} from "./components/Despre";
import CompanyStats from "./components/CompanyStats";
import {Proiecte} from "./components/Proiecte";
import {Contact} from "./components/Contact";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PaginaProiecte from './components/PaginaProiecte'; // Import your new component


export const App = () => {
    const acasaRef = useRef(null);
    const serviciiRef = useRef(null);
    const despreRef = useRef(null);
    const proiecteRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <Router>
            <div>
                <CssBaseline/>
                <Appbar refs={{ acasaRef, serviciiRef, despreRef, proiecteRef, contactRef }}/>
                <Switch>
                    <Route path="/" exact>
                        <Acasa ref={acasaRef} toRef={serviciiRef} />
                        <Servicii ref={serviciiRef}/>
                        <Despre ref={despreRef}/>
                        <CompanyStats/>
                        <Proiecte ref={proiecteRef}/>
                        <Contact ref={contactRef}/>
                    </Route>
                    <Route path="/pagina-proiecte">
                        <PaginaProiecte />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}