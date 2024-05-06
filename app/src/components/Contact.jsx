import React, {forwardRef} from 'react'
import {BoxInContainerSX, Center, ContainerSX, SectiuneTitluFontSX, UnderlineTextSX} from "../App.styles";
import {Box, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Map from "./Map";
import DateContact from "./DateContact";
import ContactForm from "./ContactForm";

export const Contact = forwardRef((props, ref) => {

    const defaultCenter = { lat: 46.81659978131242, lng: 23.600110311395206 };
    const defaultZoom = 12.25;

    return <div ref={ref} style={Center}>
        <Container
            sx={{...ContainerSX, backgroundColor: '#EEEEEE'}}
            maxWidth={false}
        >
            <Box
                sx={BoxInContainerSX}
            >
                <Typography component="h2" variant="h3" color="text.primary" style={SectiuneTitluFontSX}>
                    Contact
                </Typography>
                <Box sx={UnderlineTextSX}/>
                <Grid container>
                    <Grid item xs={12}>
                        <Map center={defaultCenter} zoom={defaultZoom}/>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{textAlign: "left"}}>
                        <DateContact/>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{textAlign: "left"}}>
                        <ContactForm/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </div>
})