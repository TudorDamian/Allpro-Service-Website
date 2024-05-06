import React, {forwardRef} from 'react'
import {
    BoxInContainerSX,
    Center,
    ContainerSX,
    DescriereSectiuneSX,
    SectiuneTitluFontSX,
    UnderlineTextSX
} from "../App.styles";
import {Box, Button, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ImageGrid} from "./ImageGrid";
import { Link } from 'react-router-dom';

export const Proiecte = forwardRef((props, ref) => {

    return <div ref={ref} style={Center}>
        <Container
            sx={ContainerSX}
            maxWidth={false}
            padding={0}
        >
            <Box
                sx={BoxInContainerSX}
            >
                <Typography component="h2" variant="h3" color="text.primary" style={SectiuneTitluFontSX}>
                    Proiecte
                </Typography>
                <Box sx={UnderlineTextSX}/>
                <ImageGrid/>
            </Box>
            <Button href={'/pagina-proiecte'} disableRipple variant="outlined" sx={{backgroundColor: 'transparent', borderColor: '#00ADB5', color: '#00ADB5', ...DescriereSectiuneSX}}>
                Vezi mai multe
            </Button>
        </Container>
    </div>
})