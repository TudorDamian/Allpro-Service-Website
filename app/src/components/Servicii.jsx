import React, {forwardRef} from 'react'
import {
    BoxInContainerSX,
    Center,
    ContainerSX,
    DescriereSectiuneSX,
    SectiuneTitluFontSX,
    UnderlineTextSX
} from "../App.styles";
import {Box, Container} from "@mui/material";
import Typography from "@mui/material/Typography";

export const Servicii = forwardRef((props, ref) => {

    return <div ref={ref} style={Center}>
        <Container
            sx={ContainerSX}
            maxWidth={false}
        >
            <Box
                sx={BoxInContainerSX}
            >
                <Typography component="h2" variant="h3" color="text.primary" style={SectiuneTitluFontSX}>
                    Servicii
                </Typography>
                <Box sx={UnderlineTextSX}/>
                <Typography textAlign='left' variant="body1" color="text.secondary" style={DescriereSectiuneSX}>
                    <ul>
                        <li>Debitări de precizie table până la 25 mm pe mașini de debitat cu plasmă CNC.</li>
                        <li>Debitări table pe ghilotina CNC cu grosimea de până la 10 mm și lungimea de până la 3 m.
                        </li>
                        <li>Îndoiri table cu grosimi de până la 10 mm și lungimi de până la 3m pe presă hidraulică
                            Abkant cu CNC.
                        </li>
                        <li>Rolluit profile cu diferite dimensiuni pe mașină de rolluit cu CNC.</li>
                        <li>Execuția de subansamble sudate, din oțel, inox sau aluminiu, cu sudori autorizați.</li>
                        <li>Confecții metalice din oțel, inox sau fier forjat pentru porți, garduri, copertine,
                            balustrade.
                        </li>
                        <li>Confecții și construcții structuri metalice pentru hale.</li>
                        <li>Grilaje metalice zincate.</li>
                        <li>Prelucrări mecanice.</li>
                        <li>Diverse lucrări de lăcătușerie.</li>
                        <li>Relocări de echipamente și utilaje.</li>
                        <li>Avem colaborări în domeniile: zincări; sablări; vopsirii în câmp electrostatic.</li>
                    </ul>
                </Typography>
            </Box>
        </Container>
    </div>
})